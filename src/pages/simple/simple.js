var template = require('./simple.marko');

module.exports = function(req, res){
	template.render({
    name: "Mohit"
}, res);
};