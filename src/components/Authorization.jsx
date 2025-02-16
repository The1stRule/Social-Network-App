import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Authorization = ({ users, setCurUser }) => {
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        for (const user of users) {
            if (user.email === email && user.password === password) {
                setCurUser(user);
                setIsError(false);
                navigate("/");
                return;
            }
        }

        setIsError(true);
    }
    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
                {
                    <p>{isError ? "User not found!" : ""}</p>
                }
            </form>
            <p>Don't have a account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Authorization;