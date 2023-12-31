import axios from 'axios';

const Backend_API = "http://localhost:8083/orders";

// fetch all teh users from the JSOn File
export const axiosGetOrdersByCustId = async (id) => {
    id = id || '';
    return await axios.get(Backend_API + '/findBycustId/' + id);
}

// Add a new user into the JSON File
export const axiosPlaceOrder = async (custid) => {
    return await axios.post(Backend_API + '/placeOrder/'+ custid);
}
// fetch all teh users from the JSOn File
export const axiosGetItemsOrderId = async (id) => {
    id = id || '';
    return await axios.get(Backend_API + '/find/' + id);
}