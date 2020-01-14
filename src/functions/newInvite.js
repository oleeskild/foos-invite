const querystring = require('querystring');
const shortid = require('shortid');
const faunadb = require('faunadb');
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
    const data = querystring.parse(event.body);

    const uniquePath = shortid.generate();
    data.invitePath = uniquePath;
    const invite = { data };


    client.query(q.Create(q.Collection('foos-invites'), invite))
        .then(response => {
            console.log('success', response);
            return callback(null, {
                body: JSON.stringify(response),
                statusCode: 302,
                headers: {
                    Location: `/invite/${uniquePath}`
                }
            })
        })
        .catch(error=>{
            console.log('error', error);
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            });
        })

};