// ~/src/routes.js

import { index, route } from '@react-router/dev/routes';

export default [
    index('./routes/home.jsx'),
    route('admin', './routes/admin.jsx'),
    route('admin/:resourceId', './routes/admin.$resourceId.jsx'),
];
