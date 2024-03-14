
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,(function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map((function(e){return null}));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="<"===e.trim().charAt(0);return!t}function a(e,t){r.onError(e,n[t],t)}function c(e,t){var s=r.onSuccess(e,n[t],t);e=!1===s?"":s||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var i=document.createElement("a");n.forEach((function(e,t){if(i.setAttribute("href",e),i.href=String(i.href),Boolean(document.all&&!window.atob)&&i.host.split(":")[0]!==location.host.split(":")[0]){if(i.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){s(n.responseText)?c(n.responseText,t):a(n,t)},n.onerror=function(e){a(n,t)},setTimeout((function(){n.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),a(null,t)}else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&s(o.responseText)?c(o.responseText,t):a(o,t))},o.send()}}))}function n(e){var t=/\/\*[\s\S]+?\*\//g,n=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,s={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},a=Array.apply(null,s.rootElement.querySelectorAll(s.include)).filter((function(e){return t=e,r=s.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r})),c=Array.apply(null,Array(a.length)).map((function(e){return null}));function i(){if(-1===c.indexOf(null)){var e=c.join("");s.onComplete(e,c,a)}}function u(e,t,n,o){var a=s.onSuccess(e,n,o);(function e(t,n,o,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],u=l(t,o,i);u.rules.length?r(u.absoluteUrls,{onBeforeSend:function(e,t,r){s.onBeforeSend(e,n,t)},onSuccess:function(e,t,r){var o=s.onSuccess(e,n,t),a=l(e=!1===o?"":o||e,t,i);return a.rules.forEach((function(t,r){e=e.replace(t,a.absoluteRules[r])})),e},onError:function(r,s,l){c.push({xhr:r,url:s}),i.push(u.rules[l]),e(t,n,o,a,c,i)},onComplete:function(r){r.forEach((function(e,r){t=t.replace(u.rules[r],e)})),e(t,n,o,a,c,i)}}):a(t,c)})(e=void 0!==a&&!1===Boolean(a)?"":a||e,n,o,(function(e,r){null===c[t]&&(r.forEach((function(e){return s.onError(e.xhr,n,e.url)})),!s.filter||s.filter.test(e)?c[t]=e:c[t]="",i())}))}function l(e,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a={};return a.rules=(e.replace(t,"").match(n)||[]).filter((function(e){return-1===s.indexOf(e)})),a.urls=a.rules.map((function(e){return e.replace(n,"$1")})),a.absoluteUrls=a.urls.map((function(e){return o(e,r)})),a.absoluteRules=a.rules.map((function(e,t){var n=a.urls[t],s=o(a.absoluteUrls[t],r);return e.replace(n,s)})),a}a.length?a.forEach((function(e,t){var n=e.getAttribute("href"),a=e.getAttribute("rel"),l="LINK"===e.nodeName&&n&&a&&"stylesheet"===a.toLowerCase(),f="STYLE"===e.nodeName;if(l)r(n,{mimeType:"text/css",onBeforeSend:function(t,r,n){s.onBeforeSend(t,e,r)},onSuccess:function(r,s,a){var c=o(n);u(r,t,e,c)},onError:function(r,n,o){c[t]="",s.onError(r,e,n),i()}});else if(f){var d=e.textContent;s.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),u(d,t,e,location.href)}else c[t]="",i()})):s.onComplete("",[])}function o(e,t){var r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t||document.baseURI||(document.querySelector("base")||{}).href||location.href,o.href=e,o.href}var s=a;function a(e,t,r){e instanceof RegExp&&(e=c(e,r)),t instanceof RegExp&&(t=c(t,r));var n=i(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function c(e,t){var r=t.match(e);return r?r[0]:null}function i(e,t,r){var n,o,s,a,c,i=r.indexOf(e),u=r.indexOf(t,i+1),l=i;if(i>=0&&u>0){for(n=[],s=r.length;l>=0&&!c;)l==i?(n.push(l),i=r.indexOf(e,l+1)):1==n.length?c=[n.pop(),u]:((o=n.pop())<s&&(s=o,a=u),u=r.indexOf(t,l+1)),l=i<u&&i>=0?i:u;n.length&&(c=[s,a])}return c}function u(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,removeComments:!1},o=e({},n,r),a=[];function c(e){throw new Error("CSS parse error: ".concat(e))}function i(e){var r=e.exec(t);if(r)return t=t.slice(r[0].length),r}function u(){return i(/^{\s*/)}function l(){return i(/^}/)}function f(){i(/^\s*/)}function d(){if(f(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return c("end of comment is missing");var r=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:r}}}function p(){for(var e,t=[];e=d();)t.push(e);return o.removeComments?[]:t}function m(){for(f();"}"===t[0];)c("extra closing bracket");var e=i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"â€Œ")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function v(){if("@"===t[0])return k();i(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=i(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(r){if(r=r[0].trim(),!i(/^:\s*/))return c("property missing ':'");var n=i(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),o={type:"declaration",property:r.replace(e,""),value:n?n[0].replace(e,"").trim():""};return i(/^[;\s]*/),o}}function h(){if(!u())return c("missing '{'");for(var e,t=p();e=v();)t.push(e),t=t.concat(p());return l()?t:c("missing '}'")}function y(){f();for(var e,t=[];e=i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),i(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:h()}}function g(){var e=i(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=i(/^([-\w]+)\s*/)))return c("@keyframes missing name");var r,n=e[1];if(!u())return c("@keyframes missing '{'");for(var o=p();r=y();)o.push(r),o=o.concat(p());return l()?{type:"keyframes",name:n,vendor:t,keyframes:o}:c("@keyframes missing '}'")}}function b(){if(i(/^@page */))return{type:"page",selectors:m()||[],declarations:h()}}function S(){var e=i(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(e)return{type:"page-margin-box",name:"".concat(e[1],"-").concat(e[2])+(e[3]?"-".concat(e[3]):""),declarations:h()}}function E(){if(i(/^@font-face\s*/))return{type:"font-face",declarations:h()}}function w(){var e=i(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:_()}}function x(){if(i(/^@host\s*/))return{type:"host",rules:_()}}function C(){var e=i(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:_()}}function O(){var e=i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function A(){var e=i(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:_()}}function j(){var e=i(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function k(){if(f(),"@"===t[0]){var e=j()||E()||C()||g()||w()||A()||O()||x()||b()||S();if(e&&!o.preserveStatic){var r=!1;if(e.declarations)r=e.declarations.some((function(e){return/var\(/.test(e.value)}));else r=(e.keyframes||e.rules||[]).some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))}));return r?e:{}}return e}}function M(){if(!o.preserveStatic){var e=s("{","}",t);if(e){var r=/:(?:root|host)(?![.:#(])/.test(e.pre)&&/--\S*\s*:/.test(e.body),n=/var\(/.test(e.body);if(!r&&!n)return t=t.slice(e.end+1),{}}}var a=m()||[],i=o.preserveStatic?h():h().filter((function(e){var t=a.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r}));return a.length||c("selector missing"),{type:"rule",selectors:a,declarations:i}}function _(e){if(!e&&!u())return c("missing '{'");for(var r,n=p();t.length&&(e||"}"!==t[0])&&(r=k()||M());)r.type&&n.push(r),n=n.concat(p());return e||l()?n:c("missing '}'")}return{type:"stylesheet",stylesheet:{rules:_(!0),errors:a}}}function l(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={parseHost:!1,store:{},onWarning:function(){}},o=e({},n,r),s=new RegExp(":".concat(o.parseHost?"host":"root","$"));return"string"==typeof t&&(t=u(t,o)),t.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return s.test(e)}))&&e.declarations.forEach((function(e,t){var r=e.property,n=e.value;r&&0===r.indexOf("--")&&(o.store[r]=n)}))})),o.store}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},"page-margin-box":function(e){return"@"+e.name+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",s=0;s<e.length;s++){var a=e[s];r&&r(a);var c=n[a.type](a);c&&(o+=c,c.length&&a.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}function d(e,t){e.rules.forEach((function(r){r.rules?d(r,t):r.keyframes?r.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,r)})):r.declarations&&t(r.declarations,e)}))}a.range=i;function p(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},o=e({},n,r);return"string"==typeof t&&(t=u(t,o)),d(t.stylesheet,(function(e,t){for(var r=0;r<e.length;r++){var n=e[r],s=n.type,a=n.property,c=n.value;if("declaration"===s)if(o.preserveVars||!a||0!==a.indexOf("--")){if(-1!==c.indexOf("var(")){var i=v(c,o);i!==n.value&&(i=m(i),o.preserveVars?(e.splice(r,0,{type:s,property:a,value:i}),r++):n.value=i)}}else e.splice(r,1),r--}})),f(t)}function m(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach((function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)})),e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=s("(",")",e);function o(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],s=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,a=s||(o?String(o):void 0),c=r||e;return s||t.onWarning('variable "'.concat(n,'" is undefined')),a&&"undefined"!==a&&a.length>0?v(a,t,c):"var(".concat(c,")")}if(n){if("var"===n.pre.slice(-3)){var a=0===n.body.trim().length;return a?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+o(n.body)+v(n.post,t)}return n.pre+"(".concat(v(n.body,t),")")+v(n.post,t)}return-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e}var h="undefined"!=typeof window,y=h&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),g={group:0,job:0},b={rootElement:h?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onWarning:function(){},onError:function(){},onSuccess:function(){},onComplete:function(){}},S={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},E={dom:{},job:{},user:{}},w=!1,x=null,C=0,O=null,A=!1;function j(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o="cssVars(): ",s=e({},b,r);function a(e,t,r,n){!s.silent&&window.console&&console.error("".concat(o).concat(e,"\n"),t),s.onError(e,t,r,n)}function c(e){!s.silent&&window.console&&console.warn("".concat(o).concat(e)),s.onWarning(e)}if(h){if(s.watch)return s.watch=b.watch,k(s),void j(s);if(!1===s.watch&&x&&(x.disconnect(),x=null),!s.__benchmark){if(w===s.rootElement)return void M(r);if(s.__benchmark=V(),s.exclude=[x?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',s.exclude].filter((function(e){return e})).join(","),s.variables=R(s.variables),!x){var i=Array.apply(null,s.rootElement.querySelectorAll('[data-cssvars="out"]'));if(i.forEach((function(e){var t=e.getAttribute("data-cssvars-group");(t?s.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]')):null)||e.parentNode.removeChild(e)})),C){var d=s.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');d.length<C&&(C=d.length,E.dom={})}}}if("loading"!==document.readyState)if(y&&s.onlyLegacy){if(s.updateDOM){var m=s.rootElement.host||(s.rootElement===document?document.documentElement:s.rootElement);Object.keys(s.variables).forEach((function(e){m.style.setProperty(e,s.variables[e])}))}}else!A&&(s.shadowDOM||s.rootElement.shadowRoot||s.rootElement.host)?n({rootElement:b.rootElement,include:b.include,exclude:s.exclude,onSuccess:function(e,t,r){return(e=((e=e.replace(S.cssComments,"").replace(S.cssMediaQueries,"")).match(S.cssVarDeclRules)||[]).join(""))||!1},onComplete:function(e,t,r){l(e,{store:E.dom,onWarning:c}),A=!0,j(s)}}):(w=s.rootElement,n({rootElement:s.rootElement,include:s.include,exclude:s.exclude,onBeforeSend:s.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||L(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");a("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,r){var n=s.onSuccess(e,t,r);return e=void 0!==n&&!1===Boolean(n)?"":n||e,s.updateURLs&&(e=T(e,r)),e},onComplete:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=e({},E.dom,E.user);if(E.job={},o.forEach((function(e,t){if(S.cssVars.test(n[t]))try{var r=u(n[t],{preserveStatic:s.preserveStatic,removeComments:!0});l(r,{parseHost:Boolean(s.rootElement.host),store:E.dom,onWarning:c}),e.__cssVars={tree:r}}catch(t){a(t.message,e)}})),e(E.job,E.dom),s.updateDOM?(e(E.user,s.variables),e(E.job,E.user)):(e(E.job,E.user,s.variables),e(i,s.variables)),g.job>0&&Boolean(Object.keys(E.job).length>Object.keys(i).length||Boolean(Object.keys(i).length&&Object.keys(E.job).some((function(e){return E.job[e]!==i[e]})))))B(s.rootElement),j(s);else{var d=[],m=[],v=!1;if(s.updateDOM&&g.job++,o.forEach((function(t){var r=!t.__cssVars;if(t.__cssVars)try{p(t.__cssVars.tree,e({},s,{variables:E.job,onWarning:c}));var n=f(t.__cssVars.tree);if(s.updateDOM){if(t.getAttribute("data-cssvars")||t.setAttribute("data-cssvars","src"),n.length){var o=t.getAttribute("data-cssvars-group")||++g.group,i=n.replace(/\s/g,""),u=s.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(o,'"]'))||document.createElement("style");v=v||S.cssKeyframes.test(n),u.hasAttribute("data-cssvars")||u.setAttribute("data-cssvars","out"),i===t.textContent.replace(/\s/g,"")?(r=!0,u&&u.parentNode&&(t.removeAttribute("data-cssvars-group"),u.parentNode.removeChild(u))):i!==u.textContent.replace(/\s/g,"")&&([t,u].forEach((function(e){e.setAttribute("data-cssvars-job",g.job),e.setAttribute("data-cssvars-group",o)})),u.textContent=n,d.push(n),m.push(u),u.parentNode||t.parentNode.insertBefore(u,t.nextSibling))}}else t.textContent.replace(/\s/g,"")!==n&&d.push(n)}catch(e){a(e.message,t)}r&&t.setAttribute("data-cssvars","skip"),t.hasAttribute("data-cssvars-job")||t.setAttribute("data-cssvars-job",g.job)})),C=s.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,s.shadowDOM)for(var h,y=[s.rootElement].concat(t(s.rootElement.querySelectorAll("*"))),b=0;h=y[b];++b)if(h.shadowRoot&&h.shadowRoot.querySelector("style")){var x=e({},s,{rootElement:h.shadowRoot});j(x)}s.updateDOM&&v&&_(s.rootElement),w=!1,s.onComplete(d.join(""),m,JSON.parse(JSON.stringify(E.job)),V()-s.__benchmark)}}}));else document.addEventListener("DOMContentLoaded",(function e(t){j(r),document.removeEventListener("DOMContentLoaded",e)}))}}function k(e){function t(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")&&!e.disabled}window.MutationObserver&&(x&&(x.disconnect(),x=null),(x=new MutationObserver((function(r){r.some((function(r){var n,o=!1;return"attributes"===r.type?o=t(r.target):"childList"===r.type&&(n=r.addedNodes,o=Array.apply(null,n).some((function(e){var r=1===e.nodeType&&e.hasAttribute("data-cssvars"),n=function(e){return"STYLE"===e.tagName&&!e.disabled}(e)&&S.cssVars.test(e.textContent);return!r&&(t(e)||n)}))||function(t){return Array.apply(null,t).some((function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),s=o;if(o||n){var a=t.getAttribute("data-cssvars-group"),c=e.rootElement.querySelector('[data-cssvars-group="'.concat(a,'"]'));o&&(B(e.rootElement),E.dom={}),c&&c.parentNode.removeChild(c)}return s}))}(r.removedNodes)),o}))&&j(e)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(O),O=setTimeout((function(){e.__benchmark=null,j(e)}),t)}function _(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o=0,s=r.length;o<s;o++){var a=r[o];"none"!==getComputedStyle(a)[t]&&(a.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",n.push(a))}document.body.offsetHeight;for(var c=0,i=n.length;c<i;c++){var u=n[c].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}function T(e,t){return(e.replace(S.cssComments,"").match(S.cssUrls)||[]).forEach((function(r){var n=r.replace(S.cssUrls,"$1"),o=L(n,t);e=e.replace(r,r.replace(n,o))})),e}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r}),{})}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function V(){return h&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function B(e){Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach((function(e){return e.setAttribute("data-cssvars","")}))}return j.reset=function(){for(var e in g.job=0,g.group=0,w=!1,x&&(x.disconnect(),x=null),C=0,O=null,A=!1,E)E[e]={}},j}));cssVars({rootElement:document,shadowDOM:!1,include:"link[rel=stylesheet],style",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:!1});