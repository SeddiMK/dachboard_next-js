import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell, Search, Settings, CircleHelp } from 'lucide-react'
import { Input } from '../ui/input'
import avatarImg from '@/assets/logoUser/LogoUser.png'

export default function Header() {
	return (
		<header className='header flex h-20 justify-items-start'>
			<div className='logo p-6 mr-7 font-semibold'>
				<Link href='/pages/home'>HarmonyHR</Link>
			</div>
			<nav className='w-full font-medium text-lg'>
				<ul className='flex items-end h-full'>
					<li className='p-4'>
						<Link href='/pages/home'>Home</Link>
					</li>
					<li className='p-4'>
						<Link href='/pages/myInfo/timeOff'>My Info</Link>
					</li>
					<li className='p-4'>
						<Link href='/'>People</Link>
					</li>
					<li className='p-4'>
						<Link href='/'>Hiring</Link>
					</li>
					<li className='p-4'>
						<Link href='/'>Reports</Link>
					</li>
					<li className='p-4'>
						<Link href='/'>Files</Link>
					</li>
					<li className='p-4'>
						<Link href='/pages/about'>About</Link>
					</li>
				</ul>
			</nav>

			<div className='relative flex-1 md:grow-0 mr-14 mt-8'>
				<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
				<Input
					type='search'
					placeholder='Search...'
					className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
				/>
			</div>
			<div className='icon-office flex gap-x-4 items-end mt-8'>
				<div className='settings h-full flex items-end mb-4'>
					<button className='icon settings'>
						<span className='icon' role='img' aria-label='settings'>
							<Settings />
						</span>
					</button>
				</div>
				<div className='question h-full flex items-end mb-4'>
					<Link href='/' className='icon question'>
						<span className='icon' role='img' aria-label='question'>
							<CircleHelp />
						</span>
					</Link>
				</div>
				<div className='alerts h-full flex items-end mb-4'>
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
