export default function Hero({ project }: { project: SingleProjectProps }) {
	return (
		<section
			className='py-[max(4rem,64px)] px-gutter bg-peach sm:rounded-15
  flex flex-col items-center justify-center text-center
  bg-[url(/images/project-hero-bg.png)] bg-no-repeat bg-cover
  text-white gap-gutter max-sm:-mx-gutter
  '>
			<h1 className='text-48 font-medium'>{project.name}</h1>
			<p className='text-16 leading-[1.6] max-w-[max(25rem,400px)]'>
				{project.description}
			</p>
		</section>
	);
}
