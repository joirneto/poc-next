import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";

const Home = () => {
    const [count, setCount] = useState(0);
    const {data} = useSWR('https://jsonplaceholder.typicode.com/users');
    useEffect(() => {
        setInterval(() => {
            setCount(old => old + 1);
        }, 1000)
    }, [])
    return (
        <>
            <h1>Page Static</h1>
            <h2>Count: {count}</h2>
            <p><Link href="/ssr"><a>Link: SSR</a></Link></p>
            <p><Link href="/ssg"><a>Link: SSG</a></Link></p>
            <pre>Data Users: {JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default Home;