import { useState, JSX } from 'react';
//	Components
import { BtnMobile } from './BtnMobile';
import { Navbar } from './Navbar';
import { NavbarMobile } from './NavbarMobile';
import { Logo } from '../shared/Logo';

export const Header = (): JSX.Element => {
	const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);
	const navbarHandler = () => setNavbarIsOpen(prev => !prev);
	const scrollAnimation = {
		animationTimeline: 'scroll()',
		animationRange: '0 500px',
	};

	return (
		<header
			className='fixed w-full top-0 z-20 animate-blurBackground'
			style={scrollAnimation}
		>
			<NavbarMobile navbarIsOpen={navbarIsOpen} />
			<div className='flex items-center justify-between p-4 py-8 max-w-screen-xl uppercase text-white mx-auto relative z-20'>
				<Logo />
				<Navbar />
				<BtnMobile navbarHandler={navbarHandler} />
			</div>
		</header>
	);
};
