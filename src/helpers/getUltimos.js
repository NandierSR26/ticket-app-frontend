

export const getUltimos = async() => {
    const resp = await fetch(`${process.env.REACT_APP_BACKEND_URL}ultimos`);
    const data = await resp.json();

    return data.ultimos;
}