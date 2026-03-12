import { Providers } from "@/components/Providers";
import "@/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Souparnika Ayurvedalaya",
  description: "Peaceful spa and clinic treatments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
