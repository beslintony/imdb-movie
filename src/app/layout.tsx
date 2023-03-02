import './global.css';

export const metadata = {
  title: 'IMBD Clone',
  description: 'An IMBD clone app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
