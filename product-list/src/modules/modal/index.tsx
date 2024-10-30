"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context/modalContext";
import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
}

export function Modal({ children }: Props) {
  const { state, setState } = useModalContext();
  const closeNModal = () => setState(false);
  const modalRef = useRef<HTMLElement | null>(null);
  const handleContentPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    modalRef.current = document.getElementById("modal-root");

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setState(false);
    };

    if (state) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setState, state]);

  if (!state || !modalRef.current) return null;

  return createPortal(
    <div
      id="modal-overlay"
      onClick={closeNModal}
      className={style["modal-overlay"]}
    >
      <div onClick={handleContentPropagation} className={style.modal}>
        {children}
      </div>
    </div>,
    modalRef.current
  );
}
