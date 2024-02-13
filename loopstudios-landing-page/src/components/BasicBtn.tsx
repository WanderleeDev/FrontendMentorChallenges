import { JSX } from 'react';

export const BasicBtn = (): JSX.Element => {
	return (
		<button
			className='uppercase text-[#696969] border-black border-2 w-fit tracking-[.3rem] px-12 py-2 my-10 mx-auto hover:text-white hover:border-current hover:bg-black transition-all lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:justify-self-end lg:mx-0 lg:self-center'
			type='button'
		>
			see all
		</button>
	);
};
