(function (notesApi) {
	console.log("notes.js loaded");
    notesApi.init = function (router) {
        router.get('/', function(req, res) {
		    res.json({ message: 'hooray! welcome to my api!' });   
		});
    };
})(module.exports)