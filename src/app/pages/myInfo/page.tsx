import HeaderMain from '@/components/header-main'
import HeaderMainMyInfo from '@/components/header-main-my-info'
import {
	AsideContacts,
	AsideDate,
	AsidePosition,
	AsideReportsDirect,
} from '@/components/ui/aside'
// <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>

export default function TimeOff() {
	return (
		<section className=' w-full flex  justify-center items-start'>
			<div className='header-main relative top-[-176px] z-50  h-44 flex items-end justify-center bg-slate-200/60 relative top-[80px] left-1/2 transform -translate-x-1/2 '>
				<HeaderMainMyInfo />
			</div>

			<div className='container-body max-w-[70rem] w-full flex justify-between items-start '>
				<aside className='aside-my-info text-sm font-medium relative top-[-14px] left-[-57px] '>
					<AsideContacts />
					<AsideDate />
					<AsidePosition />
					<AsideReportsDirect />
				</aside>

				<div className='w-4/5'>---------TimeOff---------</div>
			</div>
		</section>
	)
}
