import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function toggleBgHeader(el: React.MouseEvent<HTMLElement>) {
	const header = document.querySelectorAll('#header li')

	// !!!!
	if (header.length !== 0) {
		header.forEach(el => {
			el.classList.remove('active', 'bg-slate-300/60')
		})
	}
	el.currentTarget.classList.add('active', 'bg-slate-300/60')
}
export function toggleBgHeaderMain(el: React.MouseEvent<HTMLElement>) {
	const headerMain = document.querySelectorAll('#header-main li')

	// !!!!
	if (headerMain.length !== 0) {
		headerMain.forEach(el => {
			el.classList.remove('active', 'bg-slate-300/60')
		})
	}
	el.currentTarget.classList.add('active', 'bg-slate-300/60')
}
