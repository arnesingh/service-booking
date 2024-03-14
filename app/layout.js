import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Service Provider",
  description: "Generated by Arjun Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-6 md:mx-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}