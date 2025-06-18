import type { FC, JSX } from "react";
import {
  IDLE,
  PENDING,
  REJECTED,
  type RequestStatus,
} from "../../redux/entities/request/request";

export interface Props {
  status: RequestStatus;
  children: JSX.Element;
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
