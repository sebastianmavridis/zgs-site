import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Zamora Global Services  ",
  description: "Ayudamos a empresas nacionales y extranjeras a constituirse, regularizarse, operar y crecer en México de forma legal, fiscal, corporativa y administrativa.",
  keywords: "ZGS, Zamora Global Services, constitución de sociedades, cumplimiento legal, registro de marcas, contabilidad empresarial, nómina, COFEPRIS, México",
  openGraph: {
    title: "Zamora Global Services  ",
    description: "Ayudamos a empresas nacionales y extranjeras a operar y crecer en México.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="antialiased font-sans font-light">{children}</body>
    </html>
  );
}
