'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Bell, Search, Settings, CircleHelp } from 'lucide-react'
import { Input } from '../ui/input'
import avatarImg from '@/assets/logoUser/LogoUser.png'

import { toggleBgHeader } from '@/lib/utils'
import { MenuBerger } from '../burger'
import { pagesHeader } from '@/lib/navigate'

const nameMenuHeader = pagesHeader.map(pagesHeader => pagesHeader.name)

export default function Header() {
	// const[ menuLi, setMenuLi] = useState({})

	return (
		<header className='header w-full flex px-6 justify-between items-center flex-row lg:flex-col  xl:flex-row  xl:justify-start xl:items-end '>
			<div className='header__logo py-6 font-semibold  order-1 xl:mr-7 '>
				<Link href='/'>HarmonyHR</Link>
			</div>
			<nav className='w-full font-medium text-lg hidden  lg:block  lg:order-3 xl:visible xl:order-2 '>
				<ul
					id='header'
					className='flex sm:items-center sm:justify-center items-end  h-full'
				>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='/'>Home</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='../pages/myInfo'>My Info</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='../people'>People</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='../hiring'>Hiring</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='../reports'>Reports</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='../files'>Files</Link>
					</li>
					<li
						className='p-4 pl-3 pr-3 rounded-t-lg text-nowrap'
						onClick={e => toggleBgHeader(e)}
					>
						<Link href='../pages/about'>About</Link>
					</li>
				</ul>
			</nav>

			<div className='header__search relative   gap-4 hidden lg:flex lg:order-2 xl:visible xl:order-3 sm:items-center   flex-1 sm:grow-0  xl:mt-8 mb-4 '>
				<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
				<Input
					type='search'
					placeholder='Search...'
					className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
				/>
				<div className='header__icon-office flex gap-x-4 sm:items-center  xl:items-end '>
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
			</div>
			<div className='menu-burger  order-2 block lg:hidden '>
				<MenuBerger nameMenuHeader={nameMenuHeader} />
			</div>
		</header>
	)
}
