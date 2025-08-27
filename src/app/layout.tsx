import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "My App",
    description: "Next.js + Emotion + React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
