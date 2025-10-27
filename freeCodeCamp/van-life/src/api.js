export async function getVans() {
    const res = await fetch("/api/vans");
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