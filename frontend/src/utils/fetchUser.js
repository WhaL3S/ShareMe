export const fetchUser = () => {
    const userInfoLocal = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    return userInfoLocal
}