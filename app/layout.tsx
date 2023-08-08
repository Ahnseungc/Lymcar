"use client";

import StyledComponentsRegistry from "./lib/registry";
import Head from "../components/head";
import Header from "../components/header";

import "../styles/Main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
