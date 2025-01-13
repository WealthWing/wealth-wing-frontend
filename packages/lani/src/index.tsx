import 'assets/index.css';

import { App } from 'app';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<App />);
