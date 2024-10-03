import Image from 'next/image'
import PlusCard from '@/assets/icons/CardPlus.svg'
import Rectangle from '@/assets/icons/Rectangle.svg'

export default function DeyOfStick() {
	return (
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
	)
}
