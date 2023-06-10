import './globals.css'

export const metadata = {
  title: 'Tomasz Ikert - Frontend Developer',
  description: 'Check out my AMAZING 8-bit portfolio website!',
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
