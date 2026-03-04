'use client';

import Image from 'next/image';
import Link from 'next/link';

const NAVLINKS = [
	{
		name: 'Our Company',
		href: '/our-company',
	},
	{
		name: 'Locations',
		href: '/locations',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];

export default function Navbar() {
	return (
		<header className='sticky top-0 z-20 bg-white py-[max(4rem,35px)]'>
			<nav>
				<div className='ac'>
					<div className='flex items-center justify-between'>
						<Link href='/'>
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
						<button className='sm:hidden grid gap-[4px]'>
							<span className='w-[24px] min-h-[4px] bg-[#1D1C1E]' />
							<span className='w-[24px] min-h-[4px] bg-[#1D1C1E]' />
							<span className='w-[24px] min-h-[4px] bg-[#1D1C1E]' />
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
