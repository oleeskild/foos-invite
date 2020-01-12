import querystring from 'querystring';
import shortid from 'shortid';
import faunadb from 'faunadb';

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
                body: JSON.stringify(invite),
                statusCode: 200
            })
        })

};