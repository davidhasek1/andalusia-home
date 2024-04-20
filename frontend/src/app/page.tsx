import { permanentRedirect } from 'next/navigation';
import { Example } from '../components/Example';

export default function Home() {
	//permanentRedirect('/coming-soon');
	return (
		<main className="flex min-h-screen flex-col items-center py-10 gap-16">
			<Example />
		</main>
	);
}
