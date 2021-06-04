export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    if (user && user.token) {
        return { Authorization: 'Token ' + user.token };
    } else {
        return {};
    }
}