import Hero from './hero';
import OtherProjects from './other-projects';

const SingleProject = ({ project }: { project: SingleProjectProps }) => {
	return (
		<div>
			<Hero project={project} />
			<OtherProjects project={project}/>
		</div>
	);
};

export default SingleProject;
