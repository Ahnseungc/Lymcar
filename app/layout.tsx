"use client";

import Header from "@components/header";

import Head from "./head";
import StyledComponentsRegistry from "./lib/registry";
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
