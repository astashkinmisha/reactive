export class UserServices {
    url = 'https://jsonplaceholder.typicode.com/users'

   async getAllUsers () {
         return  await fetch(this.url)
            .then(value => value.json())
    }

async getUser (id) {
        return await fetch(`${this.url}/${id}`);
    }
}