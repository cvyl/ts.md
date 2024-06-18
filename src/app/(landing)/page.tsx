'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TypeIcon } from '@/components/icons'

export default function Component() {
	return (
		<div className='bodyLandingPage'>
			<header className='headerLandingPage'>
				<Link
					href='#'
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
					<Link href='#' className='navLink' prefetch={false}>
						Guides
					</Link>
					<Link href='#' className='navLink' prefetch={false}>
						About
					</Link>
				</nav>
			</header>
			<main className='mainLandingPage'>
				<div className='gradientOverlay pointer-events-none' />
				<section className='sectionLandingPage'>
					<div className='container'>
						<div className='gridLandingPage'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='titleLandingPage'>
										{/* Placeholder */}
										ts.md - Typescript的社区驱动的资源库和工具
									</h1>
									<p className='descriptionLandingPage'>
										TypeScript和JavaScript的社区驱动的资源库和工具的集合。
									</p>
								</div>
								<div className='buttonContainer'>
									<Link href='#' prefetch={false}>
										<Button
											variant='default'
											className='buttonDefault'
											onClick={() => console.log('Explore Libraries clicked')}
										>
											Explore Libraries
										</Button>
									</Link>
									<Link href='#' prefetch={false}>
										<Button
											variant='outline'
											className='buttonOutline'
											onClick={() => console.log('Discover Tools clicked')}
										>
											Discover Tools
										</Button>
									</Link>
								</div>
							</div>
							<Skeleton className='skeletonLandingPage' />
						</div>
					</div>
				</section>
			</main>
			<footer className='footerLandingPage'>
				<p className='footerText'>&copy; 2024 ts.md. All rights reserved.</p>
				<nav className='footerNav'>
					<Link href='#' className='footerLink' prefetch={false}>
						Terms of Service
					</Link>
					<Link href='#' className='footerLink' prefetch={false}>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}
