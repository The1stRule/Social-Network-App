const Post = ({ post, setPosts, curUser }) => {
    const handleDelete = (delId) => {
        setPosts(prev => {
            return prev.filter(curValue => curValue.id !== delId);
        });
    }

    return (
        <div style={{width: 600, padding: 20, border: "1px solid black"}}>
            <p>Author: {post.author}</p>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            {
                post.email === curUser.email && <button onClick={() => handleDelete(post.id)}>Delete</button>
            }
        </div>
    );
}

export default Post;