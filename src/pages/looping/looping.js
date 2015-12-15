var template = require('./looping.marko');

module.exports = function(req, res){
	template.render({
    colors: ["red", "green", "blue"],
    "settings" : {
        "foo" : "low",
        "bar" : "high",
        "baz" : "low"
    }
}, res);
};