'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { pagesUserCab } from '@/lib/navigation'
import avatarImg from '@/assets/logoUser/LogoUser.png'
import { CurrentPageProvider } from '../currentPageProvider'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export default function HeaderMain() {
	const [isActive, setIsActive] = useState(true)

	return (
		<section className='header-main h-44 flex items-end justify-center bg-slate-300/60'>
			<div className='header-main__avatar-img w-auto h-auto mr-16'>
				<Link href='/' className='icon cabinet flex items-center'>
					<Image src={avatarImg} alt='logo user' width={140} height={140} />
				</Link>
			</div>
			<div className='header-main__navigate navigate-main h-full flex flex-col justify-end'>
				<div className='navigate-main__name-main flex justify-between mb-6'>
					<div className='navigate-main__name text-2xl font-semibold'>
						Alexandra Kuibyshevskaya
					</div>
					<div className='navigate-main__main flex gap-x-4'>
						<div className='navigate-main__req-change'>
							<select
								name='pets'
								id='pet-select'
								className='rounded-lg w-26 p-2 bg-inherit border-slate-400 border-2'
							>
								<option value=''>Request a Change</option>
								<option value='dog'>Dog</option>
								<option value='cat'>Cat</option>
								<option value='hamster'>Hamster</option>
								<option value='parrot'>Parrot</option>
								<option value='spider'>Spider</option>
								<option value='goldfish'>Goldfish</option>
							</select>
						</div>
						<div className='navigate-main__setting '>
							<select
								name='pets'
								id='pet-select'
								className='rounded-lg w-14 h-9 bg-inherit border-slate-400 border-2 bg-select-setting bg-1r bg-[center_left_0.55rem] bg-no-repeat'
							>
								<option value='klk'></option>
								<option value='dog'>Dog</option>
								<option value='cat'>Cat</option>
								<option value='hamster'>Hamster</option>
								<option value='parrot'>Parrot</option>
								<option value='spider'>Spider</option>
								<option value='goldfish'>Goldfish</option>
							</select>
						</div>
					</div>
				</div>

				<nav className='w-full'>
					<ul className='flex items-end h-full'>
						{pagesUserCab.map(el => (
							<CurrentPageProvider key={el.name} href={el.href}>
								<Link
									href={el.href}
									className={twMerge(
										clsx(
											// ${isActive ? 'focus:bg-slate-300/60':''}
											// 'focus:bg-slate-300/60',
											// 'active:bg-slate-300/60',
											'rounded-t-lg text-zinc-600 group-[.active-page] text-nowrap p-4 pl-3 pr-3',
											{
												'bg-slate-300/60': isActive,
												'bg-slate-300/60': !isActive,
											}
										)
									)}
									onClick={() => setIsActive(!isActive)}
								>
									{el.label}
								</Link>
							</CurrentPageProvider>
						))}
						{/* <li className='p-4'>
							<Link href='/pages/home'>Personal</Link>
						</li> */}

						<li className='link-li select p-3'>
							<select
								name='pets'
								id='pet-select'
								className='rounded-sm w-16 bg-inherit'
							>
								<option value=''>More</option>
								<option value='dog'>Dog</option>
								<option value='cat'>Cat</option>
								<option value='hamster'>Hamster</option>
								<option value='parrot'>Parrot</option>
								<option value='spider'>Spider</option>
								<option value='goldfish'>Goldfish</option>
							</select>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	)
}
function setState(arg0: boolean): [any, any] {
	throw new Error('Function not implemented.')
}
