const Users = require("../models/usersModel");

class UsersController {

    static async addUsers(req, res) {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const result = await Users.singUp(username, email, password);
        if (result)
            res.json({ msg: "Ajout avec succes" });
        else
            res.json({ msg: "problem d'ajout" });
    }


    static async Authentification(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const result = await Users.Login(email, password);
            if (result && result.length > 0) {
                res.send(result);
            } else {
                res.json({ msg: "fausse information" });
            }
        } catch (error) {
            res.json({ msg: "Erreur interne", error: error.message });
            console.log(error);
        }
    }

    static async getUsersC(req, res) {
        try {
            const result = await Users.getUsers();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

}
module.exports = UsersController;