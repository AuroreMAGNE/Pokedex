const client = require('../db_config');

const champsSouhaites = 'numero, nom';
const source = 'FROM pokemon P';
const conditionNumeroPokemon = 'where P.numero = $1';

// créer une fonction qui retourne le résultat
function getPokemonByNumero(req, res, next) {
    const { numero } = req.params;

    //REQUETER BDD pour requêter le nom
    client
        .query(
            `SELECT ${champsSouhaites} ${source} ${conditionNumeroPokemon}`,
            [numero]
        )
        .then((retourBDD) => {
            if (retourBDD.rows.length >= 1) {
                console.log(retourBDD);
                const { nom } = retourBDD.rows[0];
                res.render('detail', { numero, nom });
            } else next();
        })
        .catch((error) => {
            console.trace(error);
            next();
        });
}

function getAllPokemons(req, res, next) {
    client
        .query(`SELECT ${champsSouhaites} ${source}`)
        .then((retourBDD) => {
            res.render('home', { list: retourBDD.rows });
        })
        .catch((error) => {
            console.trace(error);
            next();
        });
}

module.exports = {
    getPokemonByNumero,
    getAllPokemons,
};
