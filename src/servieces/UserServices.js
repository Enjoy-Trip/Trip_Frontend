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

        console.log(result);

        return {
            'accessToken': result["Access-Token"],
            'refreshToken': result["Refresh-Token"]
        }
    } catch (error) {
        console.log(error);
    }
}