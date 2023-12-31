import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/context/CartContext'
import { AuthProvider } from '@/components/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CartProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
      </CartProvider>
      </body>
    </html>
  )
}
