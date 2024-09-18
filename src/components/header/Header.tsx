import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { BellRing, Search } from 'lucide-react'
import { Input } from '../ui/input'

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
			{/* <search role='search'>
				<form method='get' action='/search'>
					<input type='search' name='search-text' />
					<button className='icon search'>Search</button>
				</form>
			</search> */}
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
						<span className='icon' role='img' aria-label='settings'></span>
					</button>
				</div>
				<div className='question'>
					<Link href='/' className='icon question'>
						<span className='icon' role='img' aria-label='question'></span>
					</Link>
				</div>
				<div className='alerts'>
					<button className='icon alerts'>
						<BellRing />
					</button>
				</div>
				<div className='user-cabinet'>
					<Link href='/' className='icon cabinet'>
						<Avatar>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>HR</AvatarFallback>
						</Avatar>
					</Link>
				</div>
			</div>
		</header>
	)
}
