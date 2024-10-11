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
		<div className='aside-my-info  relative z-10 top-1/2 md:top-[14px] text-sm font-medium mx-6    flex flex-col items-center'>
			<div className='aside-my-info__avatar-img w-14 pt-8 md:pt-0 md:w-[140px]  h-auto flex justify-center items-end '>
				{/* <Link href='/pages/myInfo' className='flex items-center '></Link> */}
				<a href='/pages/myInfo' className='w-full relative pt-[100%]'>
					<Image
						className='img w-full h-full top-0 left-0 object-cover rounded-2xl'
						sizes='(max-width: 140px) 100vw, (max-width: 56px) 50vw, 33vw'
						src={avatarImg}
						alt='logo user'
						objectFit='cover'
						fill={true}
					/>
				</a>
			</div>
			<aside className='aside-my-info-block hidden  md:block'>
				<AsideContacts />
				<AsideDate />
				<AsidePosition />
				<AsideReportsDirect />
			</aside>
		</div>
	)
}
