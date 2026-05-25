import '@xyflow/react/dist/style.css';
import { TayoProvider } from '@wealth-wing/tayo/src/providers/tayo-provider';
import { kayaDarkTheme } from '@wealth-wing/tayo/src/theme/kaya-theme';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<TayoProvider theme={kayaDarkTheme}>
			<Component {...pageProps} />
		</TayoProvider>
	);
};

export default App;
