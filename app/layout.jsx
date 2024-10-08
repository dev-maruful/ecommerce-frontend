import GlobalProvider from "@/components/shared/GlobalProvider";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans_init = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm_sans",
});

export const metadata = {
  title: "eCommerce",
  description:
    "Your one and only eCommerce solution. Take our service or you are a gay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans_init.variable} font-dm_sans antialiased`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
