const config = {
    "consumer_key": '3lfROq53hIE5wETr3rFFLOeD7',
    "consumer_secret": 'Yaq1iRP2PH2G2K7jdALOAenwo7KtLhABsGTOnkkU9A4x3ffEkZ',
    "access_token_key" : '500666008-4ZOHeIaliFe75zKGHvfTVZIMlyrrkmwf1Pht1yIY',
    "access_token_secret" : '0IVlzEVr5nPhkKW70BXiOIOfNIlUC0iFqAxgS254j4HR9'
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