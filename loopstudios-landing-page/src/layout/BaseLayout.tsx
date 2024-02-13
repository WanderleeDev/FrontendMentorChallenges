import { JSX } from 'react';
//  Components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
//	Interfaces
interface BaseLayoutProps {
	children: Array<JSX.Element>;
}

export const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<main className='font-Alata px-8 py-24 max-w-screen-xl mx-auto'>
				{children}
			</main>
			<Footer />
		</>
	);
};
