import Image from 'next/image'
import {
	Phone,
	Mail,
	Linkedin,
	Facebook,
	Twitter,
	Hash,
	Clock4,
	Globe,
	MapPin,
	CircleUserRound,
} from 'lucide-react'
import Company from '@/assets/icons/Company.svg'

export const AsideContacts = () => {
	// FCFCFE
	return (
		<div className='flex flex-col gap-4 items-start p-6 bg-[#57579b] rounded-xl mb-4'>
			<p className='tel flex  gap-2 items-center'>
				<span>
					<Phone />
				</span>
				<span>07911 654321</span>
			</p>
			<p className='mail flex gap-2 items-center'>
				<span>
					<Mail />
				</span>
				<span>avd.yana@videorollnet</span>
			</p>
			<p className='social flex gap-2 items-center justify-start'>
				<span>
					<Linkedin />
				</span>
				<span>
					<Facebook />
				</span>
				<span>
					<Twitter />
				</span>
			</p>
		</div>
	)
}

export const AsideDate = () => {
	return (
		<div className='aside-date flex flex-col items-start p-6 bg-[#FCFCFE] rounded-xl mb-4'>
			<h3 className='aside-date__title mb-4'>Hire Date</h3>
			<p className='aside-date__date mb-2'>Sep. 3,2020</p>
			<p className='aside-date__time mb-2'>3y - 9m - 20d</p>
		</div>
	)
}

export const AsidePosition = () => {
	return (
		<div className='aside-position flex flex-col gap-2 items-start p-6 bg-[#FCFCFE] rounded-xl mb-4'>
			<p className='hash flex  gap-2 items-center'>
				<span>
					<Hash />
				</span>
				<span>5</span>
			</p>
			<p className='full-time flex  gap-2 items-center'>
				<span>
					<Clock4 />
				</span>
				<span>Full-Time</span>
			</p>
			<p className='operations flex  gap-2 items-center'>
				<span>
					<Image
						priority
						src={Company}
						height={20}
						width={20}
						alt='Follow us on Company'
					/>
				</span>
				<span>Operations</span>
			</p>
			<p className='position flex  gap-2 items-center'>
				<span>
					<Globe />
				</span>
				<span>Europe</span>
			</p>
			<p className='location flex  gap-2 items-center'>
				<span>
					<MapPin />
				</span>
				<span>London, UK</span>
			</p>
		</div>
	)
}

export const AsideReportsDirect = () => {
	return (
		<div className='aside-reports-direct flex flex-col items-start p-6 bg-[#FCFCFE] rounded-xl mb-4'>
			<h3 className='aside-reports-direct__title mb-4'>Direct Reports</h3>
			<p className='name flex  gap-2 items-center'>
				<span>
					<CircleUserRound />
				</span>
				<span>Shane</span>
			</p>
			<p className='name flex  gap-2 items-center'>
				<span>
					<CircleUserRound />
				</span>
				<span>Nathan</span>
			</p>
			<p className='name flex  gap-2 items-center'>
				<span>
					<CircleUserRound />
				</span>
				<span>Mitchell</span>
			</p>
			<p className='name flex  gap-2 items-center'>
				<span>
					<CircleUserRound />
				</span>
				<span>Philip</span>
			</p>
			<p className='name flex  gap-2 items-center'>
				<span>
					<Image
						priority
						src={Company}
						height={20}
						width={20}
						alt='Follow us on Company'
					/>
				</span>
				<span>4 More...</span>
			</p>
		</div>
	)
}
