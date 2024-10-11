'use client'
import HeaderMainMyInfo from '@/components/header-main-my-info'
import TimeOff from '@/components/time-off'
import AsideMyInfo from '@/components/aside-my-info'
import Header from '@/components/header'

export default function TimeOffPage() {
	return (
		<section>
			<Header />
			<div className='time-off-page bg-[#F0F3F8]  relative top-0 left-0 px-5 lg:px-[4.4rem] w-full flex flex-col justify-center items-center'>
				<div className='header-main w-full absolute top-0 left-0 h-[184px] flex items-end justify-center bg-slate-300/60 border-b-2 border-black'></div>

				<div className='container-body relative z-50 top-0 left-0  w-full flex justify-between items-start pt-3'>
					<AsideMyInfo />

					<div className='w-4/5 max-w-[1047px] w-full '>
						<HeaderMainMyInfo />
						<TimeOff />
					</div>
				</div>
			</div>
		</section>
	)
}
