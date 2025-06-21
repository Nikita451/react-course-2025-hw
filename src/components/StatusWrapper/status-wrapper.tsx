import type { FC, JSX } from "react";
import { type RequestStatus } from "../../redux/entities/request/request";

export interface Props {
  status?: RequestStatus;
  children: JSX.Element;
  isFetching?: boolean;
  isError?: boolean;
}

export const StatusWrapper: FC<Props> = ({ isError, isFetching, children }) => {
  if (isFetching) {
    return "Loading...";
  }

  if (isError) {
    return "Error...";
  }

  return children;
};
