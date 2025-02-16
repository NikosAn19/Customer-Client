import { PropsWithChildren } from "react";
import Header from "../../components/Header/Header";
import "../CSS/globalSettings.css";
import Footer from "../../components/Footer/Footer";

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
