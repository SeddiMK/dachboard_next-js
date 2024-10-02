import Image from 'next/image'
import PlusCard from '@/assets/icons/CardPlus.svg'
import Primary from '@/assets/icons/Primary.svg'
import TimeOffIcon from '@/assets/icons/timeOff.svg'
import Rectangle from '@/assets/icons/Rectangle.svg'
import Pig from '@/assets/icons/Pig.svg'

import { Clock4 } from 'lucide-react'

export default function TimeOff() {
	return (
		<section className='time-off-body border-b-black rounded-b-xl border-x-black border-2 bg-[#FCFCFE]'>
			<div className='wrapper px-4'>
				<div className='time-off-body__top off-body-top  border-b-[2px] border-[#7C96B1]  pb-4'>
					<div className='off-body-top__title top-title font-medium text-sm flex items-end h-[80px] justify-between'>
						<div className='top-title__icon-text flex items-center'>
							<Image
								className='mr-1'
								priority
								src={TimeOffIcon}
								height={20}
								width={20}
								alt='Follow us on Company'
							/>
							<h3 className='top-title__text text-xl  text-nowrap flex items-start'>
								Time Off
							</h3>
						</div>
						<div className='top-title__level-start level-start flex items-center'>
							<div className='level-start__date mr-[30px]'>
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

				{/* cards */}
				<div className='upcoming-time pt-6 pb-4 border-b-[2px] border-[#7C96B1]'>
					<div className='upcoming-time__cards cards font-semibold text-sm flex justify-center items-center gap-12 mb-6'>
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
							<p className='card-item__text text-[#7C96B1]'>
								Holiday Full-Time
							</p>
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

				{/* dey of stick */}
				<div className='dey-stick pb-6 pt-6 text-sm border-b-[2px] border-[#7C96B1] flex items-center gap-[14px]'>
					<span className='dey-stick__icon'>
						<Image
							className='mr-1'
							priority
							src={PlusCard}
							height={30}
							width={30}
							alt='Follow us on Company'
						/>
					</span>
					<div className='dey-stick__text flex flex-col items-start '>
						<span className='dey-stick__date'>Jan 27</span>
						<span className='dey-stick__txt flex items-center '>
							{/* before:content-["•"] */}
							<span>
								<Image
									className='mr-1'
									priority
									src={Rectangle}
									height={8}
									width={8}
									alt='Follow us on Company'
								/>
							</span>
							1 dey of Sick
						</span>
					</div>
				</div>

				{/* Independence Day*/}
				<div className='dey-stick pb-6 pt-6 text-sm border-b-[2px] border-[#7C96B1] flex items-center gap-[14px]'>
					<span className='dey-stick__icon'>
						<Image
							className='mr-1'
							priority
							src={Pig}
							height={30}
							width={30}
							alt='Follow us on Company'
						/>
					</span>
					<div className='dey-stick__text flex flex-col items-start '>
						<span className='dey-stick__date'>Jan 4</span>
						<span className='dey-stick__txt flex items-center'>
							Independence Day
						</span>
					</div>
				</div>

				{/*History table*/}
				<div className='history pb-6 pt-6 text-sm mb-24  flex flex-col items-start justify-start gap-[14px]'>
					<div className='history__title flex items-center justify-start '>
						<span className='history__icon'>
							<Image
								className='mr-1'
								priority
								src={Pig}
								height={16}
								width={16}
								alt='Follow us on Company'
							/>
						</span>
						<span className='history__txt'>History</span>
					</div>

					<div className='history__select-top relative select-top w-full flex justify-between mb-4'>
						<div className='flex gap-4 '>
							<span className='block absolute top-[9px] left-[211px] font-bold'>
								X
							</span>
							<select
								name='sick'
								id='sick'
								className='rounded-lg w-64 p-2 bg-inherit border-slate-400 border-2 '
							>
								<option value='Sick'>Sick</option>
								<option value='dog'>Dog</option>
								<option value='cat'>Cat</option>
								<option value='hamster'>Hamster</option>
								<option value='parrot'>Parrot</option>
								<option value='spider'>Spider</option>
								<option value='goldfish'>Goldfish</option>
							</select>
							<span className='block absolute top-[9px] left-[330px] font-bold'>
								X
							</span>
							<select
								name='all'
								id='all'
								className='rounded-lg w-24 p-2 bg-inherit border-slate-400 border-2'
							>
								<option value='Sick'>All</option>
								<option value='dog'>Dog</option>
								<option value='cat'>Cat</option>
								<option value='hamster'>Hamster</option>
								<option value='parrot'>Parrot</option>
								<option value='spider'>Spider</option>
								<option value='goldfish'>Goldfish</option>
							</select>
						</div>
						<select
							name='balanceHistory'
							id='balance-history'
							className='relative rounded-lg  w-44 p-2 bg-inherit border-slate-400 border-2 '
						>
							<option value='Sick'>Balance History</option>
							<option value='dog'>Dog</option>
							<option value='cat'>Cat</option>
							<option value='hamster'>Hamster</option>
							<option value='parrot'>Parrot</option>
							<option value='spider'>Spider</option>
							<option value='goldfish'>Goldfish</option>
						</select>{' '}
						<span className='block absolute top-[9px] right-[30px] font-bold'>
							X
						</span>
					</div>

					<table className='history__table table-history table-fixed w-full'>
						<thead className='table-history__title bg-slate-300/60 '>
							<tr className='text-left '>
								<th className='px-2 py-4 w-24'>Date &#8595 (&#8593)</th>
								<th className='px-2 py-4 w-96'>Description</th>
								<th className='px-2 py-4 w-40'>Used Days (-)</th>
								<th className='px-2 py-4 w-48'>Earned Days (+)</th>
								<th className='px-2 py-4'>Balance</th>
							</tr>
						</thead>
						<tbody className='table-history__user '>
							<tr className='border-b-[2px] border-[#7C96B1] '>
								<td className='date p-2'>23/05/2024</td>
								<td className='description p-2'>
									Accrual for 23/05/2024 to 20/11/2024
								</td>
								<td className='used-days'></td>
								<td className='earned-days'>3.00</td>
								<td className='balance'>3.00</td>
							</tr>
							<tr className='border-b-[2px] border-[#7C96B1] '>
								<td className='date p-2'>23/05/2024</td>
								<td className='description p-2'>
									Accrual for 23/05/2024 to 20/11/2024
								</td>
								<td className='used-days'>-6</td>
								<td className='earned-days'></td>
								<td className='balance'>3.00</td>
							</tr>
							<tr className='border-b-[2px] border-[#7C96B1] '>
								<td className='date p-2'>23/05/2024</td>
								<td className='description p-2'>
									Accrual for 23/05/2024 to 20/11/2024
								</td>
								<td className='used-days'></td>
								<td className='earned-days'>3.00</td>
								<td className='balance'>3.00</td>
							</tr>
							<tr className='border-b-[2px] border-[#7C96B1] '>
								<td className='date p-2'>23/05/2024</td>
								<td className='description p-2'>
									Accrual for 23/05/2024 to 20/11/2024
								</td>
								<td className='used-days'></td>
								<td className='earned-days'>3.00</td>
								<td className='balance'>3.00</td>
							</tr>
							<tr className='border-b-[2px] border-[#7C96B1] '>
								<td className='date p-2'>23/05/2024</td>
								<td className='description p-2'>
									Accrual for 23/05/2024 to 20/11/2024
								</td>
								<td className='used-days'>-6</td>
								<td className='earned-days'></td>
								<td className='balance'>3.00</td>
							</tr>
							<tr className='border-b-[2px] border-[#7C96B1] '>
								<td className='date p-2'>23/05/2024</td>
								<td className='description p-2'>
									Accrual for 23/05/2024 to 20/11/2024
								</td>
								<td className='used-days'></td>
								<td className='earned-days'>3.00</td>
								<td className='balance'>3.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
