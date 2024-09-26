import Image from 'next/image'
import {
	Phone,
	Linkedin,
	Facebook,
	Twitter,
	Hash,
	Clock4,
	MapPin,
	Globe,
	CircleUserRound,
} from 'lucide-react'
import Company from '@/assets/icons/Company.svg'

export const AsideContacts = () => {
	return (
		<div>
			<span className='tel '>
				<Phone />
				07911 654321
			</span>
			<span className='mail '>
				<Facebook />
				avd.yana@videorollnet
			</span>
			<span className='social '>
				<Linkedin />
				<CircleUserRound />

				<Image
					priority
					src={Company}
					height={20}
					width={20}
					alt='Follow us on Company'
				/>
			</span>
		</div>
	)
}
