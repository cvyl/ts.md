'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox' // Import the Checkbox component

export default function Component() {
	const [formData, setFormData] = useState({
		name: '',
		discord: '',
		email: '',
		description: '',
		subdomain: ''
	})
	const [understandChecked, setUnderstandChecked] = useState(false) // State for checkbox

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const checkedMark = understandChecked ? 'x' : ' '
		//prettier-ignore-start
		const issueUrl = `https://github.com/cvyl/ts.md/issues/new?assignees=cvyl&labels=&projects=&template=request-a-subdomain.md&title=%5BSubdomain+Request%5D+${formData.subdomain}.ts.md&body=${encodeURIComponent(`
# Subdomain Request Form

## Your name (or alias)
            
${formData.name}
            
## Discord (required)
            
${formData.discord}
            
## Email (Optional)
            
${formData.email}
            
## Description of your project (required)
            
${formData.description}
            
## Chosen Subdomain
            
${formData.subdomain}.ts.md
            
---
            
### Abuse of this form and subdomain will result in termination of any running services connected to your subdomain
            
- [${checkedMark}] I understand`)}`
		//prettier-ignore-end
		window.open(issueUrl, '_blank')
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	return (
		<div className='submissionFormBody'>
			<main className='mainContent'>
				<div className='gradientOverlay pointer-events-none' />
				<section className='formSection'>
					<div className='formContainer'>
						<div className='formGrid'>
							<div className='formIntro'>
								<div className='formIntroText'>
									<h1 className='formTitle'>Request a Subdomain</h1>
									<p className='formDescription'>
										Fill out the form below to request a subdomain under
										&quot;ts.md&quot;.
									</p>
								</div>
								<form onSubmit={handleSubmit} className='formBody'>
									<div className='formField'>
										<Label htmlFor='name'>Name</Label>
										<Input
											className='textAreaInput'
											id='name'
											value={formData.name}
											onChange={handleInputChange}
											placeholder='Your name'
											required
										/>
									</div>
									<div className='formFieldGrid'>
										<div className='formField'>
											<Label htmlFor='discord'>Discord</Label>
											<Input
												className='textAreaInput'
												id='discord'
												value={formData.discord}
												onChange={handleInputChange}
												placeholder='Your Discord username'
												required
											/>
										</div>
										<div className='formField'>
											<Label htmlFor='email'>Email (optional)</Label>
											<Input
												className='textAreaInput'
												id='email'
												value={formData.email}
												onChange={handleInputChange}
												placeholder='name@example.com'
												required={false}
											/>
										</div>
									</div>
									<div className='formField'>
										<Label htmlFor='subdomain'>Desired Subdomain</Label>
										<div className='subdomainInputContainer'>
											<Input
												className='textAreaInput'
												id='subdomain'
												value={formData.subdomain}
												onChange={handleInputChange}
												placeholder='myproject'
												required
											/>
											<span className='subdomainSuffix'>.ts.md</span>
										</div>
									</div>
									<div className='formField'>
										<Label htmlFor='description'>Description</Label>
										<Textarea
											className='textAreaInput'
											id='description'
											value={formData.description}
											onChange={handleInputChange}
											placeholder='Why do you want a subdomain?'
											required
										/>
									</div>
									<div className='formField checkboxContainer'>
										<Checkbox
											id='understand'
											className='checkboxInput'
											checked={understandChecked}
											onCheckedChange={(checked) => {
												if (checked === 'indeterminate') {
													setUnderstandChecked(false)
												} else {
													setUnderstandChecked(checked)
												}
											}}
										/>
										<Label htmlFor='understand' className='checkboxLabel'>
											I understand that abuse of this form and subdomain will
											result in termination of any running services connected to
											my subdomain
										</Label>
									</div>
									<Button
										variant='default'
										type='submit'
										className='buttonDefault'
									>
										Submit Request
									</Button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
