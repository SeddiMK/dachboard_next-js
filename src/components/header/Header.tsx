import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell, Search, Settings, CircleHelp } from 'lucide-react'
import { Input } from '../ui/input'
import avatarImg from '@/assets/logoUser/LogoUser.png'

export default function Header() {
	return (
		<header>
			<div className='logo'>
				<Link href='/'>----Header---</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/pages/myInfo/timeOff'>My Info</Link>
					</li>
					<li>
						<Link href='/'>People</Link>
					</li>
					<li>
						<Link href='/'>Hiring</Link>
					</li>
					<li>
						<Link href='/'>Reports</Link>
					</li>
					<li>
						<Link href='/'>Files</Link>
					</li>
					<li>
						<Link href='/pages/about'>About</Link>
					</li>
				</ul>
			</nav>

			<div className='relative ml-auto flex-1 md:grow-0'>
				<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
				<Input
					type='search'
					placeholder='Search...'
					className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
				/>
			</div>
			<div className='icon-office'>
				<div className='settings'>
					<button className='icon settings'>
						<span className='icon' role='img' aria-label='settings'>
							<Settings />
						</span>
					</button>
				</div>
				<div className='question'>
					<Link href='/' className='icon question'>
						<span className='icon' role='img' aria-label='question'>
							<CircleHelp />
						</span>
					</Link>
				</div>
				<div className='alerts'>
					<button className='icon alerts'>
						<Bell />
					</button>
				</div>
				<div className='user-cabinet'>
					<Link href='/' className='icon cabinet flex items-center gap-4'>
						<Avatar>
							<AvatarImage
								src='https://github.com/shadcn.png'
								alt='avatar user'
							></AvatarImage>
							<AvatarFallback>HR</AvatarFallback>
						</Avatar>
						<Image src={avatarImg} alt='logo user' width={40} height={40} />
					</Link>
				</div>
			</div>
		</header>
	)
}
