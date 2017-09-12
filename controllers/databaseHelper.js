
var db = require('./configuration');



// Inserts emoji with its desciption

    function insertNewEmoji(emoji,about) {
        dataset = {
            emoji:  emoji,
            about:  about
        };

        db.get().query('INSERT INTO news SET ?', [dataset], function(err, result){
            if (err) callback(err);
            else  callback(null);
        });
    }