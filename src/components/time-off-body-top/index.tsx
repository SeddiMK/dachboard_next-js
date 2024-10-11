import Image from 'next/image'
import TimeOffIcon from '@/assets/icons/timeOff.svg'

export default function TimeOffBodyTop() {
	return (
		<>
			<div className='time-off-body__top off-body-top  border-b-[2px] border-[#7C96B1]  py-4'>
				<div className='off-body-top__title top-title font-medium text-sm flex items-end h-[80px] justify-between'>
					<div className='top-title__icon-text flex items-center mr-4'>
						<Image
							className='mr-1'
							priority
							src={TimeOffIcon}
							height={20}
							width={20}
							alt='Follow us on Company'
						/>
						<h3 className='top-title__text text-xl  text-nowrap flex items-start  mr-4'>
							Time Off
						</h3>
					</div>
					<div className='top-title__level-start level-start flex flex-wrap justify-center items-center '>
						<div className='level-start__date mb-2 lg:mb-0 lg:mr-[30px]'>
							<span className='level-start__text mr-1'>
								Accrual Level Start Date
							</span>
							<span className='level-start__date'>03/09-2020</span>
						</div>
						<button className='level-start__add-time-off-policy p-2 border-black border-[2px] rounded-xl'>
							Add Time Off Policy
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
