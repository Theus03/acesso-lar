import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AcessoLar</title>
        <meta name="description" content="Acesso Lar" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-primary`}>
          <AuthProvider>
            {children}
            <Toaster richColors position="top-center" />
          </AuthProvider>
      </body>
    </html>
  );
}
