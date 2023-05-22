const FetchTemplate = ({path, method, needToken = false, token, body}) => {
    const url = "http://localhost:8080";

    const headers = {
        "Content-Type": "application/json",
    }

    if (needToken) {
        headers["Authroization"] = token;
    }

    return fetch(url + path, {
        method,
        headers,
        body,
    });
}

export default FetchTemplate;