import React from "react";
import Link from "next/link";

const Ssg = ({posts}) => {
    return (
        <div>
            <h1>Server Side Generation</h1>
            <Link href="/"><a>Return</a></Link>
            <ul>
                {posts.map(post => (
                    <li key={post.id}><Link href={'/posts/'+post.id}><a>{post.title}</a></Link></li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();
    return {
        props: {
            date: new Date().getTime(),
            posts: data,
        }
    }
}

export default Ssg;