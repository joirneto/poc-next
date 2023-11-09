import React from "react";
import Link from "next/link";

const Ssr = (props) => {
    return (
        <div>
            <h1>Server Side Rendering</h1>
            <Link href="/"><a>Return</a></Link>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            date: new Date().getTime(),
        }
    }
}

export default Ssr;