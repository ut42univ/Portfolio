import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
