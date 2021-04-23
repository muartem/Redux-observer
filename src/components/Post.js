import {useSelector} from "react-redux";


const Post = () => {

    const post = useSelector((state) => state.post?.data)

    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
}

export default Post;
