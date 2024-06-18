import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const comfortaa = Comfortaa({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-comfortaa'
})

export const metadata: Metadata = siteConfig

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={comfortaa.variable}>{children}</body>
		</html>
	)
}
