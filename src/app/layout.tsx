import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next + React + TS",
  description: "My App is a...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
