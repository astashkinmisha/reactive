export default class PostServices {

    url = 'https://jsonplaceholder.typicode.com/posts';


    async posts (url) {
       return await fetch(this.url)
            .then(value => value.json())

    }



    async post () {

       return await fetch(this.url)
            .then(value => value.json())
    }
};