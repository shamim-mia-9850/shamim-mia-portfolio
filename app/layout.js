import "./globals.css";

export const metadata = {
  title: "Shamim Mia | Portfolio",
  description: "Portfolio of Shamim Mia — Social Science graduate, Quality Inspector and Computer Operator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}