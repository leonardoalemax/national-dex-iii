import Link from "next/link";
import Auth from "./Auth";
import styles from "./header.module.css";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
	return (
		<header>
			<noscript>
				<style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
			</noscript>

			<Auth />

			<nav>
				<ul className={styles.navItems}>
					<li className={styles.navItem}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/games'>
							<a>Games</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/tcg'>
							<a>TCG</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/anime'>
							<a>Anime</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
