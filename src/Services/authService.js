// check User Logged in?
export const isLoggedIn = () => {
    const username = sessionStorage.getItem('loginUser')
    if(!username){
        return false;
    }
    else{
        return true;
    }
}

export const logoutUser = () => {
    localStorage.clear();
    sessionStorage.clear();
}
