import React from "react";
import Link from "next/link";

const Post = (props) => {
    return (
        <div>
            <h1>Post(SSG) </h1>
            <h1>Title: {props?.post?.title}</h1>
            <Link href="/"><a>Return</a></Link>
        </div>
    );
};

export async function getStaticProps({params}) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await posts.json();
    return {
        props: {
            id: params.id,
            post: data,
        },
        revalidate: 60,
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' }, }, { params: { id: '5' }, } ],
        fallback: 'blocking',
    }
}

export default Post;