import type { Dispatch } from "react";
import type { GitContextStateProps } from "./gitContextStateInterface";
import type { GitAction } from "../../types/gitTypes";

export interface GitContextTypeProps extends GitContextStateProps{
  dispatch: Dispatch<GitAction>;
  clearUsers: () => void;
}