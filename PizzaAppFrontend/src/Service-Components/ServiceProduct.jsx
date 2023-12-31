import axios from 'axios';

const Product_Backend_API = "http://localhost:8083/pizza";

// fetch all teh users from the JSOn File
export const axiosAllProducts = async (id) => {
    id = id || '';
    return await axios.get(Product_Backend_API + '/getAllPizzas/' + id);
}
export const axiosSearchProducts = async (id) => {
    id = id || '';
    return await axios.get(Product_Backend_API + '/getPizzaById/' + id);
}

// Add a new user into the JSON File
export const axiosAddProduct = async (product) => {
    return await axios.post(Product_Backend_API + '/addPizza', product);
}

// Edit or Update a new User 
export const axiosUpdateProduct = async (id, product) => {
    return await axios.put(Product_Backend_API + '/updatePizza/' + id, product);
}

// Delete an existing user from the JSON File
export const axiosDeleteProduct = async (id) => {
    return await axios.delete(Product_Backend_API + '/deletePizzaById/' + id);
}


export const axiosGetById = async (id) => {
    id = id || '';
    return await axios.get(Product_Backend_API + '/getPizzaById/' + id);
}
export const axiosGetBycategoryId = async (id) => {
    id = id || '';
    return await axios.get(Product_Backend_API + '/getByCategoryId/' + id);
}
