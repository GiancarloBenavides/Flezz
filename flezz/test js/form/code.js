$(document).ready(function () {
    "use strict";
    var setHtml, setCss, setJs, html, css, js, myCodeMirrorHTML, myCodeMirrorCSS, myCodeMirrorJS;
    setHtml = {
        value: '</html>\n<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n</head>\n<body>\n</body>\n</html>',
        mode:  "htmlmixed"
    };
    setCss = {
        value: '.superbox-show {\ntext-align: center;\nposition: relative;\nbackground: #333333;\nwidth: calc(100% - 92px);\nfloat: right;\npadding: 40px;}\n',
        mode:  "css"
    };
    setJs = {
        value: "function myScript(){return 100;}\n",
        mode:  "javascript",
    };
    html = document.getElementById("codemirror-html");
    css = document.getElementById("codemirror-css");
    js = document.getElementById("codemirror-js");
    //myCodeMirrorHTML = CodeMirror(html, setHtml);
    //myCodeMirrorCSS = CodeMirror(css, setCss);
    //myCodeMirrorJS = CodeMirror(js, setJs);
    myCodeMirrorJS = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true
    });
    myCodeMirrorJS.setOption("theme", "twilight");
});