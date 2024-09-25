// import Image from 'next/image'
import { Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Select, Option } from '@material-tailwind/react'

import avatarImg from '@/assets/logoUser/LogoUser.png'
import { TESelect } from 'tw-elements-react'

// import { TESelect } from 'tw-elements-react'

// import withMT from '@material-tailwind/react/utils/withMT'

// module.exports = withMT({
// 	content: ['./src/**/*.{js,jsx,ts,tsx}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// })

export default function Authentication() {
	// const data = [
	// 	{
	// 		text: 'One',
	// 		value: 1,
	// 		icon: 'https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp',
	// 	},
	// 	{
	// 		text: 'Two',
	// 		value: 2,
	// 		icon: 'https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp',
	// 	},
	// 	{
	// 		text: 'Three',
	// 		value: 3,
	// 		icon: 'https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
	// 	},
	// ]

	return (
		<div className=''>
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
							<div className='navigate-main__setting'>
								<select
									name='pets'
									id='pet-select'
									className='rounded-lg w-14 h-9 bg-inherit border-slate-400 border-2 bg-[url("~@/assets/icons/header/settings/Settings.svg")] bg-auto bg-left bg-no-repeat'
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
							<li className='p-4'>
								<Link href='/pages/home'>Personal</Link>
							</li>
							<li className='p-4'>
								<Link href='/pages/myInfo/timeOff'>Job</Link>
							</li>
							<li className='p-4'>
								<Link href='/pages/myInfo/timeOff'>Time Off</Link>
							</li>
							<li className='p-4'>
								<Link href='/'>Emergency</Link>
							</li>
							<li className='p-4'>
								<Link href='/'>Documents</Link>
							</li>
							<li className='p-4'>
								<Link href='/'>Notes</Link>
							</li>
							<li className='p-4'>
								<Link href='/'>Benefits</Link>
							</li>
							<li className='p-4'>
								<Link href='/'>Training</Link>
							</li>
							<li className='p-4'>
								<Link href='/'>Assets</Link>
							</li>
							<li className='p-4'>
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
			<div className='container px-16'>
				<section className='main-body'>Body</section>
			</div>
		</div>
	)
}
