export async function getVans(id) {
    const res = await fetch(id ? `/api/vans/${id}` : "/api/vans");
    if (!res.ok) {
        throw {
            message: "Fail to fetch vans data",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json();
    return data.vans;
}

export async function getHostVans(id) {
    const res = await fetch(id ? `/api/host/vans/${id}` : "/api/host/vans");
    if (!res.ok) {
        throw {
            message: "Fail to fetch host vans data",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    );

    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data;
}