import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader" });

export const metadata = {
  title: "Dennis Albert | Masterpiece Web Agency",
  description: "Enterprise level custom website development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
