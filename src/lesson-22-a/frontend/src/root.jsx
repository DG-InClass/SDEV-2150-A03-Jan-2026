// root.jsx
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router';

import './index.css';
import App from './App';

export function Layout({children}) {
    return <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
            { children }
            <ScrollRestoration />
            <Scripts />
        </body>
    </html>
}

export default function Root() {
    return <App />;
}
