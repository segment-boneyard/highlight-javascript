
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Plugin to highlight Javascript code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight){
  highlight
    .language('javascript', grammar)
    .language('js', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Booleans.
 */

grammar.boolean = /\b(true|false)\b/;

/**
 * Booleans.
 */

grammar.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Functions.
 */

grammar.function = {
  pattern: /(\w+)\(/,
  children: {
    punctuation: /\(/
  }
};

/**
 * Numbers.
 */

grammar.number = /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/;

/**
 * Strings.
 */

grammar.string = /(("|')(\\?.)*?\2)/;

/**
 * Keywords.
 */

grammar.keyword = /\b(break|catch|continue|do|else|finally|for|function|if|in|instanceof|let|new|null|return|this|self|throw|try|typeof|var|while|with|yield)\b/;

/**
 * Operators.
 */

grammar.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}[\];(),.:]/;