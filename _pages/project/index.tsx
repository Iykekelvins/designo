import Hero from './hero';

const SingleProject = ({ project }: { project: SingleProjectProps }) => {
	return (
		<div>
			<Hero project={project} />
		</div>
	);
};

export default SingleProject;
