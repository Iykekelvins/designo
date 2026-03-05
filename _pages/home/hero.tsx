import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section
			className='bg-peach px-[max(6rem,24px)] sm:rounded-[max(0.938rem,15px)] 
      pt-[max(9.075rem,80px)] relative max-sm:-mx-gutter
      overflow-hidden max-des:max-h-[max(60.688rem,844px)]
      '>
			<div
				className='flex flex-col items-center des:items-start justify-between
      des:flex-row text-center des:text-left gap-[max(4.3125rem,80px)] des:gap-0
      '>
				<div
					className='text-white 
          relative z-2 flex flex-col items-center des:items-start
          '>
					<h1 className='text-48 font-medium leading-none max-w-[max(30.75rem,400px)]'>
						Award-winning custom designs and digital branding solutions
					</h1>
					<p
						className='text-16 leading-[1.6] mt-[max(2rem,24px)]
             max-w-[max(27.8125rem,400px)]'>
						With over 10 years in the industry, we are experienced in creating fully
						responsive websites, app design, and engaging brand experiences.{' '}
						<br className='sm:hidden' /> Find out more about our services.
					</p>
					<Link href='/our-company' className='mt-[max(2.5rem,20px)] block'>
						<Button variant='secondary'>Learn More</Button>
					</Link>
				</div>
				<figure>
					<Image
						src='/images/iphone.webp'
						width={284}
						height={500}
						alt='iphone mockup'
						className='des:w-[17.438rem]'
					/>
				</figure>
			</div>
			<svg
				width='640'
				height='640'
				viewBox='0 0 640 640'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute top-0 right-0'>
				<circle
					opacity='0.308943'
					cx='320'
					cy='320'
					r='320'
					transform='matrix(0 -1 -1 0 640 640)'
					fill='url(#paint0_linear_0_10661)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_0_10661'
						x1='0'
						y1='640'
						x2='640'
						y2='640'
						gradientUnits='userSpaceOnUse'>
						<stop stopColor='#5D0202' stopOpacity='0.01' />
						<stop offset='1' stopColor='#5D0202' stopOpacity='0.497569' />
					</linearGradient>
				</defs>
			</svg>
		</section>
	);
}
