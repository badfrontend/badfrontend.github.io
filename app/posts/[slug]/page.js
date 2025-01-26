import Header from '@/components/Header/Header';
import PostContent from '@/components/PostContent/PostContent';
import { getPostMetadata } from '@/utils/getPostMetadata';
import fs from 'fs'
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug) => {
    const folder = 'posts/'
    const file = folder + `${slug}.mdx`
    const content = fs.readFileSync(file, 'utf8');

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('posts');
    return posts.map(post => {
        return {
            slug: post.slug
        }
    })
}

export async function generateMetadata(props) {
    const params = await props.params;
    console.log(params)
    return {
        title: `Lalala ${params.slug}`
    }
}

export const PostPage = async props => {
    const params = await props.params;
    const slug = params.slug;
    const post = getPostContent(slug)
    return (
        <div>
            <Header title={post.data.title} description={post.data.description} backgroundImage={post.data.backgroundImage} />
            <PostContent>
                <Markdown>{post.content}</Markdown>
            </PostContent>
        </div>
    )
}

export default PostPage;