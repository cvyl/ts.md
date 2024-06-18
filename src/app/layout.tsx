import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'
import NaviBar from '@/components/_app/_navbar'
import FooterBar from '@/components/_app/_footer'

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
		<html lang='en' suppressHydrationWarning>
			<body className={comfortaa.variable}>
				<NaviBar />
				{children}
				<FooterBar />
			</body>
		</html>
	)
}
