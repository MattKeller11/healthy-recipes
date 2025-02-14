import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { appMetadata } from "./metadata";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = appMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* <meta content="ca-pub-9742468069936848" name="google-adsense-account" /> */}
        {/* <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9742468069936848"
        ></script> */}
      </head>
      {/* Google Analytics */}
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-CE5KD70FXZ`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CE5KD70FXZ');`,
        }}
        id="gtag-init"
        strategy="lazyOnload"
      /> */}
      <SpeedInsights />
      <Analytics />
      <body className={`${rubik.variable} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
