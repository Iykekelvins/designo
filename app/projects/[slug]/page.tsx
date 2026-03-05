import { PROJECTS } from '@/lib/mock';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import SingleProject from '@/_pages/project';

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const project = PROJECTS.find((project) => project.slug === slug);

	if (!project) {
		return {
			title: 'Project Not Found',
		};
	}

	return {
		title: project.name,
		description: project.description,
	};
}

const Projectpage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const project = PROJECTS.find((project) => project.slug === slug);

	if (!project) {
		return notFound();
	}

	return <SingleProject project={project} />;
};

export default Projectpage;
