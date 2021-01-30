import antlr4 from 'antlr4';
import ECMAScriptLexer from './lib/ECMAScriptLexer.js';
import ECMAScriptParser from './lib/ECMAScriptParser.js';
import  Visitor from './codegeneration/PythonGenerator.js'





const input = '{x: new Number( 1)}';

const chars = new antlr4.InputStream(input);
const lexer = new ECMAScriptLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ECMAScriptParser(tokens);
const tree = parser.expressionSequence();
console.log('JavaScript input:');
console.log(input);
console.log('Python output:');

const output = new  Visitor().start(tree);

console.log(output);
// console.log(tree.toStringTree(parser.ruleNames));

// const transpiler = require('bson-transpilers');
// import transpiler from 'bson-transpilers'
// const input = 'javascript';
// const output = 'java';

// const string =`
// { item: "book", qty: Int32(10), tags: ["red", "blank"], dim_cm: [14, Int32("81")] }`;

// try {
//   const compiledString = transpiler[input][output].compile(string);
//   console.log(compiledString);
//   // new Document("item", "book").append("qty", 10)
//   // .append("tags", Arrays.asList("red", "blank"))
//   // .append("dim_cm", Arrays.asList(14L, 81")))
// } catch (error) {
//   console.error(error);
// }


