//	Components
import { Logo } from '../shared/Logo';
import { SocialMedia } from './SocialMedia';
import { Navbar } from './Navbar';
//	Interfaces
import { ICustomStyles } from '../interfaces/CustomStyles .interface';
import { JSX } from 'react';

export const Footer = (): JSX.Element => {
	const customStyles: ICustomStyles = {
		paddingBlock: '1.5rem',
		display: 'block',
	};

	return (
		<footer className='bg-black'>
			<div className='grid place-content-center place-items-center gap-6 py-12 lg:grid-cols-2 max-w-screen-xl mx-auto lg:justify-items-start'>
				<Logo />
				<div className='lg:col-start-1 lg:col-end-2'>
					<Navbar customStyles={customStyles} />
				</div>
				<SocialMedia />
				<p className='text-[#8c8c8c] text-sm lg:justify-self-end'>
					&#169; 2021 Loopstudios, All rights reserved
				</p>
			</div>
		</footer>
	);
};
