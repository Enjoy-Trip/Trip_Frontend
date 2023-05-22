import FetchTemplate from "utils/FetchTemplate"
import { updateToken, clearUser } from "redux/slice/userSlice";

const url = "http://localhost:8080";

const areaUrl = "https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&areaCode=";

const AttractionUrl = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=100000&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&listYN=Y&arrange=O";

const AttractionDetailUrl = "https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1&contentId="

const AttractionCategoryUrl = "https://apis.data.go.kr/B551011/KorService1/categoryCode1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE"

const AttractionImageUrl = "https://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&imageYN=Y&subImageYN=Y&numOfRows=100&pageNo=1&contentId="

export async function getAreaList() {
    try {
        const response = await FetchTemplate({
            path: areaUrl,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function getAreaDetailList(code) {
    try {
        const response = await FetchTemplate({
            path: areaUrl + code,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionList(area, contenttype, sigungu) {
    try {
        const response = await FetchTemplate({
            path: AttractionUrl + "&contentTypeId=" + contenttype + "&areaCode=" + area + "&sigunguCode=" + sigungu,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionDetail(contentid) {
    try {
        const response = await FetchTemplate({
            path: AttractionDetailUrl + contentid,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item[0];
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionCategoty(contenttypeid, cat1, cat2, cat3) {
    try {
        const response = await FetchTemplate({
            path: AttractionCategoryUrl + "&contentTypeId=" + contenttypeid + "&cat1=" + cat1 + "&cat2=" + cat2 + "&cat3=" + cat3 + "&_type=json",
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item[0];
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionImages(contentid) {
    try {
        const response = await FetchTemplate({
            path: AttractionImageUrl + contentid,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function writeComment(contentid, content, user, dispatch) {
    try {
        const responseComment = await FetchTemplate({
            path: url + '/attraction/comment',
            method: 'POST',
            // needToken: true,
            token: user.accessToken,
            body: JSON.stringify({
                "contentid": contentid,
                "attractionCommentContent": content
            })
        });

        const resultComment = await responseComment.json();

        console.log(resultComment);

        if (resultComment.state === "SUCCESS") {
            alert(resultComment.message);
            return;
        }

        const responseToken = await FetchTemplate({
            path: url + '/user/refresh',
            method: 'POST',
            body: JSON.stringify({
                "refreshToken": user.refreshToken
            })
        });

        const resultToken = await responseToken.json();

        if (resultToken.state === "FAIL") {
            dispatch(clearUser);
            alert(resultToken.message);
        }

        console.log(resultToken);

        dispatch(updateToken({
            accessToken: resultToken.data
        }));

        const responseCommentRefresh = await FetchTemplate({
            path: url + '/attraction/comment',
            method: 'POST',
            needToken: true,
            token: resultToken.data,
            body: JSON.stringify({
                "contentid": contentid,
                "attractionCommentContent": content
            })
        });

        const resultCommentRefresh = await responseCommentRefresh.json();

        console.log(resultCommentRefresh);

        alert(resultCommentRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}