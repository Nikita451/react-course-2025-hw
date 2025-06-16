import type { FC, JSX } from "react";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
  type RequestStatus,
} from "../../redux/slices/request";

export interface Props {
  status: RequestStatus;
  children: JSX.Element;
}

export function combineStatus(...statuses: RequestStatus[]): RequestStatus {
  if (isRejected(statuses)) {
    return REJECTED;
  }
  if (isPanding(statuses)) {
    return PENDING;
  }

  return FULFILLED;
}

export function isRejected(statuses: RequestStatus[]) {
  return statuses.some((status) => status === REJECTED);
}

export function isPanding(statuses: string[]) {
  return statuses.some((status) => status === PENDING);
}

export const StatusWrapper: FC<Props> = ({ status, children }) => {
  if (status === IDLE || status === PENDING) {
    return "Loading...";
  }

  if (status === REJECTED) {
    return "Error...";
  }

  return children;
};
