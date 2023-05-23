import FetchTemplate from "utils/FetchTemplate"
import { updateToken, clearUser } from "redux/slice/userSlice";

import { refreshToken } from "utils/RefreshToken";

const url = "http://localhost:8080";

export async function getBoardList() {
    try {
        const response = await FetchTemplate({
            path: url + '/board',
            method: 'GET',
        });

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getBoardDetail(boardNo) {
    try {
        const response = await FetchTemplate({
            path: url + '/board/' + boardNo,
            method: 'GET',
        });

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export async function writeBoard(title, content, images, user, dispatch) {
    try {
        const responseWrite = await FetchTemplate({
            path: url + '/board',
            method: 'POST',
            needToken: true,
            token: user.accessToken,
            body: JSON.stringify({
                "boardTitle": title,
                "boardContent": content,
                "boardImages": images
            })
        });

        console.log(user.accessToken);

        const resultWrite = await responseWrite.json();

        if (resultWrite.state === "SUCCESS") {
            alert(resultWrite.message);
            return;
        }

        const token = await refreshToken(dispatch, user);
        
        console.log(token);

        const responseWriteRefresh = await FetchTemplate({
            path: url + '/board',
            method: 'POST',
            needToken: true,
            token: token,
            body: JSON.stringify({
                "boardTitle": title,
                "boardContent": content,
                "boardImages": images
            })
        });

        const resultWriteRefresh = await responseWriteRefresh.json();

        alert(resultWriteRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}