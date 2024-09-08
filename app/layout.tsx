import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-providrer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collabratix",
  description: "Collabratix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
      <ConvexClientProvider>
        <Toaster expand={true} closeButton position="top-right" />
          <ModalProvider />
              {children}
      </ConvexClientProvider>
          </body>
    </html>
  );
}
