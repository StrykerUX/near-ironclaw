import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { PHProvider } from "./providers";

const fkGrotesk = localFont({
  src: [
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Thin.woff2",    weight: "100" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Light.woff2",   weight: "300" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Regular.woff2", weight: "400" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Medium.woff2",  weight: "500" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Bold.woff2",    weight: "700" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Black.woff2",   weight: "900" },
  ],
  variable: "--font-fk-grotesk",
  display: "swap",
});

const fkGroteskMono = localFont({
  src: [
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Thin.woff2",    weight: "100" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Light.woff2",   weight: "300" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Regular.woff2", weight: "400" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Medium.woff2",  weight: "500" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Bold.woff2",    weight: "700" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Black.woff2",   weight: "900" },
  ],
  variable: "--font-fk-grotesk-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ironclaw.com"),
  title: "IronClaw: Unleash Your AI Agent, With Peace of Mind",
  description: "IronClaw: Unleash Your AI Agent, With Peace of Mind. The open-source secure runtime that runs AI agents in encrypted enclaves on NEAR AI Cloud.",
  openGraph: {
    title: "IronClaw: Unleash Your AI Agent, With Peace of Mind",
    description: "IronClaw: Unleash Your AI Agent, With Peace of Mind. The open-source secure runtime that runs AI agents in encrypted enclaves on NEAR AI Cloud.",
    url: "https://ironclaw.com",
    siteName: "IronClaw",
    images: [
      {
        url: "/featured-v1.jpg",
        width: 1200,
        height: 630,
        alt: "IronClaw: Unleash Your AI Agent, With Peace of Mind",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronClaw: Unleash Your AI Agent, With Peace of Mind",
    description: "IronClaw: Unleash Your AI Agent, With Peace of Mind. The open-source secure runtime that runs AI agents in encrypted enclaves on NEAR AI Cloud.",
    images: ["/featured-v1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17691708623"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17691708623');
          `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17691708623/99PrCPjJopgcEM-ZiPRB',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className={`${fkGrotesk.variable} ${fkGroteskMono.variable} antialiased`}>
        {process.env.NEXT_PUBLIC_POSTHOG_KEY ? (
          <PHProvider>{children}</PHProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
