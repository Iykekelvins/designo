'use client';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';
import { NAVLINKS } from '@/lib/mock';

import Link from 'next/link';
import gsap from 'gsap';

export default function Menu({
	openMenu,
	setOpenMenu,
}: {
	openMenu: boolean;
	setOpenMenu: (e: boolean) => void;
}) {
	const lenis = useLenis();
	const menu = useRef<HTMLDivElement>(null);
	const menuTl = useRef<GSAPTimeline>(null);

	useGSAP(
		() => {
			gsap.set(menu.current, {
				clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
				opacity: 1,
			});

			menuTl.current = gsap
				.timeline({ paused: true })
				.to(menu.current, {
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
					ease: 'power3.inOut',
					duration: 0.75,
				})
				.to(
					menu.current!.querySelectorAll("[data-selector='menu-link']"),
					{
						y: 0,
						stagger: 0.1,
						duration: 0.35,
						ease: 'sine.out',
					},
					'-=0.45',
				)
				.to(
					document.querySelector("[data-selector='line-1']"),
					{
						rotate: '45deg',
						duration: 0.35,
						ease: 'sine.out',
					},
					'-=0.5',
				)
				.to(
					document.querySelector("[data-selector='line-2']"),
					{
						position: 'absolute',
						rotate: '-45deg',
						duration: 0.25,
						ease: 'sine.out',
					},
					'-=0.5',
				);
		},
		{ scope: menu },
	);

	useEffect(() => {
		if (openMenu) {
			lenis?.stop();
			menuTl.current?.play();
		} else {
			lenis?.start();
			menuTl.current?.reverse();
		}

		const scroll = () => {
			if (window.innerWidth >= 640) {
				lenis?.start();
			} else if (window.innerWidth < 640 && openMenu) {
				lenis?.stop();
			} else {
				lenis?.start();
			}
		};

		window.addEventListener('resize', scroll);

		return () => window.removeEventListener('resize', scroll);
	}, [lenis, openMenu]);

	return (
		<div
			className='absolute bg-black top-full left-0 
      w-full sm:hidden px-gutter py-[max(48px)] opacity-0'
			ref={menu}>
			<ul className='space-y-[max(32px)]'>
				{NAVLINKS.map((link) => (
					<li key={link.name} onClick={() => setOpenMenu(false)}>
						<Link
							href={link.href}
							className='text-[24px] text-white uppercase tracking-[2px]
              inline-block overflow-hidden
              '>
							<span
								className='inline-block translate-y-full'
								data-selector='menu-link'>
								{link.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
