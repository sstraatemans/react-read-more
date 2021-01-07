import React,{useEffect,useRef,useState}from'react';var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
var classnames = createCommonjsModule(function (module) {
(function () {
	var hasOwn = {}.hasOwnProperty;
	function classNames () {
		var classes = [];
		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;
			var argType = typeof arg;
			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}
		return classes.join(' ');
	}
	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});var useMaxCharacters = function (maxCharacters, isOpen, children, setText) {
    useEffect(function () {
        if (maxCharacters) {
            if (isOpen) {
                setText(children);
            }
            else {
                setText(children.trim().substring(0, maxCharacters));
            }
        }
    }, [maxCharacters, isOpen]);
};var useMaxWords = function (maxWords, isOpen, children, setText) {
    useEffect(function () {
        if (maxWords) {
            if (isOpen) {
                setText(children);
            }
            else {
                var wordsArray = children
                    .trim()
                    .split(' ')
                    .filter(function (c) { return c !== ''; });
                setText(wordsArray.slice(0, maxWords).join(' ').trim());
            }
        }
    }, [maxWords, isOpen, children]);
};function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject;var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;var now = function() {
  return _root.Date.now();
};
var now_1 = now;var Symbol = _root.Symbol;
var _Symbol = Symbol;var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var _getRawTag = getRawTag;var objectProto$1 = Object.prototype;
var nativeObjectToString$1 = objectProto$1.toString;
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}
var _objectToString = objectToString;var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}
var _baseGetTag = baseGetTag;function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
var isObjectLike_1 = isObjectLike;var symbolTag = '[object Symbol]';
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}
var isSymbol_1 = isSymbol;var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}
var toNumber_1 = toNumber;var FUNC_ERROR_TEXT = 'Expected a function';
var nativeMax = Math.max,
    nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }
  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }
  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;var useMaxLines = function (maxLines, isOpen, children, setText) {
    var readMoreRef = useRef(null);
    var buttonRef = useRef(null);
    var getButtonWidth = function () { var _a, _b; return (_b = (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 0; };
    var getClientWidth = function () { var _a, _b; return (_b = (_a = readMoreRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0; };
    var createMaxLines = function () {
        var _a, _b;
        var ruler = document.createElement('div');
        ruler.style.width = 'auto';
        ruler.style.position = 'absolute';
        ruler.style.whiteSpace = 'nowrap';
        (_a = readMoreRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(ruler);
        var line = '';
        var wordArray = children
            .trim()
            .split(' ')
            .filter(function (c) { return c !== ''; });
        // you have to check by line, because when a word is to long for that line, all characters will jump to next line
        // if checking the last line, we need to take into account the width of the button
        for (var j = 0; j < maxLines; j += 1) {
            for (var i = 0; i < wordArray.length; i += 1) {
                var word = wordArray.shift();
                if (word) {
                    var previousLine = ruler.innerHTML;
                    if (i === 0 && j === 0) {
                        ruler.innerHTML += word;
                    }
                    else {
                        ruler.innerHTML += " " + word;
                    }
                    // if the line is too long, use the previousline and break
                    // and add the last line back to the wordArray;
                    if ((j < maxLines - 1 && ruler.offsetWidth > getClientWidth()) ||
                        (j === maxLines - 1 &&
                            ruler.offsetWidth > getClientWidth() - getButtonWidth())) {
                        ruler.innerHTML = previousLine;
                        wordArray.unshift(word);
                        break;
                    }
                }
            }
            line += ruler.innerHTML;
            ruler.innerHTML = '';
        }
        setText(line);
        (_b = ruler.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(ruler);
    };
    useEffect(function () {
        if (maxLines) {
            window.addEventListener('resize', debounce_1(createMaxLines, 300));
            if (isOpen) {
                setText(children);
            }
            else {
                createMaxLines();
            }
        }
        return function () {
            if (maxLines)
                window.removeEventListener('resize', debounce_1(createMaxLines, 300));
        };
    }, [maxLines, isOpen]);
    return {
        readMoreRef: readMoreRef,
        buttonRef: buttonRef,
    };
};function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = ".button {\n  border: 0;\n  background-color: transparent;\n  text-decoration: underline;\n  cursor: pointer; }\n  .button::first-letter {\n    text-transform: uppercase; }\n  .button:hover {\n    text-decoration: none; }\n";
styleInject(css_248z);var isAllText = function (truncatedText, text) {
    return (truncatedText &&
        truncatedText
            .trim()
            .split('')
            .filter(function (c) { return c !== ' '; }).length ===
            text
                .trim()
                .split('')
                .filter(function (c) { return c !== ' '; }).length);
};var ReadMore = function (_a) {
    var children = _a.children, _b = _a.readMoreLabel, readMoreLabel = _b === void 0 ? 'read more' : _b, _c = _a.readLessLabel, readLessLabel = _c === void 0 ? 'read less' : _c, maxCharacters = _a.maxCharacters, maxWords = _a.maxWords, maxLines = _a.maxLines, _d = _a.ellipsis, ellipsis = _d === void 0 ? '...' : _d, buttonClassName = _a.buttonClassName;
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(''), text = _f[0], setText = _f[1];
    var _g = useMaxLines(maxLines, isOpen, children, setText), readMoreRef = _g.readMoreRef, buttonRef = _g.buttonRef;
    useMaxCharacters(maxCharacters, isOpen, children, setText);
    useMaxWords(maxWords, isOpen, children, setText);
    useEffect(function () {
        var _a;
        if (!isOpen && isAllText(text, children)) {
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.parentElement.removeChild(buttonRef.current);
        }
    }, [text, maxLines, maxWords, maxCharacters]);
    var handleClick = function () {
        setIsOpen(function (v) { return !v; });
    };
    var getLabel = isOpen ? readLessLabel : readMoreLabel;
    return (React.createElement("div", { ref: readMoreRef, "data-testid": "wrapper" },
        text,
        React.createElement("span", { ref: buttonRef, "data-testid": "button-wrapper" },
            ellipsis,
            React.createElement("button", { "data-testid": "button", className: classnames('button', buttonClassName), type: "button", onClick: handleClick }, getLabel))));
};export default ReadMore;