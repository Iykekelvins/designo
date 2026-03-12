import { Metadata } from 'next';

const title = 'Designo - Digital Creative Agency';
const description =
	'Designo is a digital creative agency that provides a wide range of services, including web design, app development, and digital marketing. We are passionate about creating beautiful and functional digital experiences that help our clients achieve their goals.';
export const url = 'https://designo.iykekelvins.dev';

const keywords = [
	'digital agency',
	'creative agency',
	'web design',
	'app development',
	'digital marketing',
	'UI/UX design',
	'mobile app',
	'branding',
	'SEO',
	'e-commerce',
	'responsive design',
	'product design',
	'startup agency',
	'web development',
	'digital experiences',
	'graphic design',
	'content marketing',
	'social media marketing',
	'user experience',
	'front-end development',
];

export const metaDataOptions: Metadata = {
	generator: 'Next.js',
	applicationName: 'Designo - Digital Creative Agency',
	referrer: 'origin-when-cross-origin',
	keywords,
	authors: [{ name: 'Kelvin Ochubili', url: 'https://twitter.com/iykekelvins' }],
	creator: 'Kelvin Ochubili',
	publisher: 'Kelvin Ochubili',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title,
		description,
		url,
		siteName: 'Designo - Digital Creative Agency',
		images: [
			{
				url: '/opengraph-image.png',
				width: 800,
				height: 600,
			},
			{
				url: '/opengraph-image.png',
				width: 1800,
				height: 1600,
				alt: 'Designo - Digital Creative Agency',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@iykekelvins',
		images: ['/opengraph-image.png'],
	},
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};
