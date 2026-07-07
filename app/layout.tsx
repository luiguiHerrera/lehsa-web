import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "LEHSA Ingeniería y Suministros S.A.S. | Suministros industriales especializados",
    template: "%s | LEHSA",
  },
  description:
    "Suministros industriales especializados para seguridad industrial, protección contra incendios, control de derrames y continuidad operativa en Cartagena y el Caribe colombiano.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
