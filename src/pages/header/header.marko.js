function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div><H1>Welcome on Marko Board</H1><div><p><Button><a href="/">Home</a></Button><Button><a href="/simple">Simple</a></Button><Button><a href="/looping">Looping</a></Button><Button><a href="/conditionals">Conditionals</a></Button></p></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);