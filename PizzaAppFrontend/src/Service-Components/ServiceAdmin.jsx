import axios from 'axios';

const Admin_Backend_API = "http://localhost:8083/admin";

// fetch all teh users from the JSOn File
export const axiosAllAdmins = async (id) => {
    id = id || '';
    return await axios.get(Admin_Backend_API + '/' + id);
}

// Add a new user into the JSON File
export const axiosAddAdmin = async (admin) => {
    return await axios.post(Admin_Backend_API + '/registerAdmin', admin);
}

// Edit or Update a new User 
export const axiosUpdateAdmin = async (id, admin) => {
    return await axios.put(Admin_Backend_API + '/' + id, admin);
}

// Delete an existing user from the JSON File
export const axiosDeleteAdmin = async (id) => {
    return await axios.delete(Admin_Backend_API + '/' + id);
}