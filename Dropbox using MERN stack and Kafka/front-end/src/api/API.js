const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
        }).then(res => {
            console.log(res);
            return res.status;
        })
        .catch(error => {
            console.log("This is error");
            return error;
});

export const uploadFile = (payload) =>
    fetch(`${api}/files/upload`, {
        method: 'POST',
        body: payload
    }).then(res => {
        return res.status;
    }).catch(error => {
            console.log(" error in upload files");
            return error;
});

export const getImages = () =>
    fetch(`${api}/files/`)
        .then(res => res.json())
        .catch(error => {
            console.log("error in getting images.");
            return error;
});

export const doSignUp = (payload) =>
    fetch(`${api}/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
        }).then(res => {
            console.log(res);
            return res.status;
        })
        .catch(error => {
            console.log("This is error");
            return error;
});

export const doGetDirectory = (payload) =>
        fetch(`${api}/listdir`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(payload)
            }).then(res => {
                console.log(res);
                return res.json();
            })
            .catch(error => {
                console.log("This is error");
                return error;
});

export const submitUserInfo = (payload) =>
        fetch(`${api}/submitUserInfo`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            }).then(res => {
                return res.status;
            })
                .catch(error => {
                    console.log("This is error");
                    return error;
});

export const logout = () =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers
        },
        credentials:'include'
        }).then(res => {
            return res.status;
            res.data;
        })
        .catch(error => {
            console.log("This is error");
            return error;
});
