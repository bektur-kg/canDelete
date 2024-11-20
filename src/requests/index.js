const apiURL = 'https://jsonplaceholder.typicode.com'

export const requests = {
    getUsers: () => fetch(`${apiURL}/users`)
}