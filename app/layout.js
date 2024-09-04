import {Inter} from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head component

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Excel 2024",
  description:
    "Coming Soon Website of Excel 2024, the annual national-level technical symposium of Govt. Model Engineering College, Thrikkakara.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icon.ico" />

        {/* <link
          rel="icon"
          href="/favicon.png"  // Correct path for PNG favicon
          sizes="any"
          // type="image/png"
        /> */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
