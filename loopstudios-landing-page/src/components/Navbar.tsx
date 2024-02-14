//	Interfaces
import { ICustomStyles } from '../interfaces/CustomStyles .interface';
import { JSX } from 'react';

interface Props {
	customStyles?: ICustomStyles;
}

export const Navbar = ({ customStyles }: Props): JSX.Element => {
	const listItems = ['about', 'careers', 'events', 'products', 'support'];

	return (
		<nav style={customStyles} className='hidden sm:block'>
			<ul className='capitalize text-white gap-4 flex flex-col sm:flex-row md:gap-12 md:translate-x-[0%]'>
				{listItems.map((li, i) => (
					<li
						className='cursor-pointer font-medium relative after:absolute after:bg-current after:bottom-0 after:h-[.1rem] after:w-full after:scale-x-0 after:left-0 hover:after:scale-x-100'
						key={i}
					>
						{li}
					</li>
				))}
			</ul>
		</nav>
	);
};
