/**
 * Integrando a aplicação com o NeDB para salvar os dados via
 */

let NeDB = require('nedb');
let db = new NeDB({
    filename: 'user.db',
    autoload: true
});


module.exports = (app) => {
    let route = app.route('/users');
    let routeAdm = app.route('/users/admin');
    let routeId = app.route('/users/:id');

    route.get((req, res) => {

        //Recuperando os dados od usuários via BD.
        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json({
                    users
                });
            }
        });

    });

    /**
     * Filtrando por um usuári especifico
     * metodo findOne() localiza apenas um registro.
     */
    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(users);
            }
        });


    });
    /**
     * Editando os dados de um usuário.
     */
    routeId.put((req, res) => {

        db.update({ _id: req.params.id }, req.body, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });


    });

    /**
     * Excluindo os dados de um usuário.
     */
    routeId.delete((req, res) => {

        db.remove({ _id: req.params.id }, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        });
    });

    route.get((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            users: [{
                name: 'Marcos Artimundo',
                email: 'martimundo@gmail.com',
                id: 2

            }]
        });

    })
    route.post((req, res) => {

        //o bady vai pegar os dados do formulário
        //res.json(req.body);

        //salvando dados no db...
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);

            } else {
                res.status(200).json(user);
            }
        });

    });
};