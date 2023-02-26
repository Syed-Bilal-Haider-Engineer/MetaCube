import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export { PrivateRoute, PrivateAdminRoute };
function PrivateRoute({ children }) {
    const location = useLocation()
    const { ceilSlice } = useSelector((state) => state);
    const { userdetails } = ceilSlice;
    if (!userdetails.hasOwnProperty("name")) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
}
function PrivateAdminRoute({ children }) {
    const location = useLocation()
    const { ceilSlice } = useSelector((state) => state);
    const { userdetails } = ceilSlice;
    const filterRole = userdetails.role && userdetails.role.filter(role => role !== null)
    if (!filterRole?.includes("admin")) {
        return <Navigate to="/profile" state={{ from: location }} />
    }
    return children;
}