import {Inter} from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script"; // Import Script component

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Excel 2024 ",
  description:
    "Coming Soon Website of Excel 2024, the annual national-level technical symposium of Govt. Model Engineering College, Kochi.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Excel 2024" />
        <meta
          name="keywords"
          content="Excel 2024, Technical Symposium, Govt. Model Engineering College, Kochi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://coming-soon-2024.pages.dev/" />
      </Head>
      <body className={inter.className}>
        {children}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-QHQF8FR8MC"
        />
        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QHQF8FR8MC', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
