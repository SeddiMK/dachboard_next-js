import Image from 'next/image'
import Pig from '@/assets/icons/Pig.svg'

export default function IndependenceDay() {
	return (
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
	)
}
