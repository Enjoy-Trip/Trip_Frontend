import FetchTemplate from "utils/FetchTemplate"

export async function Login(id, password) {
    try {
        const response = await FetchTemplate({
            path: '/user/login',
            method: 'POST',
            body: JSON.stringify({
                'userId': id,
                'userPassword': password
            })
        });

        const result = await response.json();

        if (result.state === "FAIL") {
            alert(result.message);
            return;
        }

        if (result.state === "SUCCESS") {
            alert(result.message);
            return result.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function Signup(id, password, name, nickname) {
    try {
        const response = await FetchTemplate({
            path: '/user',
            method: 'POST',
            body: JSON.stringify({
                'userId': id,
                'userPassword': password,
                'userName': name,
                'userNickName': nickname
            })
        });

        const result = await response.json();

        if (result.state === "FAIL") {
            alert(result.message);
        }

        if (result.state === "SUCCESS") {
            alert(result.message);
        }
    } catch (error) {
        console.log(error);
    }
}

export async function CheckId(id) {
    try {
        const response = await FetchTemplate({
            path: '/user/check/' + id,
            method: 'GET'
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}