'use client'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CurrentPageProviderProps = {
	href: string
	children: ReactNode
}

export function CurrentPageProvider<CurrentPageProviderProps>({
	href,
	children,
}) {
	const pathname = usePathname()

	// I use `startsWith` here to handle nested routes
	const active = href === '/' ? pathname === href : pathname.startsWith(href)

	return (
		<li
			className={twMerge('link-li p-3', {
				'active-page': active,
			})}
		>
			{children}
		</li>
	)
}
