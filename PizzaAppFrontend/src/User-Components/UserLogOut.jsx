
//used to perform user logout operation
const UserLogOut = () => {

    sessionStorage.removeItem("id");

    //navigating to another page using history.push()
    window.location.href = '/';

   
}
//exporting UserLogout
export default UserLogOut;