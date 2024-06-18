import Link from 'next/link'

export default function FooterBar() {
	return (
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
	)
}
