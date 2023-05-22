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