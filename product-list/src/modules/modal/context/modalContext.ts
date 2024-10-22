import { createContext } from "react";
import { ModalContextType } from "@/modules/modal/interfaces/modal.interface";

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalProvider = ModalContext.Provider;
