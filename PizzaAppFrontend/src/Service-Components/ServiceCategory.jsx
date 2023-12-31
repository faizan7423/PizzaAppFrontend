import axios from 'axios';

const Backend_API = "http://localhost:8083/category";

// fetch all teh users from the JSOn File
export const axiosAllCategories = async (id) => {
    id = id || '';
    return await axios.get(Backend_API + '/findAll' + id);
}
export const axiosCategoryGetById = async (id) => {
    id = id || '';
    return await axios.get(Backend_API + '/categoryUsingId/' + id);
}
// Add a new user into the JSON File
export const axiosAddCategory = async (category) => {
    return await axios.post(Backend_API + '/addCategory', category);
}
// Edit or Update a new User 
export const axiosUpdateCategory = async (id, category) => {
    return await axios.put(Backend_API + '/updateCategory/' + id, category);
}


export const axiosGetBycategoryId = async (id) => {
    id = id || '';
    return await axios.get(Backend_API + '/categoryUsingId/' + id);
}