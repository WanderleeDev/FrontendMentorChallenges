import { Dispatch, SetStateAction } from "react";

export interface ModalContextType {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}
