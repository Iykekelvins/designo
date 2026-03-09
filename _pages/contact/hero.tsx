import Form from './form';

export default function Hero() {
	return (
		<section
			className='bg-peach sm:rounded-15 px-gutter sm:px-[max(58px)]
       py-[max(72px)] sm:py-[max(3.438rem,55px)] relative overflow-hidden
			-mx-gutter sm:mx-0 des:px-24
      '>
			<div
				className='flex items-center justify-between
			gap-[max(2.5rem,40px)] des:gap-0 flex-col des:flex-row
			sm:items-start des:items-center
			'>
				<div className='text-white text-center sm:text-left relative z-2'>
					<h1 className='text-48 font-medium'>Contact Us</h1>
					<p
						className='text-16 leading-[1.6] mt-[max(2rem,24px)]
            des:max-w-[max(25.813rem,420px)]
            '>
						Ready to take it to the next level? Let’s talk about your project or idea
						and find out how we can help your business grow. If you are looking for
						unique digital experiences that’s relatable to your users, drop us a
						line.
					</p>
				</div>
				<Form />
			</div>
			<svg
				width='640'
				height='480'
				viewBox='0 0 640 480'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute des:left-0 size-[max(40rem,640px)] des:-bottom-20
				-left-40 -top-20 hidden sm:block pointer-events-none
				'>
				<circle
					opacity='0.308943'
					cx='320'
					cy='320'
					r='320'
					transform='matrix(0 1 1 0 0 -160)'
					fill='url(#paint0_linear_0_8187)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_0_8187'
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
			<svg
				width='200'
				height='292'
				viewBox='0 0 200 292'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute top-0 left-0 sm:hidden pointer-events-none'>
				<circle
					opacity='0.308943'
					cx='54'
					cy='146'
					r='146'
					transform='rotate(-90 54 146)'
					fill='url(#paint0_linear_0_146)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_0_146'
						x1='-92'
						y1='292'
						x2='200'
						y2='292'
						gradientUnits='userSpaceOnUse'>
						<stop stopColor='#5D0202' stopOpacity='0.01' />
						<stop offset='1' stopColor='#5D0202' stopOpacity='0.497569' />
					</linearGradient>
				</defs>
			</svg>
			<svg
				width='175'
				height='292'
				viewBox='0 0 175 292'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute top-0 right-0 sm:hidden pointer-events-none'>
				<circle
					opacity='0.308943'
					cx='146'
					cy='146'
					r='146'
					transform='rotate(-180 146 146)'
					fill='url(#paint0_linear_0_145)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_0_145'
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
		</section>
	);
}
