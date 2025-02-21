import 'assets/index.css';

import { App } from 'app';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'redux/store';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
