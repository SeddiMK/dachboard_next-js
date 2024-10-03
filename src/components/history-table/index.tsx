import Image from 'next/image'
import Pig from '@/assets/icons/Pig.svg'

export default function HistoryTable() {
	return (
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
	)
}
