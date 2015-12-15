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

    out.w('<p><strong>Sipmle text replacement </strong></p><p>Hello ' +
      escapeXml(data.name) +
      '</p><p>Hello ' +
      escapeXml(data.name) +
      '! You have ' +
      escapeXml(data.count) +
      ' new messages.</p><p>Hello ' +
      escapeXml(data.name.toUpperCase()) +
      '! You have ' +
      escapeXml(data.count) +
      ' new messages.</p><p>' +
      escapeXml(("Hello "+data.name).toUpperCase()) +
      '</p><p>' +
      escapeXml(("Hello and "+('Welcome '+data.name+'!')).toUpperCase()) +
      '</p></BODY></HTML>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);