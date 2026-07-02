export const metadata = {
  title: 'Sanity Studio',
  description: 'Zarządzanie treścią dla websowo.pl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
