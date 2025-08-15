import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationDropdown from './components/NavigationDropdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akolo Technologies',
  description: 'Welcome to Akolo Technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {/* Top Bar */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex justify-between items-center h-16 px-6 sm:px-8">
              <div className="flex items-center">
                <a href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                  Akolo Technologies
                </a>
              </div>
              <div className="flex items-center">
                <NavigationDropdown />
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 