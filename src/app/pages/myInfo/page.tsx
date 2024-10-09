import HeaderMainMyInfo from '@/components/header-main-my-info'
import TimeOff from '@/components/time-off'
import AsideMyInfo from '@/components/aside-my-info'
import Header from '@/components/header'

export default function TimeOffPage() {
	// relative top-[-176px]
	// relative z-50 top-[58px] left-0
	return (
		<section className='time-off-page px-[4.4rem] w-full flex flex-col justify-center items-center'>
			{/* <div className='header-main relative z-10  h-44 flex items-end justify-center bg-slate-200/60  '>
				<HeaderMainMyInfo />
			</div> */}

			{/* <Header /> */}

			<div className='container-body relative z-50 top-0 left-0  w-full flex justify-between items-start pt-3'>
				<AsideMyInfo />

				<div className='w-4/5 max-w-[1047px] w-full relative '>
					<HeaderMainMyInfo />
					<TimeOff />
				</div>
			</div>
		</section>
	)
}
