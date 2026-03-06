import { PROJECTS } from '@/lib/mock';

import Image from 'next/image';
import Link from 'next/link';

export default function OtherProjects({ project }: { project: SingleProjectProps }) {
	const others = PROJECTS.filter((p) => p.slug !== project.slug);

	return (
		<section className='pt-[max(10rem,96px)]'>
			<div className='grid gap-gutter des:grid-cols-2'>
				{others.map((p) => (
					<figure
						key={p.slug}
						className='relative w-full h-[max(250px,15.625rem)] sm:h-[max(200px,12.5rem)] des:h-[max(308px,19.25rem)] 
  					rounded-15 overflow-hidden'>
						<Image
							src={p.img}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							fill
							alt={`${p.name} project card`}
							className='object-cover'
						/>
						<Link
							href={`/projects/${p.slug}`}
							className='h-full w-full flex flex-col items-center
          justify-center absolute top-0 left-0 z-2 text-white
          hover:bg-peach/80 overflow-hidden transition-all duration-500 
          ease-in-out
          '>
							<h2 className='text-40 font-medium uppercase'>{p.name}</h2>
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
				))}
			</div>
		</section>
	);
}
