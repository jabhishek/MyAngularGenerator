(function (database) {
    var mongodb = require("mongodb");
    var connection = require("./connection");
    // theBoard is the name of the database. 
    // If mongoDb doesn't find the database, it will create it for you.
    var mongoUrl = connection.connectionString;
    var theDb = null;
    database.getDb = function(next) {
        if (!theDb) {
            // connect to database
            mongodb.MongoClient.connect(mongoUrl, function(err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db,
                        notes: db.collection("notes")
                };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }

    }

})(module.exports)