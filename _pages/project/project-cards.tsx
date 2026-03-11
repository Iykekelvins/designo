'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCards({ project }: { project: SingleProjectProps }) {
	const projectsContainer = useRef<HTMLUListElement>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();

			mm.add('(min-width: 1200px)', () => {
				ScrollTrigger.create({
					trigger: projectsContainer.current,
					start: 'top 80%',
					onEnter: () => {
						gsap.to("[data-selector='project']", {
							y: 0,
							opacity: 1,
							stagger: 0.05,
							duration: 0.75,
						});
					},
				});
			});

			mm.add('(max-width: 1199px)', () => {
				document.querySelectorAll("[data-selector='project']").forEach((project) => {
					ScrollTrigger.create({
						trigger: project,
						start: 'top 85%',
						onEnter: () => {
							gsap.to(project, {
								y: 0,
								opacity: 1,
								duration: 0.75,
							});
						},
					});
				});
			});
		},
		{ scope: projectsContainer },
	);

	return (
		<section className='pt-[max(10rem,96px)]'>
			<ul
				className='grid des:grid-cols-3 gap-[max(1.875rem,30px)]'
				ref={projectsContainer}>
				{project.items.map((item) => (
					<li
						key={item.name}
						className='rounded-15 bg-[#FDF3F0] overflow-hidden
            hover:bg-peach transition-colors duration-500 
            ease-in-out cursor-pointer hover:[&_p]:text-white
            hover:[&_h3]:text-white grid sm:grid-cols-2 des:grid-cols-1
						translate-y-[25%] opacity-0
            '
						data-selector='project'>
						<Image
							src={item.img}
							width={350}
							height={320}
							alt={`thumbnail of ${item.name} project`}
							className='w-full'
						/>
						<div
							className='p-[max(2rem,32px)] flex flex-col items-center
              text-center gap-[max(1rem,16px)] justify-center
              '>
							<h3
								className='text-20 font-medium tracking-[5px] text-peach
                uppercase transition-colors duration-500 ease-in-out
                '>
								{item.name}
							</h3>
							<p
								className='text-16 leading-[1.6] transition-colors 
                duration-500 ease-in-out'>
								{item.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
