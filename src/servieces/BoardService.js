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

export async function getComments(boardNo, user) {
    try {
        const response = await FetchTemplate({
            path: url + '/board/' + boardNo + '/comment',
            method: 'GET',
            needToken: user.accessToken ? true : false,
            token: user.accessToken
        });

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export async function writeBoard(title, content, images, user, dispatch) {
    console.log(images[0]);
    console.log(images[0].length);

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

        const resultWrite = await responseWrite.json();

        if (resultWrite.state === "SUCCESS") {
            alert(resultWrite.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

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
