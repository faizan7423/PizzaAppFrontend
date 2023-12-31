import axios from 'axios';

const Backend_API = "http://localhost:8083/cart";

// fetch all the users from the JSOn File
export const axiosCart = async (id) => {
    id = id || '';
    return await axios.get(Backend_API + '/' + id);
}

// Add a new user into the JSON File axiosAddToCart
export const axiosAddToCart = async (custid,pizzaId) => {
    return await axios.post(Backend_API + '/add/'+custid+'/'+pizzaId);
}
// Delete a user from the JSON File
export const axiosDeleteProductCart = async (custid,pizzaId) => {
    return await axios.delete(Backend_API + '/deletePizza/'+ custid+'/'+ pizzaId);
}
