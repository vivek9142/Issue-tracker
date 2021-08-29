import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class UserApi {
    static getAllUsers() {
        return axios.get("http://localhost:3001/users"); // async call will return promise
    }

    static saveUser(user) {
        // Only for simulation purpose      
        if (user.name.length < 1) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject("User name must be at least 1 character.");
                }, 1000);
            });
        }

        user.id = uuidv4();
        return axios.post("http://localhost:3001/users", user);
    }

    static deleteUser(id) {
        return axios.delete("http://localhost:3001/users/" + id);
    }
}

