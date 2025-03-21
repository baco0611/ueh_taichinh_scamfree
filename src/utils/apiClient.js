import axios from "axios"

const getData = async (api, url, token, completeMessage, errorMessage) => {
    const apiURL = api + url
    console.log(apiURL)

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    const result = 
        await axios.get(apiURL, config)
            .then(response => {
                console.log(completeMessage ? completeMessage : '', response)
                return response
            })
            .catch(err => {
                console.log(errorMessage ? errorMessage : '', err)
                return err
            })

    return {
        data: result.data,
        status: result.status
    }
} 

const postData = async (api, url, token, payload, completeMessage, errorMessage) => {
    const apiURL = api + url
    console.log(apiURL)

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }

    const result = 
        await axios.post(apiURL, payload, config)
            .then(response => {
                console.log(completeMessage ? completeMessage : '', response)
                return response
            })
            .catch(err => {
                console.log(errorMessage ? errorMessage : '', err)
                return err.response.data
            })

    console.log(result)
    return {
        data: result.data || result.message,
        status: result.status
    }
}

const deleteData = async (api, url, token, payload, completeMessage, errorMessage) => {
    const apiURL = api + url;
    
    const config = {
        headers: { Authorization: `Bearer ${token}` },
        data: payload  // Chuyển payload vào config
    };

    const result = 
        await axios.delete(apiURL, config)
            .then(response => {
                console.log(completeMessage ? completeMessage : '', response);
                return response;
            })
            .catch(err => {
                console.log(errorMessage ? errorMessage : '', err);
                return err;
            });

    return {
        data: result.data,
        status: result.status
    };
}

export {
    postData,
    getData,
    deleteData,
}