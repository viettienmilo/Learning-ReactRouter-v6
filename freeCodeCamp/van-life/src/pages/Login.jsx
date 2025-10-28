import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useState } from 'react';
import { loginUser } from './../api.js';

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname = new URL(request.url).searchParams.get("redirect") || "/host";
    try {
        await loginUser({ email, password });
        localStorage.setItem("loggedin", true);
        const response = redirect(pathname);
        response.body = true;
        return response;
    } catch (err) {
        return err;
    }
}

export default function Login() {
    const [submitStatus, setSubmitStatus] = useState("idle");
    const message = useLoaderData();
    const error = useActionData();
    const { state } = useNavigation();

    return (
        <section className="login-form">
            <h1>Sign in to your account</h1>
            {message && <h3 style={{ color: "#cc0000" }}>{message}</h3>}
            {error && <p style={{ color: "#cc0000" }}>{error.message}</p>}
            <Form method="POST" replace>
                <input name='email' type="email" placeholder="Email address" />
                <input name='password' type="password" />
                <button type="submit" disabled={state === "submitting"}>
                    {state === "submitting" ? "Logging in..." : "Sign in"}
                </button>
            </Form>
        </section>
    );
}