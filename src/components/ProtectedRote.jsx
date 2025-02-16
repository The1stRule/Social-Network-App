import { Navigate } from "react-router-dom";

const ProtectedRote = ({ curUser, children }) => {
    if(Object.keys(curUser).length === 0) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRote;