function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      _____header_header_marko = __loadTemplate(require.resolve("./../header/header.marko"), require),
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN"> <HTML><HEAD><TITLE>Marko Demos</TITLE></HEAD><BODY>');
    __helpers.i(out, _____header_header_marko, {});

    out.w('<p>Hello ' +
      escapeXml(data.name) +
      '</p></BODY></HTML>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);