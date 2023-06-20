async function getData(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return res.json()
}

export async function generateMetadata ({params: {id}}) {
    const post = await getData(id)
    return {
        title: post.title,
        description: post.body,
    }
}


export default async function post ({params: {id}}) {
    const post = await getData(id)
    return (
        <div>
            <h1>{post.title}</h1>
            <div>
                <p>{post.body}</p>
            </div>
        </div>
    )
}