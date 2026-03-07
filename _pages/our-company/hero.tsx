import Image from 'next/image';

export default function Hero() {
	return (
		<section className='bg-peach sm:rounded-15 overflow-hidden -mx-gutter sm:mx-0'>
			<div className='flex flex-col-reverse des:flex-row justify-between'>
				<div
					className='flex flex-col justify-center flex-1 
					items-center text-white bg-cover bg-no-repeat 
					relative
					'>
					<div
						className='text-center des:text-left py-[max(5rem,80px)]
						px-gutter sm:py-[max(4rem,64px)] des:py-0 relative z-2
						'>
						<h1 className='text-48 font-medium'>About Us</h1>
						<p
							className='text-16 leading-[1.6] max-w-[max(551px)] 
							des:max-w-[max(28.625rem,327px)] 
							mt-[max(2rem,24px)]'>
							Founded in 2010, we are a creative agency that produces lasting results
							for our clients. We’ve partnered with many startups, corporations, and
							nonprofits alike to craft designs that make real impact. We’re always
							looking forward to creating brands, products, and digital experiences
							that connect with our clients’ audiences.
						</p>
					</div>
					<svg
						width='292'
						height='292'
						viewBox='0 0 292 292'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute -top-[max(150px)] right-0 sm:hidden pointer-events-none'>
						<circle
							opacity='0.308943'
							cx='146'
							cy='146'
							r='146'
							transform='rotate(90 146 146)'
							fill='url(#paint0_linear_0_924)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_0_924'
								x1='0'
								y1='292'
								x2='292'
								y2='292'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#5D0202' stopOpacity='0.01' />
								<stop offset='1' stopColor='#5D0202' stopOpacity='0.497569' />
							</linearGradient>
						</defs>
					</svg>
					<svg
						width='640'
						height='480'
						viewBox='0 0 640 480'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute max-des:-left-32 hidden sm:block 
						sm:-top-[max(300px)] des:top-0
						des:w-full des:h-full
						'>
						<circle
							opacity='0.308943'
							cx='320'
							cy='320'
							r='320'
							transform='matrix(1 0 0 -1 0 480)'
							fill='url(#paint0_linear_0_6445)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_0_6445'
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
				</div>
				<figure className='relative z-2'>
					<Image
						src='/images/about/image-about-hero.webp'
						width={476}
						height={480}
						alt='A group of people gathered round a table with their macbooks'
						className='des:w-119 max-des:hidden'
					/>
					<Image
						src='/images/about/image-about-hero-tab.webp'
						width={476}
						height={320}
						alt='A group of people gathered round a table with their macbooks'
						className='des:hidden w-full max-sm:hidden'
					/>
					<Image
						src='/images/about/image-about-hero-mobile.webp'
						width={476}
						height={320}
						alt='A group of people gathered round a table with their macbooks'
						className='sm:hidden w-full'
					/>
				</figure>
			</div>
		</section>
	);
}
