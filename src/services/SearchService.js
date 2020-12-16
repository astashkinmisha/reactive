export default class SearchService {

    url = 'https://jsonplaceholder.typicode.com/users'

    getElement(element){

     return fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }

};