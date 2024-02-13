interface Props {
	navbarIsOpen: boolean;
}

export const NavbarMobile = ({ navbarIsOpen }: Props) => {
	const listItems = ['about', 'careers', 'events', 'products', 'support'];

	return (
		<nav
			className={`fixed bg-black inset-0 transition-transform h-[100dvh] grid place-content-center justify-start ${navbarIsOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden`}
		>
			<ul className='pl-4 uppercase text-white gap-10 flex flex-col'>
				{listItems.map((li, i) => (
					<li
						className='cursor-pointer font-Josefin-Sans text-5xl hover:font-bold'
						key={i}
					>
						{li}
					</li>
				))}
			</ul>
		</nav>
	);
};
