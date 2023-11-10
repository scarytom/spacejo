import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url === '/' && 'active'}>
					Home
				</a>
				<a href="/demoboard" className={url === '/demoboard' && 'active'}>
					Demo Board
				</a>
				<a href="/sandbox" className={url === '/sandbox' && 'active'}>
					Sandbox
				</a>
				<a href="/404" class={url === '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
