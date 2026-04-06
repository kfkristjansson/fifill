import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fífill — Daglegar æfingar fyrir núvitund",
  description:
    "Núvitundaræfingar, námskeið og bóksala. Átta vikna forrit með leiðbeiningum og hljóðupptökum.",
  openGraph: {
    title: "Fífill — Daglegar æfingar fyrir núvitund",
    description: "Núvitundaræfingar, námskeið og bóksala.",
    url: "https://fifill.is",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is" className={poppins.variable}>
      <body className="font-sans antialiased text-earth-800">
        {children}
      </body>
    </html>
  );
}
