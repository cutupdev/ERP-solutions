export async function callServer(path, method = 'GET', payload = {}) {
    const stringifiedPayload = payload ? JSON.stringify(payload) : null;
    const reqBody =
        method === 'POST' && stringifiedPayload
            ? { body: stringifiedPayload }
            : {};

    const req = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/method/wahni_it.api.${path}`,
        {
            method,
            ...reqBody,
        },
    );

    return req.json();
}
