export default function authHeader() {
    if (localStorage.getItem('userID') && localStorage.getItem('userToken')){
        return { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } };
    } else {
        return {};
    }
}