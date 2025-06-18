import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectRequestStatus } from "../entities/request/request";
import type { AppDispatch, RootState } from "../store";
import type {
  AsyncThunk,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";

interface RequestState {
  requestId: string;
  abort: () => void;
}

type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

export function useRequest<ReturnedValue, ThunkArg>(
  thunk: AsyncThunk<ReturnedValue, ThunkArg, AsyncThunkConfig>,
  params?: ThunkArg
) {
  const dispatch = useDispatch<AppDispatch>();
  const [request, setRequest] = useState<RequestState | null>();

  const requestStatus = useSelector((state: RootState) =>
    selectRequestStatus(state, request?.requestId)
  );

  useEffect(() => {
    // Если параметр объявить как T2 & undefined, то куча ошибок и несовместимоей по типам при использовании хука.
    const request = dispatch(thunk(params as ThunkArg & undefined));

    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [dispatch, thunk, params]);

  return requestStatus;
}
