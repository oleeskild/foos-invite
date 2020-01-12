const querystring = require('querystring');

exports.handler = (event, context, callback) => {
    const data = querystring.parse(event.body);

    const invite = {data};

    return callback(null, {
        body: JSON.stringify(invite),
        statusCode:200
    })
}