const db = require("../connectionDB/db");

class Users {

    static async singUp(identifient, password) {
        return new Promise(resolve => {
            db.query("INSERT INTO users(identifient, passWord) VALUES(?,?)", [identifient, password], (err, result) => {
                if (!err)
                    resolve(result);
            })
        })
    };

    static async Login(username, password) {
        return new Promise(resolve => {
            db.query("SELECT * FROM citizen.user WHERE username=? AND passWord=?", [username, password], (err, result) => {
                if (!err)
                    resolve(result);
            });
        });
    }
    static async getUsers() {
        return new Promise(resolve => {
            db.query("SELECT identifient, passWord FROM users", [], (err, result) => {
                if (!err)
                    resolve(result);
            })
        })
    }

}
module.exports = Users;