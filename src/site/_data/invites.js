const faunadb = require('faunadb');
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

module.exports = () => {
    return new Promise((resolve, reject) => {
        client.query(
            q.Paginate(q.Match(q.Ref("indexes/all_foos-invites")), {size: 100000})
        ).then(response=>{
            const invites = response.data;

            console.log('Invites to generate: ', invites.length);

            const getAll = invites.map(ref=>{
                return q.Get(ref);
            });
            return client.query(getAll).then(ret=>{
                resolve(ret);
            })
        }).catch(error=>{
            console.log("error", error);
            reject(error);
        });
    })
}
