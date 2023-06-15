import { Abel } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

const abel_font = Abel({
  weight:'400',
  subsets: ['latin'] 
  })

export const metadata = {
  title: 'Wordhell',
  description: 'A version of wordle in React created for fun.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abel_font.className}>{children}</body>
    </html>
  );
}
