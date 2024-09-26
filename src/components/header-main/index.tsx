'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { pagesUserCab } from '@/lib/navigation'
import avatarImg from '@/assets/logoUser/LogoUser.png'
import { CurrentPageProvider } from '../currentPageProvider'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { toggleBgHeaderMain } from '@/lib/utils'

export default function HeaderMain() {
	return (
		<section className='header-main h-44 flex items-end justify-center bg-slate-300/60'></section>
	)
}
