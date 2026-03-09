'use client';

import { useEffect, useState } from 'react';
import { NAVLINKS } from '@/lib/mock';

import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';

export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const nav = document.querySelector('.nav-header');
			if (window.scrollY > 10) {
				nav?.classList.add('!py-[max(2.188rem,20px)]');
				nav?.classList.add('shadow-lg');
			} else {
				nav?.classList.remove('!py-[max(2.188rem,20px)]');
				nav?.classList.remove('shadow-lg');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<header
				className='sticky top-0 z-20 bg-white py-[max(4rem,35px)] nav-header
				transition-all duration-500 ease-in-out
				'>
				<nav>
					<div className='ac'>
						<div className='flex items-center justify-between'>
							<Link href='/'
							onClick={()=>setOpenMenu(false)}
							>
								<Image
									src='/nav-logo.svg'
									alt='Designo Logo'
									width={196}
									height={24}
								/>
							</Link>

							<ul className='hidden sm:flex items-center gap-[max(2.625rem,42px)]'>
								{NAVLINKS.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className='text-14 uppercase tracking-[2px]'>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
							<button
								className='sm:hidden grid gap-[max(4px,0.25rem)]'
								onClick={() => setOpenMenu(!openMenu)}>
								<span
									className='w-gutter min-h-[max(4px,0.25rem)] bg-[#1D1C1E] inline-block'
									data-selector='line-1'
								/>

								<span
									className='w-gutter min-h-[max(4px,0.25rem)] bg-[#1D1C1E] inline-block'
									data-selector='line-2'
								/>
							</button>
						</div>
					</div>
				</nav>
				<Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
			</header>
			<div
				className={`bg-black/50 fixed top-0 left-0 w-full h-full z-10
				transition-opacity duration-500 ease-in-out sm:hidden ${
					openMenu
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}
				`}
				onClick={() => setOpenMenu(false)}
			/>
		</>
	);
}
