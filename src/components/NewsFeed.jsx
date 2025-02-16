import { useNavigate } from "react-router-dom";
import AddPost from "./AddPost.jsx";
import Post from "./Post.jsx";

const NewsFeed = ({ posts, setPosts, curUser, setCurUser }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        setCurUser({});
        navigate("/login");
    }

    return (
        <>
            <h1>News Feed</h1>
            <button onClick={handleLogOut}>Log out</button>
            <AddPost setPosts={setPosts} curUser={curUser} />
            {
                posts.length > 0? (
                    [...(posts.filter(curValue => curValue.condition === "public" || curValue.email == curUser.email))].map((curValue, index) => {
                        return <Post key={index} post={curValue} setPosts={setPosts} curUser={curUser} />
                    })
                ) : <p>No posts</p>
            }
        </>
    );
}

export default NewsFeed;