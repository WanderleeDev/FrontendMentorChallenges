import { JSX } from 'react';
import mobileIcon from '../assets/images/icons/icon-hamburger.svg';

interface Props {
	navbarHandler?: () => void;
}

export const BtnMobile = ({ navbarHandler }: Props): JSX.Element => {
	return (
		<button onClick={navbarHandler} className='sm:hidden' type='button'>
			<img src={mobileIcon} alt='mobile button' aria-label='Open mobile menu' />
		</button>
	);
};
