var template = require('./conditionals.marko');

module.exports = function(req, res){
	template.render({
    age: 25
}, res);
};