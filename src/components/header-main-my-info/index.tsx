'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { pagesUserCab } from '@/lib/navigate'
import avatarImg from '@/assets/logoUser/LogoUser.png'
import { CurrentPageProvider } from '../currentPageProvider'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { toggleBgHeaderMain } from '@/lib/utils'

export default function HeaderMainMyInfo() {
	return (
		<div className='my-info flex items-end justify-between pt-10  lg:pt-14'>
			<div className='header-main__navigate navigate-main h-full flex flex-col justify-end'>
				<div className='navigate-main__name-main  flex justify-between mb-9  lg:mb-3   w-full'>
					<div className='navigate-main__name text-xl sm:text-2xl font-semibold mr-11'>
						Alexandra Kuibyshevskaya
					</div>
					<div className='navigate-main__main flex flex-wrap gap-4 gap-x-4 justify-center'>
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
								className='rounded-lg w-14 h-[40.54px] bg-inherit border-slate-400 border-2 bg-select-setting bg-1r bg-[center_left_0.55rem] bg-no-repeat'
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
						className='flex justify-between items-end flex-wrap h-full'
					>
						{pagesUserCab.map((el, ind) => (
							<li
								className='p-4 rounded-t-lg text-nowrap'
								key={el.name + ind}
								onClick={e => toggleBgHeaderMain(e)}
							>
								<Link href='/pages/myInfo'>Personal</Link>
							</li>
						))}

						<li className='link-li select p-4  '>
							<select
								name='pets'
								id='pet-select'
								className='rounded-sm w-full bg-inherit '
							>
								<option value='more'>More</option>
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
