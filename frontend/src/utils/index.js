import axios from 'axios';
const API_URL = 'http://localhost:8080/api-v1';

export const API = axios.create({
    baseURL: API_URL,
    responseType: 'json',
});

export const apiRequest = async({url, token, data, method}) => {
    try {
        const result = await API(url, {
            method: method || "GET",
            data: data,
            headers: {
                "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
            }
        });

        return result.data;
    } catch (error) {
        const err = error.response.data;
        console.log(err);
        return { status: err.sucess, message: err.message};
    }
};

export const handleFileUpload = async (uploadFile) => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "jobfinder");

    try {
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dfq4ereto/image/upload/",
            formData
        );
        return response.secure_url;
    } catch (error) {
        console.log(error);
    }
};

export const updateURL = ({
    pageNum,
    query,
    cmpLoc,
    sort,
    navigate,
    location,
    jType,
    exp,
}) => {
    const params = new URLSearchParams();

    if (pageNum && pageNum > 1) {
        params.append("page", pageNum);
    }

    if (query) {
        params.append("search", query);
    }

    if (cmpLoc) {
        params.append("location", cmpLoc);
    }

    if (sort) {
        params.append("sort", sort);
    }   

    if (jType) {
        params.append("type", jType);
    }

    if (exp) {
        params.append("exp", exp);
    }

    const newURL = `${location.pathname}?${params.toString()}`;
    navigate(newURL, {replace: true});

    return newURL;

};