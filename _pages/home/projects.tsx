import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
	return (
		<section className='pt-[max(10rem,120px)]'>
			<div className='grid des:grid-cols-2 gap-[max(1.875rem,24px)]'>
				<figure
					className='relative w-full h-[max(250px,15.625rem)] sm:h-[max(200px,12.5rem)] des:h-160 
        	rounded-15 overflow-hidden'>
					<Image
						src='/images/home/web-design.webp'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						fill
						alt='web design card'
						className='object-cover'
					/>
					<Link
						href='/projects/web-design'
						className='h-full w-full flex flex-col items-center
          	justify-center absolute top-0 left-0 z-2 text-white
          	hover:bg-peach/80 overflow-hidden transition-all duration-500 
          	ease-in-out
          	'>
						<h2 className='text-40 font-medium'>WEB DESIGN</h2>
						<span
							className='flex items-center gap-[max(1.25rem,20px)]
            mt-[max(1.5rem,12px)] font-medium text-15 tracking-[5px]
            '>
							VIEW PROJECTS{' '}
							<svg
								width='5'
								height='10'
								viewBox='0 0 5 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									id='Path 5'
									d='M0.707153 0.707092L4.70715 4.70709L0.707153 8.70709'
									stroke='#E7816B'
									strokeWidth='2'
								/>
							</svg>
						</span>
					</Link>
				</figure>
				<div className='gap-gutter grid'>
					<figure
						className='relative w-full h-[max(250px,15.625rem)] sm:h-[max(200px,12.5rem)] des:h-full 
          	rounded-15 overflow-hidden'>
						<Image
							src='/images/home/app-design.webp'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							fill
							alt='app design card'
							className='object-cover'
						/>
						<Link
							href='/projects/app-design'
							className='h-full w-full flex flex-col items-center
          		justify-center absolute top-0 left-0 z-2 text-white
          		hover:bg-peach/80 overflow-hidden transition-all duration-500 
          		ease-in-out
          		'>
							<h2 className='text-40 font-medium'>APP DESIGN</h2>
							<span
								className='flex items-center gap-[max(1.25rem,20px)]
            mt-[max(1.5rem,12px)] font-medium text-15 tracking-[5px]
            '>
								VIEW PROJECTS{' '}
								<svg
									width='5'
									height='10'
									viewBox='0 0 5 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										id='Path 5'
										d='M0.707153 0.707092L4.70715 4.70709L0.707153 8.70709'
										stroke='#E7816B'
										strokeWidth='2'
									/>
								</svg>
							</span>
						</Link>
					</figure>
					<figure
						className='relative w-full h-[max(250px,15.625rem)] sm:h-[max(200px,12.5rem)] des:h-full 
          	rounded-15 overflow-hidden'>
						<Image
							src='/images/home/graphic-design.webp'
							fill
							alt='graphic design card'
							className='object-cover'
						/>
						<Link
							href='/projects/graphic-design'
							className='h-full w-full flex flex-col items-center
          		justify-center absolute top-0 left-0 z-2 text-white
          		hover:bg-peach/80 overflow-hidden transition-all duration-500 
          		ease-in-out
          		'>
							<h2 className='text-40 font-medium uppercase'>graphic DESIGN</h2>
							<span
								className='flex items-center gap-[max(1.25rem,20px)]
            		mt-[max(1.5rem,12px)] font-medium text-15 tracking-[5px]
            		'>
								VIEW PROJECTS{' '}
								<svg
									width='5'
									height='10'
									viewBox='0 0 5 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										id='Path 5'
										d='M0.707153 0.707092L4.70715 4.70709L0.707153 8.70709'
										stroke='#E7816B'
										strokeWidth='2'
									/>
								</svg>
							</span>
						</Link>
					</figure>
				</div>
			</div>
		</section>
	);
}
