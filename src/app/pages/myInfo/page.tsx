import Image from 'next/image'
import HeaderMain from '@/components/header-main'
import HeaderMainMyInfo from '@/components/header-main-my-info'
import {
	AsideContacts,
	AsideDate,
	AsidePosition,
	AsideReportsDirect,
} from '@/components/ui/aside'
import { Link } from 'lucide-react'
import avatarImg from '@/assets/logoUser/LogoUser.png'
import TimeOff from '@/components/time-off'

// <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>

export default function TimeOffPage() {
	// relative top-[-14px] left-[-57px]  //relative top-[80px] left-1/2 transform -translate-x-1/2
	return (
		<section className='time-off-page px-[4.4rem] relative top-[-176px] w-full flex flex-col justify-center items-center'>
			{/* <div className='header-main relative z-10  h-44 flex items-end justify-center bg-slate-200/60  '>
				<HeaderMainMyInfo />
			</div> */}

			<div className='container-body relative top-[70px] left-0 w-full flex justify-between items-start '>
				<aside className='aside-my-info relative -top-[50px] text-sm font-medium mr-6 '>
					<div className='aside-my-info__avatar-img relative z-10 top-[14px] w-36 h-auto flex justify-center items-end w-full'>
						{/* <Link href='/pages/myInfo' className='flex items-center '></Link> */}
						<a href='/pages/myInfo'>
							<Image
								className='img '
								src={avatarImg}
								alt='logo user'
								width={140}
								height={140}
							/>
						</a>
					</div>
					<div className='aside-my-info-block '>
						<AsideContacts />
						<AsideDate />
						<AsidePosition />
						<AsideReportsDirect />
					</div>
				</aside>

				<div className='w-4/5 bg-slate-500 max-w-[1047px] w-full px-4 relative '>
					<HeaderMainMyInfo />
					<TimeOff />
				</div>
			</div>
		</section>
	)
}
