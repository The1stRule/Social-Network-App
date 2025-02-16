import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.jsx";
import Authorization from "./components/Authorization.jsx";
import NewsFeed from "./components/NewsFeed.jsx";
import ProtectedRote from "./components/ProtectedRote.jsx";


const App = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const [curUser, setCurUser] = useState(JSON.parse(localStorage.getItem("curUser")) || {});
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || []);

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts])

    useEffect(() => {
        localStorage.setItem("curUser", JSON.stringify(curUser));
    }, [curUser])

    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <ProtectedRote curUser={curUser} >
                        <NewsFeed posts={posts} setPosts={setPosts} curUser={curUser} setCurUser={setCurUser} />
                    </ProtectedRote>
                } />
                <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
                <Route path="/login" element={<Authorization users={users} setCurUser={setCurUser} />} />
            </Routes>
        </main>
    );
}

export default App;