function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      _____header_header_marko = __loadTemplate(require.resolve("./../header/header.marko"), require);

  return function render(data, out) {
    out.w('<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN"> <HTML><HEAD><TITLE>A Small Hello </TITLE></HEAD><BODY>');
    __helpers.i(out, _____header_header_marko, {});

    out.w('<div><p>Please select any type to see expample</p></div></BODY></HTML>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);