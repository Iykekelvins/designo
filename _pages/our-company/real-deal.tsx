import Image from 'next/image';

export default function RealDeal() {
	return (
		<section className='pt-[max(10rem,120px)] -mx-gutter sm:mx-0'>
			<div
				className='flex justify-between bg-[#FDF3F0] sm:rounded-15 
        overflow-hidden flex-col-reverse des:flex-row'>
				<div
					className='flex items-center justify-center flex-1 relative
        py-[max(80px,5rem)] sm:py-[max(4.25rem,68px)] des:py-0
        text-center des:text-left px-gutter sm:px-0
        '>
					<div>
						<h2 className='text-peach text-40 font-medium'>The real deal</h2>
						<p
							className='pt-[max(1.5rem,20px)] text-16 leading-[1.6]
              max-w-[max(27.813rem,445px)] sm:max-w-[max(572px)]
              des:max-w-[max(27.813rem,445px)]
              '>
							As strategic partners in our clients’ businesses, we are ready to take
							on any challenge as our own. Solving real problems require empathy and
							collaboration, and we strive to bring a fresh perspective to every
							opportunity. We make design and technology more accessible and give you
							tools to measure success.
							<br /> <br /> We are visual storytellers in appealing and captivating
							ways. By combining business and marketing strategies, we inspire
							audiences to take action and drive real results.
						</p>
					</div>
					<svg
						width='584'
						height='584'
						viewBox='0 0 584 584'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute bottom-0 des:-left-[max(10rem,120px)]'>
						<g clipPath='url(#clip0_0_9053)'>
							<circle
								opacity='0.06'
								cx='146'
								cy='146'
								r='146'
								transform='matrix(1 0 0 -1 0 584)'
								fill='url(#paint0_linear_0_9053)'
							/>
							<circle
								opacity='0.06'
								cx='146'
								cy='146'
								r='146'
								transform='matrix(-1 0 0 1 292 0)'
								fill='url(#paint1_linear_0_9053)'
							/>
							<circle
								opacity='0.06'
								cx='146'
								cy='146'
								r='146'
								transform='matrix(0 1 1 0 292 292)'
								fill='url(#paint2_linear_0_9053)'
							/>
						</g>
						<defs>
							<linearGradient
								id='paint0_linear_0_9053'
								x1='0'
								y1='292'
								x2='292'
								y2='292'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#5D0202' stopOpacity='0.01' />
								<stop offset='1' stopColor='#5D0202' stopOpacity='0.497569' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_0_9053'
								x1='0'
								y1='292'
								x2='292'
								y2='292'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#5D0202' stopOpacity='0.01' />
								<stop offset='1' stopColor='#5D0202' stopOpacity='0.497569' />
							</linearGradient>
							<linearGradient
								id='paint2_linear_0_9053'
								x1='0'
								y1='292'
								x2='292'
								y2='292'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#5D0202' stopOpacity='0.01' />
								<stop offset='1' stopColor='#5D0202' stopOpacity='0.497569' />
							</linearGradient>
							<clipPath id='clip0_0_9053'>
								<rect width='584' height='584' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</div>

				<figure>
					<Image
						src='/images/about/image-real-deal.webp'
						width={476}
						height={640}
						alt='person sticking pictures to a wall'
						className='des:w-119 object-cover max-des:hidden'
					/>
					<Image
						src='/images/about/image-real-deal-tab.webp'
						width={476}
						height={320}
						alt='person sticking pictures to a wall'
						className='object-cover w-full max-sm:hidden des:hidden'
					/>
					<Image
						src='/images/about/image-real-deal-mobile.webp'
						width={476}
						height={320}
						alt='person sticking pictures to a wall'
						className='object-cover w-full sm:hidden'
					/>
				</figure>
			</div>
		</section>
	);
}
