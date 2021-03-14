const API_BASE_URL = 'http://localhost:3000'

export async function get(url) {
    const body = await fetch(`${API_BASE_URL}/${url}`);
    return body.json();
}