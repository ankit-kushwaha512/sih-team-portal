import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SIH Team Hub",
  description: "A reusable Smart India Hackathon team workspace.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
