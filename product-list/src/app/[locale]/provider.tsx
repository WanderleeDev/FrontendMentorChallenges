"use client";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/modules/modal/context/modalContext";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}
