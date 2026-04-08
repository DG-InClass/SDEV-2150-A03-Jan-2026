// ~/src/routes/admin.jsx
import AdminPage from "../pages/AdminPage";
import { adminAction, adminLoader } from "../lib/resource-routes.server";

export const loader = adminLoader;
export const action = adminAction;

export default function AdminRoute() {
    return <AdminPage />;
}