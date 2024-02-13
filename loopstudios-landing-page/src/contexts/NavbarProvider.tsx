import { createContext, useState, JSX } from 'react';
//  Interfaces
import { NavbarContextProps } from './NavbarContextProps.interface';

export const NavbarContext = createContext({});

export const NavbarContextProvider = ({
	children,
}: NavbarContextProps): JSX.Element => {
	const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

	return (
		<NavbarContext.Provider value={{ navbarIsOpen, setNavbarIsOpen }}>
			{children}
		</NavbarContext.Provider>
	);
};
