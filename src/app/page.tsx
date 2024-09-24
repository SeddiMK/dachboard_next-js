// import Image from 'next/image'
import Link from 'next/link'

export default function Authentication() {
	return (
		<div className='font-[family-name:var(--font-geist-sans)]'>
			<div className='header-main'>
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
							<Link href='/pages/about'>Benefits</Link>
						</li>
						<li className='p-4'>
							<Link href='/pages/about'>Training</Link>
						</li>
						<li className='p-4'>
							<Link href='/pages/about'>Assets</Link>
						</li>
						<li className='p-4'>
							<Link href='/pages/about'>More</Link>
						</li>
					</ul>
				</nav>
			</div>
			<ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
				<li className='mb-2'>Get started by editing </li>
				<li>Save and see your changes instantly.</li>
				<li>
					<Link href='/pages/about'>About-----------</Link>
				</li>
				<li>
					<Link href='/pages/home'>------Home-----------</Link>
				</li>
				<li>
					<Link href='/pages/myInfo/timeOff'>
						------myInfo/timeOff-----------
					</Link>
				</li>
			</ol>

			{/* <div className='flex'>
					<a
						className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							className='dark:invert'
							src='https://nextjs.org/icons/vercel.svg'
							alt='Vercel logomark'
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Read our docs
					</a>
				</div> */}
		</div>
	)
}
