import Hero from './hero';
import OtherProjects from './other-projects';
import ProjectCards from './project-cards';

const SingleProject = ({ project }: { project: SingleProjectProps }) => {
	return (
		<div>
			<Hero project={project} />
			<ProjectCards project={project} />
			<OtherProjects project={project} />
		</div>
	);
};

export default SingleProject;
