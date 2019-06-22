const config = {
    "consumer_key": 'xxxx',
    "consumer_secret": 'xxxxxx',
    "access_token_key" : '500666008-xxxxxxxxx',
    "access_token_secret" : 'xxxxxxxxxxx'
};

const Twitter = require('twitter');
const client = new Twitter(config);

module.exports = {
    getTweets : (query) => {

        var params = { q: query, count: 1};

        var tweets;

        return new Promise( function( resolve, reject )
        {
            client.get('search/tweets/', params, function(error, tweets, response){
                if (!error) {
                    var statuses = tweets.statuses;
                    return resolve(statuses);
                }
                else{
                    console.log(error);
                    reject(error);
                }
            })
        });

    }
}