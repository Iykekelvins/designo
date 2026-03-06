import Image from 'next/image';

export default function ProjectCards({ project }: { project: SingleProjectProps }) {
	return (
		<section className='pt-[max(10rem,96px)]'>
			<ul className='grid des:grid-cols-3 gap-[max(1.875rem,30px)]'>
				{project.items.map((item) => (
					<li
						key={item.name}
						className='rounded-15 bg-[#FDF3F0] overflow-hidden
            hover:bg-peach transition-colors duration-500 
            ease-in-out cursor-pointer hover:[&_p]:text-white
            hover:[&_h3]:text-white grid sm:grid-cols-2 des:grid-cols-1
            '>
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
