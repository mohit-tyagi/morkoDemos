function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      _____header_header_marko = __loadTemplate(require.resolve("./../header/header.marko"), require),
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      forEachWithStatusVar = __helpers.fv,
      forEachProp = __helpers.fp;

  return function render(data, out) {
    out.w('<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN"> <HTML><HEAD><TITLE>Marko Demos</TITLE></HEAD><BODY>');
    __helpers.i(out, _____header_header_marko, {});

    out.w('<p> <strong>Simple Looping</strong></p><ul>');

    forEach(data.colors, function(color) {
      out.w('<li style="color: ' +
        escapeXmlAttr(color) +
        '">' +
        escapeXml(color) +
        '</li>');
    });

    out.w('</ul><ul>');

    forEach(data.colors, function(color) {
      out.w('<li style="color: ' +
        escapeXmlAttr(color) +
        '">' +
        escapeXml(color) +
        '</li>');
    });

    out.w('</ul><ul>');

    forEach(['dog', 'cat', 'duck'], function(animal) {
      out.w('<li>' +
        escapeXml(animal) +
        '</li>');
    });

    out.w('</ul><p> <strong>Loop Status Variable eg. isFirst, isLast</strong></p><ul>');

    forEachWithStatusVar(data.colors, function(color,loop) {
      out.w('<li>' +
        escapeXml(loop.getIndex()+1) +
        ') ' +
        escapeXml(color));

      if (loop.isFirst()) {
        out.w(' - FIRST');
      }

      if (loop.isLast()) {
        out.w(' - LAST');
      }

      out.w('</li>');
    });

    out.w('</ul><p> <strong>Loop Separator by \',\'</strong></p>');

    forEachWithStatusVar(data.colors, function(color,__loop) {
      out.w(escapeXml(color));

      if (!__loop.isLast()) {
        out.w(", ");
      }
    });

    out.w('<div>');

    forEachWithStatusVar(data.colors, function(color,__loop) {
      out.w('<span>' +
        escapeXml(color) +
        '</span>');

      if (!__loop.isLast()) {
        out.w(', ');
      }
    });

    out.w('</div><p> <strong>Property Looping (from JSON)</strong></p><ul>');

    forEachProp(data.settings, function(name,value) {
      out.w('<li><b>' +
        escapeXml(name) +
        '</b>: ' +
        escapeXml(value) +
        '</li>');
    });

    out.w('</ul><ul>');

    forEachProp(data.settings, function(name,value) {
      out.w('<li><b>' +
        escapeXml(name) +
        '</b>: ' +
        escapeXml(value) +
        '</li>');
    });

    out.w('</ul></BODY></HTML>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);