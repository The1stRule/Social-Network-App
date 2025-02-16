const AddPost = ({ setPosts, curUser }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: e.target.title.value,
            body: e.target.body.value,
            condition: e.target.condition.value,
            author: curUser.fullname,
            email: curUser.email
        }

        setPosts(prev => {
            console.log(prev);
            console.log([...prev, newPost]);
            return [...prev, newPost];
        });
    }

    return (
        <div>
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Enter post title" required />
                <textarea name="body" placeholder="Enter post body" required />
                <select name="condition">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button>Add Post</button>
            </form>
        </div>
    );
}

export default AddPost;