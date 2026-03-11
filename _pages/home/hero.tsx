'use client';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function Hero() {
	const hero = useRef<HTMLElement>(null);
	const title = useRef<HTMLHeadingElement>(null);
	const paragraph = useRef<HTMLParagraphElement>(null);
	const image = useRef<HTMLImageElement>(null);
	const link = useRef<HTMLAnchorElement>(null);

	const heroTl = useRef<GSAPTimeline>(null);

	useGSAP(
		() => {
			const titleSplit = SplitText.create(title.current, {
				type: 'lines',
				mask: 'lines',
			});
			const paragraphSplit = SplitText.create(paragraph.current, {
				type: 'lines',
				mask: 'lines',
			});

			gsap.set([title.current, paragraph.current], { opacity: 1 });
			gsap.set(titleSplit.masks, {
				perspective: '500px',
			});
			gsap.set(titleSplit.lines, {
				yPercent: 100,
				rotateY: '-5deg',
				transformStyle: 'preserve-3d',
			});
			gsap.set(paragraphSplit.lines, {
				yPercent: 100,
			});

			heroTl.current = gsap
				.timeline({
					paused: true,
					onComplete: () => {
						titleSplit.revert();
						paragraphSplit.revert();
					},
				})
				.to(titleSplit.lines, {
					yPercent: 0,
					stagger: 0.1,
					rotateY: '0deg',
					ease: 'expo.out',
					duration: 1,
				})
				.to(
					paragraphSplit.lines,
					{
						yPercent: 0,
						ease: 'sine.out',
						duration: 0.45,
						stagger: 0.1,
					},
					'-=0.8',
				)
				.to(
					image.current,
					{
						y: 0,
						opacity: 1,
						ease: 'none',
					},
					'-=0.75',
				)
				.to(
					link.current,
					{
						y: 0,
						opacity: 1,
						ease: 'none',
					},
					'-=0.75',
				);
		},
		{
			scope: hero,
		},
	);

	useEffect(() => {
		if (hero.current) {
			heroTl.current?.play();
		}
	}, []);

	return (
		<section
			className='bg-peach px-[max(6rem,24px)] sm:rounded-[max(0.938rem,15px)] 
      pt-[max(9.075rem,80px)] relative max-sm:-mx-gutter
      overflow-hidden max-des:max-h-[max(60.688rem,844px)]
      '
			ref={hero}>
			<div
				className='flex flex-col items-center des:items-start justify-between
      des:flex-row text-center des:text-left gap-[max(4.3125rem,80px)] des:gap-0
      '>
				<div
					className='text-white 
          relative z-2 flex flex-col items-center des:items-start
          '>
					<h1
						className='text-48 font-medium leading-none max-w-[max(30.75rem,400px)] opacity-0'
						ref={title}>
						Award-winning custom designs and digital branding solutions
					</h1>
					<p
						className='text-16 leading-[1.6] mt-[max(2rem,24px)]
             max-w-[max(27.8125rem,400px)] opacity-0'
						ref={paragraph}>
						With over 10 years in the industry, we are experienced in creating fully
						responsive websites, app design, and engaging brand experiences. Find out
						more about our services.
					</p>
					<Link
						href='/our-company'
						className='mt-[max(2.5rem,20px)] block translate-y-1/2 opacity-0'
						ref={link}>
						<Button variant='secondary'>Learn More</Button>
					</Link>
				</div>
				<figure className='relative z-2'>
					<Image
						src='/images/home/iphone.webp'
						width={284}
						height={500}
						alt='iphone mockup'
						className='des:w-[17.438rem] -translate-y-[10%] opacity-0'
						ref={image}
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
