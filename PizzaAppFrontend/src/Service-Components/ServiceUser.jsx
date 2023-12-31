import axios from 'axios';

const User_Backend_API = "http://localhost:8083/user";

// fetch all teh users from the JSOn File
export const axiosAllUsers = async (id) => {
    id = id || '';
    return await axios.get(User_Backend_API + '/allCustomers/' + id);
}
export const axiosGetUserById = async (id) => {
    id = id || '';
    return await axios.get(User_Backend_API + '/CustomerById/' + id);
}
export const axiosSearchUsers = async (id) => {
    id = id || '';
    return await axios.get(User_Backend_API + '/CustomerById/' + id);
}

// Add a new user into the JSON File
export const axiosAddUser = async (user) => {
    return await axios.post(User_Backend_API + '/registerCustomer', user);
}

// Edit or Update a new User 
export const axiosUpdateUser = async (id, user) => {
    return await axios.put(User_Backend_API + '/updateCustomer/' + id, user);
}

// Delete an existing user from the JSON File
export const axiosDeleteUser = async (id) => {
    return await axios.delete(User_Backend_API + '/deleteCustomer/' + id);
}
export const axiosGetCart = async (custid) => {
    return await axios.get(User_Backend_API + '/getCart/'+custid);
}