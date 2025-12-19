import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <nav className="nav">OffertAI</nav>
        {children}
        <footer className="footer">© OffertAI</footer>
      </body>
    </html>
  );
}
