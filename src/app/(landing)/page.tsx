'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Label } from '@radix-ui/react-label'

export default function LandingPage() {
	return (
		<div className='bodyLandingPage'>
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
							<div className='skeletonLandingPage'>
								<Image
									src='/hovercode.svg'
									alt='Placeholder'
									width={450}
									height={450}
									draggable={false}
								/>
								<Label className='space-y-2 text-center text-sm'>
									(Placeholder Image & Text, will be replaced with actual
									content)
								</Label>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
