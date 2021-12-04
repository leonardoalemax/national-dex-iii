import { SessionProvider, SessionProviderProps } from "next-auth/react";
import "./styles.css";

// Use of the <SessionProvider> is now mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }) {
	return (
		<SessionProvider
			session={pageProps.session}
			// Provider options are not required but can be useful in situations where
			// you have a short session maxAge time. Shown here with default values.
		>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
