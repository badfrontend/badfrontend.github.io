import Link from "next/link"

const PostCard = ({post}) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <div>
                <h3>{post.title}</h3>
            </div>
        </Link>
    )
}

export default PostCard;