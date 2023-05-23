import FetchTemplate from "utils/FetchTemplate"

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

export async function writeComment(boardNo, content, user, dispatch) {
    try {
        const responseWrite = await FetchTemplate({
            path: url + '/board/comment',
            method: 'POST',
            needToken: true,
            token: user.accessToken,
            body: JSON.stringify({
                "boardNo": boardNo,
                "boardCommentContent": content,
            })
        });

        const resultWrite = await responseWrite.json();

        if (resultWrite.state === "SUCCESS") {
            alert(resultWrite.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

        const responseWriteRefresh = await FetchTemplate({
            path: url + '/board/comment',
            method: 'POST',
            needToken: true,
            token: token,
            body: JSON.stringify({
                "boardNo": boardNo,
                "boardCommentContent": content,
            })
        });

        const resultWriteRefresh = await responseWriteRefresh.json();

        alert(resultWriteRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function updateComment(commentNo, content, user, dispatch) {
    try {
        const responseUpdate = await FetchTemplate({
            path: url + '/board/comment/' + commentNo,
            method: 'PUT',
            needToken: true,
            token: user.accessToken,
            body: JSON.stringify({
                "boardCommentContent": content,
            })
        });

        const resultUpdate = await responseUpdate.json();

        if (resultUpdate.state === "SUCCESS") {
            alert(resultUpdate.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

        const responseUpdateRefresh = await FetchTemplate({
            path: url + '/board/comment/' + commentNo,
            method: 'PUT',
            needToken: true,
            token: token,
            body: JSON.stringify({
                "boardCommentContent": content,
            })
        });

        const resultUpdateRefresh = await responseUpdateRefresh.json();

        alert(resultUpdateRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteComment(commentNo, user, dispatch) {
    try {
        const responseDelete = await FetchTemplate({
            path: url + '/board/comment/' + commentNo,
            method: 'DELETE',
            needToken: true,
            token: user.accessToken
        });

        const resultDelete = await responseDelete.json();

        if (resultDelete.state === "SUCCESS") {
            alert(resultDelete.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

        const responseDeleteRefresh = await FetchTemplate({
            path: url + '/board/comment/' + commentNo,
            method: 'DELETE',
            needToken: true,
            token: token
        });

        const resultDeleteRefresh = await responseDeleteRefresh.json();

        alert(resultDeleteRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}
