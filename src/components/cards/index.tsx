import Image from 'next/image'
import { Clock4 } from 'lucide-react'

import PlusCard from '@/assets/icons/CardPlus.svg'
import Primary from '@/assets/icons/Primary.svg'
import TimeOffIcon from '@/assets/icons/timeOff.svg'

export default function Cards() {
	return (
		<div className='upcoming-time pt-6 pb-4 border-b-[2px] border-[#7C96B1]'>
			<div className='upcoming-time__cards cards font-semibold text-sm flex justify-center items-center flex-wrap gap-12 mb-6'>
				<div className='card-item w-[264px]   flex flex-col justify-center items-center '>
					<div className='card-item__main w-full p-4 mb-2 bg-[#F0F3F8] item-card flex flex-col justify-center items-center gap-1'>
						<h2 className='item-card__title text-xl'>Sick</h2>
						<p className='item-card__days-avalible flex justify-center items-center gap-1'>
							<span className='item-card__icon'>
								<Image
									className='mr-1'
									priority
									src={PlusCard}
									height={30}
									width={30}
									alt='Follow us on Company'
								/>
							</span>
							<span className='item-card__number text-3xl'>3</span>
						</p>
						<span className='item-card__txt'>Days Available</span>
						<span className='item-card__txt-scheduled text-[#7C96B1]'>
							1 day scheduled
						</span>
					</div>
					<p className='card-item__text text-[#7C96B1]'>Sick Full-Time</p>
				</div>
				<div className='card-item w-[264px]  flex flex-col justify-center items-center'>
					<div className='card-item__main w-full py-[1.6rem] mb-2 bg-[#F0F3F8] item-card flex flex-col justify-center items-center gap-1'>
						<h2 className='item-card__title text-xl'>Annual Leave</h2>
						<p className='item-card__days-avalible flex justify-center items-center gap-1'>
							<span className='item-card__icon'>
								<Image
									className='mr-1'
									priority
									src={Primary}
									height={30}
									width={30}
									alt='Follow us on Company'
								/>
							</span>
							<span className='item-card__number text-3xl'>10.3</span>
						</p>
						<span className='item-card__txt'>Days Available</span>
						<span className='item-card__txt-scheduled'></span>
					</div>
					<p className='card-item__text text-[#7C96B1]'>Holiday Full-Time</p>
				</div>
				<div className='card-item w-[264px]   flex flex-col justify-center items-center'>
					<div className='card-item__main w-full h-full py-[1.6rem] mb-2 bg-[#F0F3F8] item-card flex flex-col justify-center items-center gap-1'>
						<h2 className='item-card__title text-xl'>Comp/in Lieu Time</h2>
						<p className='item-card__days-avalible flex justify-center items-center gap-1'>
							<span className='item-card__icon'>
								<Image
									className='mr-1'
									priority
									src={TimeOffIcon}
									height={30}
									width={30}
									alt='Follow us on Company'
								/>
							</span>
							<span className='item-card__number text-3xl'>0</span>
						</p>
						<span className='item-card__txt'>Human Used(YTD)</span>
						<span className='item-card__txt-scheduled'></span>
					</div>
					<p className='card-item__text text-[#7C96B1]'>
						Comp/in Lieu Time Flexible Policy
					</p>
				</div>
			</div>
			<div className='upcoming-time__icon-text flex items-center '>
				<span className='upcoming-time__icon mr-2 '>
					<Clock4 width={16} height={16} />
				</span>
				<h3 className='upcoming-time__text text-sm  text-nowrap flex items-start'>
					Upcoming Time Off
				</h3>
			</div>
		</div>
	)
}
