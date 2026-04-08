import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dennis Albert | Website Development Near Me",
  description: "Dennis Albert's Web Development Agency. Premium, realistic 3D and dynamic web development services. Find the best website development near me.",
  keywords: ["Website development near me", "Dennis Albert", "Web Agency", "3D Web Development", "Next.js Development", "SEO experts"],
  openGraph: {
    title: "Dennis Albert | Web Development Agency",
    description: "Premium website development services near you.",
    siteName: "Dennis Albert Web Agency",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
