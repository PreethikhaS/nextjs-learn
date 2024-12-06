export default function ProjectDetails(){
    return(
        <main>
            <h1>Project {params.slug}</h1>
        </main>
    )
}




// The [slug] part over here is our dynamic route segment. And Next.js
// provides a way to access what value has been passed to it via the
// params prop passed to page.js page.

// If you choose to use [id] or [name] instead of [slug] as the folder
// name, you will need to access it as params.id or params.name,
// respectively. Whichever name you provide, it will be the same name to
// access the value through the params object.