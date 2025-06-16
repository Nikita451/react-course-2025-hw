import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectRequestStatus } from "../slices/request";
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

export function useRequest<T1, T2>(
  thunk: AsyncThunk<T1, T2, AsyncThunkConfig>,
  params?: T2
) {
  const dispatch = useDispatch<AppDispatch>();
  const [request, setRequest] = useState<RequestState | null>();

  const requestStatus = useSelector((state: RootState) =>
    selectRequestStatus(state, request?.requestId)
  );

  useEffect(() => {
    // Если параметр объявить как T2 & undefined, то куча ошибок и несовместимоей по типам при использовании хука.
    const request = dispatch(thunk(params as T2 & undefined));

    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [dispatch, thunk, params]);

  return requestStatus;
}
