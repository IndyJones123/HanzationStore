import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanzation Store",
  description: "Hanzation Store adalah platform terkemuka untuk berbagi dan memainkan game Steam dengan teman-teman. Kami menawarkan berbagai game dengan harga terjangkau dan proses berbagi yang mudah dan aman. Temukan koleksi game terbaru, dari game populer hingga indie, dan nikmati pengalaman bermain tanpa batas. Bergabunglah dengan komunitas Hanzation Store dan rasakan keseruan berbagi game tanpa ribet!",
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
