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
	// relative top-[-14px] left-[-57px]  //relative top-[80px] left-1/2 transform -translate-x-1/2
	return (
		<section className='relative top-[-176px] w-full flex flex-col justify-center items-center'>
			<div className='header-main  h-44 flex items-end justify-center bg-slate-200/60  '>
				<HeaderMainMyInfo />
			</div>

			<div className='container-body max-w-[70rem] w-full flex justify-between items-start '>
				<aside className='aside-my-info text-sm font-medium  '>
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
