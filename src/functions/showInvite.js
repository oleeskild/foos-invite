
const faunadb = require('faunadb');
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
    const path = event.queryStringParameters.id.replace("/", "");

    client.query(
        q.Get(q.Match(q.Index("invite_by_path"), path))
    ).then(response=>{
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response.data)
        });
    }).catch(error=>{
        console.log('Error:', error);
        return callback(null, {
            body: JSON.stringify(error),
            statusCode: 301,
            headers: {
                Location: '/noinviteforyou/index.html'
            }
        })
    })
}