// When working with a file-based system, having numerous folders within the app folder may be better, especially in a more complex system. 
// To address this and offer better control over folder organization without impacting the URL path structure, Next.js introduced a feature called
// "Route Groups.”

// Consider the existing structure: we already have three folders: about,
// contact, and projects.

// Now, if we need to add functionality like sign-in and sign-up, we
// would have to create more folders within the app folder, causing it to
// grow larger and larger.

// What if we could limit the number of folders inside the app folder to a
// maximum of 1-3 and include everything within these folders while
// maintaining the same route path?
// In this case, if we create these folders, i.e., auth and, let's say, dashboard,
// right away and add the corresponding folders & pages inside them, it
// will impact our routing. Why? Because, as we've learned, each folder
// name serves as a route name.

// If we do it like the above, the route name for the sign-in page would be
// /auth/sign-in, and similarly, for the sign-up page, it would be /auth/
// sign-up.
// We intended something else, right? Our desired route names are 

// /sign-in and /sign-up, but we still want to maintain proper file
// organization. We don't want auth to be included in the URL, but we do
// want it to be present in our code structure.
// To meet this specific requirement, we have Route Groups. They help
// organize routes into logical groups like auth, team, etc. We can create a
// route group by enclosing the folder name in parentheses, like (auth).
// In this case, if we create these folders, i.e., auth and, let's say, dashboard,
// right away and add the corresponding folders & pages inside them, it
// will impact our routing. Why? Because, as we've learned, each folder
// name serves as a route name.

export default function SignIn(){
    return(
        <main>
            <h1>
                Sign In
            </h1>
        </main>
    )
}
