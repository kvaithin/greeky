import "./globals.css";
import { Comic_Neue } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GA_TRACKING_ID } from "@/utils/constants";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Greek Gods Family Tree",
  description: "Family Tree of the Greek Gods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
      <body suppressHydrationWarning={true} className={comicNeue.className}>
        {children}
      </body>
    </html>
  );
}
