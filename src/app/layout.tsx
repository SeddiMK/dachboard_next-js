import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '../components/header'

import { Inter } from 'next/font/google'
import HeaderMain from '@/components/header-main'
import { Head } from 'next/document'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'HarmonyHR',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased overflow-x-hidden px-4.5 flex flex-col justify-start items-center`}
			>
				<div className='wrapper  max-w-[1440px]'>
					<Header />
					<main className='main '>
						<HeaderMain />
						<div className='wrp w-full bg-[#F0F3F8]'>{children}</div>
					</main>
				</div>
			</body>
		</html>
	)
}
