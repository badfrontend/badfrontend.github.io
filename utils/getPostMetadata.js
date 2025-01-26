import fs from 'fs';
import matter from 'gray-matter';

export const getPostMetadata = (basePath) => {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.mdx'))

    const posts = markdownPosts.map(filename => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResukt = matter(fileContents)

        return {
            title: matterResukt.data.title,
            prep_time: matterResukt.data.prep_time,
            cook_time: matterResukt.data.cook_time,
            description: matterResukt.data.description,
            backgroundImage: matterResukt.data.backgroundImage,
            slug: filename.replace('.mdx', ''),
            isHidden: matterResukt.data.isHidden,
        }
    })
    return posts;
}