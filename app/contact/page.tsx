import Contact from '@/_pages/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us',
};

const Contactpage = () => {
	return <Contact />;
};

export default Contactpage;
