import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LEHSA Suministros Industriales S.A.S.",
    template: "%s | LEHSA",
  },
  description:
    "Suministros industriales especializados con acompañamiento técnico en protección contra incendios, control de derrames, equipos de proceso y seguridad industrial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 font-sans text-slate-950">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}