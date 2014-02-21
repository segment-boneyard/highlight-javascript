
var assert = require('assert');
var Highlight = require('highlight');
var javascript = require('highlight-javascript');

var h;

describe('highlight-javascript', function(){
  beforeEach(function(){
    h = Highlight().use(javascript);
  });

  it('should expose a plugin function', function(){
    assert.equal('function', typeof javascript);
  });

  it('should match booleans', function(){
    test('true', '<span class="Highlight-boolean">true</span>');
    test('false', '<span class="Highlight-boolean">false</span>');
  });

  it('should match comments', function(){
    test('a // comment', 'a <span class="Highlight-comment">// comment</span>');
    test('a /* comment \n across lines */', 'a <span class="Highlight-comment">/* comment \n across lines */</span>');
  });

  it('should match functions', function(){
    test('do()', ''
      + '<span class="Highlight-function">do'
      + '<span class="Highlight-punctuation">(</span>'
      + '</span>'
      + '<span class="Highlight-punctuation">)</span>');
  });

  it('should match numbers', function(){
    test('42', '<span class="Highlight-number">42</span>');
    test('8.3', '<span class="Highlight-number">8.3</span>');
    test('-8', '<span class="Highlight-operator">-</span><span class="Highlight-number">8</span>');
    test('NaN', '<span class="Highlight-number">NaN</span>');
    test('Infinity', '<span class="Highlight-number">Infinity</span>');
  });

  it('should match strings', function(){
    test('"string"', '<span class="Highlight-string">&quot;string&quot;</span>');
    test('\'string\'', '<span class="Highlight-string">&#39;string&#39;</span>');
  });

  it('should match keywords', function(){
    test('if', '<span class="Highlight-keyword">if</span>');
    test('new', '<span class="Highlight-keyword">new</span>');
    test('yield', '<span class="Highlight-keyword">yield</span>');
  });

  it('should match operators', function(){
    test('+', '<span class="Highlight-operator">+</span>');
    test('===', '<span class="Highlight-operator">===</span>');
  });

  it('should match punctuation', function(){
    test('.', '<span class="Highlight-punctuation">.</span>');
  });

  it('should match a complex example', function(){
    var js = ''
      + 'function fixture(arg, thing){\n'
      + '  var life = 42;\n'
      + '  var everything = Infinity;\n'
      + '  var ret = \'the meaning of life is: \' + life; // or so we think\n'
      + '  if (everything) {\n'
      + '    return ret;\n'
      + '  }\n'
      + '}';

    test(js, ''
      + '<span class="Highlight-keyword">function</span>'
      + ' '
      + '<span class="Highlight-function">fixture<span class="Highlight-punctuation">(</span></span>'
      + 'arg'
      + '<span class="Highlight-punctuation">,</span>'
      + ' thing'
      + '<span class="Highlight-punctuation">)</span>'
      + '<span class="Highlight-punctuation">{</span>'
      + '\n  '
      + '<span class="Highlight-keyword">var</span>'
      + ' life '
      + '<span class="Highlight-operator">=</span>'
      + ' '
      + '<span class="Highlight-number">42</span>'
      + '<span class="Highlight-punctuation">;</span>'
      + '\n  '
      + '<span class="Highlight-keyword">var</span>'
      + ' everything '
      + '<span class="Highlight-operator">=</span>'
      + ' '
      + '<span class="Highlight-number">Infinity</span>'
      + '<span class="Highlight-punctuation">;</span>'
      + '\n  '
      + '<span class="Highlight-keyword">var</span>'
      + ' ret '
      + '<span class="Highlight-operator">=</span>'
      + ' '
      + '<span class="Highlight-string">&#39;the meaning of life is: &#39;</span>'
      + ' '
      + '<span class="Highlight-operator">+</span>'
      + ' life'
      + '<span class="Highlight-punctuation">;</span>'
      + ' '
      + '<span class="Highlight-comment">// or so we think</span>'
      + '\n  '
      + '<span class="Highlight-keyword">if</span>'
      + ' '
      + '<span class="Highlight-punctuation">(</span>'
      + 'everything'
      + '<span class="Highlight-punctuation">)</span>'
      + ' '
      + '<span class="Highlight-punctuation">{</span>'
      + '\n    '
      + '<span class="Highlight-keyword">return</span>'
      + ' ret'
      + '<span class="Highlight-punctuation">;</span>'
      + '\n  '
      + '<span class="Highlight-punctuation">}</span>'
      + '\n'
      + '<span class="Highlight-punctuation">}</span>');
  });
});

/**
 * Test convenience.
 *
 * @param {String} input
 * @param {String} output
 */

function test(input, output){
  var code = h.string(input, 'javascript');
  assert.equal(code, output);
}