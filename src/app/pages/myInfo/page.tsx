import HeaderMainMyInfo from '@/components/header-main-my-info'
import TimeOff from '@/components/time-off'
import AsideMyInfo from '@/components/aside-my-info'

export default function TimeOffPage() {
	return (
		<section className='time-off-page px-[4.4rem] w-full flex flex-col justify-center items-center'>
			<div className='container-body relative z-50 top-0 left-0  w-full flex justify-between items-start pt-3'>
				<AsideMyInfo />

				<div className='w-4/5 max-w-[1047px] w-full '>
					<HeaderMainMyInfo />
					<TimeOff />
				</div>
			</div>
		</section>
	)
}
