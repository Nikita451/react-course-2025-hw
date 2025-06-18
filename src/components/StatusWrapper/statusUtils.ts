import {
  FULFILLED,
  PENDING,
  REJECTED,
  type RequestStatus,
} from "../../redux/entities/request/request";

export function combineStatus(...statuses: RequestStatus[]): RequestStatus {
  if (isRejected(statuses)) {
    return REJECTED;
  }
  if (isPending(statuses)) {
    return PENDING;
  }

  return FULFILLED;
}

function isRejected(statuses: RequestStatus[]) {
  return statuses.some((status) => status === REJECTED);
}

function isPending(statuses: string[]) {
  return statuses.some((status) => status === PENDING);
}
