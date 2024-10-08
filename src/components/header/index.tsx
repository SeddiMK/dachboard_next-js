'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Bell, Search, Settings, CircleHelp } from 'lucide-react'
import { Input } from '../ui/input'
import avatarImg from '@/assets/logoUser/LogoUser.png'

import { toggleBgHeader } from '@/lib/utils'

export default function Header() {
	return (
		<header className='header flex sm:flex-col sm:justify-start sm:items-center h-20  2xl:justify-start 2xl:items-end pr-6'>
			<div className='header__logo p-6 mr-7 font-semibold'>
				<Link href='/'>HarmonyHR</Link>
			</div>
			<nav className='w-full font-medium text-lg'>
				<ul id='header  ' className='flex items-end h-full'>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/pages/home'>Home</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/pages/myInfo'>My Info</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/people'>People</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/hiring'>Hiring</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/reports'>Reports</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/files'>Files</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/pages/about'>About</Link>
					</li>
				</ul>
			</nav>

			<div className='header__search relative flex-1 md:grow-0 mr-14 mt-8 mb-4'>
				<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
				<Input
					type='search'
					placeholder='Search...'
					className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
				/>
			</div>
			<div className='header__icon-office flex gap-x-4 items-end mt-8 mb-4'>
				<div className='settings h-full flex items-end mb-2'>
					<button className='icon settings'>
						<span className='icon' role='img' aria-label='settings'>
							<Settings />
						</span>
					</button>
				</div>
				<div className='question h-full flex items-end mb-2'>
					<Link href='/' className='icon question'>
						<span className='icon' role='img' aria-label='question'>
							<CircleHelp />
						</span>
					</Link>
				</div>
				<div className='alerts h-full flex items-end mb-2'>
					<button className='icon alerts'>
						<Bell />
					</button>
				</div>
				<div className='user-cabinet h-full flex items-center w-10 flex items-start'>
					<Link href='/' className='icon cabinet flex items-center'>
						<Image src={avatarImg} alt='logo user' width={40} height={40} />
					</Link>
				</div>
			</div>
		</header>
	)
}
