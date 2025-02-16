import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ users, setUsers }) => {
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const user of users) {
            if (user.email === e.target.email.value) {
                setIsError(true);
                return;
            }
        }

        const newUser = {
            fullname: e.target.fullname.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        setUsers(prev => {
            localStorage.setItem("users", JSON.stringify([...prev, newUser]));
            return [...prev, newUser];
        });
        setIsError(false);
        navigate("/login");
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullname" placeholder="Enter your fullname" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
                {
                    <p>{isError ? "Email is already exsist!" : ""}</p>
                }
            </form>
            <p>Already have account? <Link to="/login">Log in</Link></p>
        </div>
    );
}

export default Register;