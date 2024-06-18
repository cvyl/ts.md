export const BASE_URL = 'https://ts.md'
export const SITE_NAME = 'ts.md'
export const SITE_DESCRIPTION =
	'A collection of community-driven libraries and tools for TypeScript.'
export const SITE_TITLE =
	'ts.md - Community-driven libraries and tools for TypeScript.'
export const SITE_IMAGE =
	'https://repository-images.githubusercontent.com/816503731/13c2df97-0fcb-4432-9f8f-edc7faa814ae'
export const SITE_AUTHOR = 'Mikka (@cvyl)'
export const SITE_COLOR = '#89c3f2'

export const siteConfig = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	openGraph: {
		description: SITE_DESCRIPTION,
		type: 'website',
		url: BASE_URL,
		images: [
			{
				url: SITE_IMAGE,
				width: 1280,
				height: 640,
				alt: SITE_TITLE
			}
		]
	},
	authors: [
		{
			name: SITE_AUTHOR
		}
	],
	twitter: {
		title: SITE_TITLE,
		site: SITE_NAME,
		card: 'summary_large_image',
		images: [
			{
				url: SITE_IMAGE,
				width: 1280,
				height: 640,
				alt: SITE_TITLE
			}
		]
	}
}
