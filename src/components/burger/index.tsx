import Link from 'next/link'
import { Button } from '@/components/ui/button'

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { pagesHeader } from '@/lib/navigate'

export function MenuBerger() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className='color-white' variant='outline'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className='text-white'>
				<SheetHeader>
					{pagesHeader.map((el, ind) => (
						<Link href={el.href} key={el.name + ind}>
							<SheetTitle>{el.name}</SheetTitle>
						</Link>
					))}
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
