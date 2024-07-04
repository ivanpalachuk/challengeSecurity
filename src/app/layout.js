import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Me",
  description: "Page created for about me challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
