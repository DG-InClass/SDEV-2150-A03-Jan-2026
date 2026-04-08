// ~/src/routes/admin.$resourceId.jsx
//                    \_________/  Allows this to be a "dynamic route" that is mapped to a "dynamic URL"
import AdminPage from "../pages/AdminPage";
import { adminAction, adminLoader } from "../lib/resource-routes.server";

export const loader = adminLoader;
export const action = adminAction;

export default function AdminResourceRoute() {
    return <AdminPage />;
}
