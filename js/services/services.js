const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data,
    });

    return await res.json();
}; 

const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`ошибка при отправке запроса на ${data} status:${res.status}`);
    }
    return await res.json();
};

export {postData};
export {getResourse};