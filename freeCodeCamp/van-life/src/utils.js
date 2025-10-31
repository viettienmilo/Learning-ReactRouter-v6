import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin");
    const pathname = new URL(request.url).pathname;

    if (!isLoggedIn) {
        const response = redirect(`/login?message=You have to log in first.&redirect=${pathname}`);
        console.log("Not log in")
        response.body = true;  // It's silly, but it works
        throw response;
    }
}