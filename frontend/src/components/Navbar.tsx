'use client';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from 'components/ui/sheet';
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

	const isHp = pathname === '/';
	return (
		<div className={cn('', !isHp && 'border-b shadow-box')}>
			<nav className={'container flex items-center justify-between h-[6rem]'}>
				<Link href={'/'}>
					<Image
						src={isHp ? '/logo-white.svg' : '/logo-original.svg'}
						alt={'logo'}
						width={180}
						height={60}
						className={'object-cover hidden md:block aspect-[180/60]'}
					/>
					<Image
						src={isHp ? '/logo-white.svg' : '/logo-original.svg'}
						alt={'logo'}
						width={140}
						height={50}
						className={'object-cover block md:hidden aspect-[140/50]'}
					/>
				</Link>
				<ul className={'hidden lg:flex items-center justify-center gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]'}>
					{navLinks.map((item, idx) => (
						<li
							key={idx}
							className={cn(
								'font-medium text-lg relative text-white',
								'before:content-[""] before:absolute before:bottom-[-10px] before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-bottom-right before:transition-transform hover:before:scale-x-100 hover:before:origin-bottom-left',
								pathname === item.href && 'before:scale-x-100',
								!isHp && 'text-black before:bg-black',
							)}
						>
							<Link href={item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
				<Button className={'hidden lg:flex'}>Kontakt</Button>

				<Sheet>
					<SheetTrigger asChild className={'block lg:hidden'}>
						<Button variant={'ghost'} size={'icon'}>
							<Menu className={cn('stroke-white w-[1.7rem] h-[1.7rem]', !isHp && 'stroke-black')} />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<Image
								src={'/logo-original.svg'}
								alt={'logo'}
								width={140}
								height={50}
								className={'object-cover block md:hidden aspect-[140/50]'}
							/>
						</SheetHeader>
						<ul className={'grid justify-center py-[3rem]'}>
							{navLinks.map((item, idx) => (
								<li
									key={idx}
									className={cn(
										'font-medium text-lg text-center first:border-t border-b border-black/20 py-[1rem]',
										pathname === item.href && 'text-primary',
									)}
								>
									<Link href={item.href}>{item.title}</Link>
								</li>
							))}
						</ul>
						<Button className={'w-full'}>Kontakt</Button>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Navbar;
