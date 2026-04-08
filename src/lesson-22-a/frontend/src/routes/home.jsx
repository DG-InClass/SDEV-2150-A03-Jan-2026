// ~/src/routes/home.jsx
import ResourceDirectoryPage from "../pages/ResourceDirectoryPage";
import { resourceDirectoryLoader } from "../lib/resource-routes.server";

export const loader = resourceDirectoryLoader;

export default function HomeRoute() {
    return <ResourceDirectoryPage />;
}
