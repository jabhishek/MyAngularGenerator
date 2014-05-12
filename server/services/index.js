(function (controllers) {
	console.log("index.js loaded");

    var notesApi = require("./notes");

    controllers.init = function (router) {
        // registering notes routes
        notesApi.init(router);
    };
})(module.exports)