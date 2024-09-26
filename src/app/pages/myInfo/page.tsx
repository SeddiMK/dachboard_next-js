import HeaderMain from '@/components/header-main'
import HeaderMainMyInfo from '@/components/header-main-my-info'
import { AsideContacts } from '@/components/ui/aside'
// <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>

export default function TimeOff() {
	return (
		<section className=' w-full flex  justify-center items-start'>
			<div
				className='header-main h-44 flex items-end justify-center bg-slate-200/60 absolute top-[80px] left-1/2 transform -translate-x-1/2 
'
			>
				<HeaderMainMyInfo />
			</div>
			<aside className='aside-my-info'></aside>
			<div className='container-body max-w-[70rem] w-full flex flex-col justify-between items-center'>
				<aside className='aside-my-info'>
					<AsideContacts />
				</aside>

				<h1>---------TimeOff---------</h1>
			</div>
		</section>
	)
}
