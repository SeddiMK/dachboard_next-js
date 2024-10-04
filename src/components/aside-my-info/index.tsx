import Image from 'next/image'
import avatarImg from '@/assets/logoUser/LogoUser.png'
import {
	AsideContacts,
	AsideDate,
	AsidePosition,
	AsideReportsDirect,
} from '../ui/aside'

export default function AsideMyInfo() {
	return (
		<aside className='aside-my-info relative -top-[50px] text-sm font-medium mr-6 '>
			<div className='aside-my-info__avatar-img relative z-10 top-[14px] w-36 h-auto flex justify-center items-end w-full'>
				{/* <Link href='/pages/myInfo' className='flex items-center '></Link> */}
				<a href='/pages/myInfo'>
					<Image
						className='img '
						src={avatarImg}
						alt='logo user'
						width={140}
						height={140}
					/>
				</a>
			</div>
			<div className='aside-my-info-block '>
				<AsideContacts />
				<AsideDate />
				<AsidePosition />
				<AsideReportsDirect />
			</div>
		</aside>
	)
}
