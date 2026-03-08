'use client';

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { useSearchParams } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

export default function Locations() {
	const locations = [
		{
			name: 'Canada',
			tag: 'ca',
			image: '/images/locations/image-map-canada.webp',
			location: 'Designo Central Office',
			address: '3886 Wellington Street <br /> Toronto, Ontario M9C 3J5',
			phone: '+1 253-863-8967',
			email: 'contact@designo.co',
		},
		{
			name: 'Australia',
			tag: 'aus',
			image: '/images/locations/image-map-australia.webp',
			location: 'Designo AU Office',
			address: '19 Balonne Street <br /> New South Wales 2443',
			phone: '(02) 6720 9092',
			email: 'contact@designo.au',
		},
		{
			name: 'United Kingdom',
			tag: 'uk',
			image: '/images/locations/image-map-united-kingdom.webp',
			location: 'Designo UK Office',
			address: '13 Colorado Way <br /> Rhyd-y-fro SA8 9GA',
			phone: '078 3115 1400',
			email: 'contact@designo.uk',
		},
	];

	const searchParams = useSearchParams();
	const tag = searchParams.get('tag');
	const lenis = useLenis();

	useEffect(() => {
		if (tag) lenis?.scrollTo(`#${tag}`, { offset: -100 });
	}, [tag, lenis]);

	return (
		<div>
			<ul className='space-y-[max(2rem,32px)] -mx-gutter sm:mx-0'>
				{locations.map((loc, i) => (
					<li
						id={loc.tag}
						key={loc.name}
						className={`
            flex flex-col-reverse items-center sm:gap-[max(1.875rem,30px)]
            des:flex-row
            ${i % 2 === 1 ? 'des:flex-row-reverse' : ''}
            `}>
						<div
							className='bg-[#FDF3F0] sm:rounded-15 flex items-center 
              justify-center py-[max(5.5rem,80px)] des:flex-[0.68]
              bg-[url(/images/location-bg.png)] bg-left bg-no-repeat
              bg-cover sm:bg-contain w-full des:w-max
              '>
							<div className='sm:min-w-[max(33.75rem,540px)]'>
								<h2 className='text-40 font-medium text-peach text-center sm:text-left'>
									{loc.name}
								</h2>
								<div
									className='grid sm:grid-cols-2 mt-gutter text-center 
                sm:text-left gap-gutter sm:gap-0'>
									<div className='text-16 leading-[1.6]'>
										<h3 className='font-bold'>{loc.location}</h3>
										<p dangerouslySetInnerHTML={{ __html: loc.address }}></p>
									</div>
									<div className='text-16 leading-[1.6]'>
										<h3 className='font-bold'>Contact</h3>
										<p>
											P:{' '}
											<Link
												href={`tel:${loc.phone.replaceAll(' ', '-').replaceAll('-', '')}`}>
												{loc.phone}
											</Link>
										</p>
										<p>
											M: <Link href={`mailto:${loc.email}`}>{loc.email}</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
						<figure
							className='des:flex-[0.35] w-full des:w-max
              h-[max(320px,20rem)] sm:h-[max(20.375rem,326px)] des:h-full
              '>
							<Image
								src={loc.image}
								width={350}
								height={326}
								alt={`A map showing the location of ${loc.name}`}
								className='w-full sm:rounded-15 h-full object-cover'
							/>
						</figure>
					</li>
				))}
			</ul>
		</div>
	);
}
