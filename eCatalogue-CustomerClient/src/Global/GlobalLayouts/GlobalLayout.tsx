import { PropsWithChildren } from "react";
import Header from "../../components/Header/Header";
import "../CSS/globalSettings.css";

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
