import { createContext, useContext, useState } from "react";
import { ModalContextType } from "@/modules/modal/interfaces/modal.interface";

interface Props {
  children: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType>({
  state: false,
  setState: () => null,
});

export const ModalProvider = ({ children }: Props) => {
  const [state, setState] = useState(false);

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};
