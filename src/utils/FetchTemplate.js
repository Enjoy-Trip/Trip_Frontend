const FetchTemplate = ({path, method, needToken = false, token, body}) => {
    const url = "http://localhost:8080";
    // const url = "http://14.46.141.58:8080";

    const headers = {} 
    
    if (method !== "GET") {
        headers["Content-Type"] = "application/json";
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