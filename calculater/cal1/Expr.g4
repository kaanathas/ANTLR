grammar Expr;

prog: stat+ ;

stat: expr NEWLINE          #test
    | ID '=' expr NEWLINE   #kaana
    | NEWLINE               #mathu
    ;

expr: expr ('*' | '/') expr
    | expr ('+' | '-') expr
    | INT 
    | ID
    | '(' expr ')'
    ;

ID : [a-zA-Z]+ ;
INT: [0-9]+ ;
NEWLINE: '\r'? '\n' ;
WS : [\t]+ -> skip ;

