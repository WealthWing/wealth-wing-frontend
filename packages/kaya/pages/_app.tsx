import '@xyflow/react/dist/style.css';
import { kayaDarkTheme, TayoProvider } from '@wealth-wing/tayo';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<TayoProvider theme={kayaDarkTheme}>
			<Component {...pageProps} />
		</TayoProvider>
	);
};

export default App;
