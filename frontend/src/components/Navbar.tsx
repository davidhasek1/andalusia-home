'use client';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from 'components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
	{
		title: 'Nemovitosti',
		href: '/properties',
	},
	{
		title: 'Blog',
		href: '/blog',
	},
	{
		title: 'O nás',
		href: '/about',
	},
	{
		title: 'Kontakt',
		href: '/contact',
	},
];

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className={'flex items-center justify-between h-[5rem] container'}>
			<Image src={'/logo-white.svg'} alt={'logo'} width={200} height={60} className={'object-cover'} />
			<ul className={'hidden lg:flex items-center justify-center gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]'}>
				{navLinks.map((item, idx) => (
					<li key={idx}>
						<Link href={item.href} className={cn('text-white font-medium text-lg', pathname === item.href && 'text-primary')}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
			<Button className={'hidden lg:flex'}>Kontakt</Button>

			<Sheet>
				<SheetTrigger asChild className={'block lg:hidden'}>
					<Button variant={'ghost'} size={'icon'}>
						<Menu className={'stroke-white w-[1.7rem] h-[1.7rem]'} />
					</Button>
				</SheetTrigger>
				<SheetContent>
					<div className={'grid gap-4 py-4'}>
						{navLinks.map((item, idx) => (
							<Link key={idx} href={item.href} className={cn('text-white font-medium text-lg', pathname === item.href && 'text-primary')}>
								{item.title}
							</Link>
						))}
						<Button className={'w-full'}>Kontakt</Button>
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default Navbar;
