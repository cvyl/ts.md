import Link from 'next/link'
import { TypeIcon } from '@/components/icons'

export default function NaviBar() {
	return (
		<header className='headerLandingPage'>
			<Link
				href='/'
				className='flex items-center justify-center'
				prefetch={false}
			>
				<TypeIcon className='h-8 w-8' />
				<span className='sr-only'>ts.md</span>
			</Link>
			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<Link href='#' className='navLink' prefetch={false}>
					Libraries
				</Link>
				<Link href='#' className='navLink' prefetch={false}>
					Tools
				</Link>
				<Link href='subdomain' className='navLink' prefetch={false}>
					Subdomain
				</Link>
				<Link href='#' className='navLink' prefetch={false}>
					About
				</Link>
			</nav>
		</header>
	)
}
