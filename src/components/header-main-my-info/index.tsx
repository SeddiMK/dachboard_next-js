'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { pagesUserCab } from '@/lib/navigation'
import avatarImg from '@/assets/logoUser/LogoUser.png'
import { CurrentPageProvider } from '../currentPageProvider'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { toggleBgHeaderMain } from '@/lib/utils'

export default function HeaderMainMyInfo() {
	return (
		<div className='my-info flex items-end justify-center'>
			<div className='header-main__avatar-img w-36 h-auto mr-16'>
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

				<nav className='w-full '>
					<ul
						id='header-main'
						className='flex justify-between items-end h-full'
					>
						{/* {pagesUserCab.map(el => (
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
						))} */}

						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Personal</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Job</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Time Off</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Emergency</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Documents</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Notes</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Benefits</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Training</Link>
						</li>
						<li
							className='p-4 rounded-t-lg text-nowrap'
							onClick={e => toggleBgHeaderMain(e)}
						>
							<Link href='/pages/myInfo'>Assets</Link>
						</li>
						<li className='link-li select p-4'>
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
		</div>
	)
}
