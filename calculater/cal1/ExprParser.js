// Generated from Expr.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ExprVisitor from './ExprVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004 \n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004",
    "+\u000b\u0004\u0003\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006",
    "\u0002\u0004\u0003\u0002\u0004\u0005\u0003\u0002\u0006\u0007\u00020",
    "\u0002\t\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002",
    "\u0006\u001f\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b",
    "\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003",
    "\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002",
    "\u0002\u0002\r\u000e\u0005\u0006\u0004\u0002\u000e\u000f\u0007\f\u0002",
    "\u0002\u000f\u0017\u0003\u0002\u0002\u0002\u0010\u0011\u0007\n\u0002",
    "\u0002\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0013\u0005\u0006\u0004",
    "\u0002\u0013\u0014\u0007\f\u0002\u0002\u0014\u0017\u0003\u0002\u0002",
    "\u0002\u0015\u0017\u0007\f\u0002\u0002\u0016\r\u0003\u0002\u0002\u0002",
    "\u0016\u0010\u0003\u0002\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002",
    "\u0017\u0005\u0003\u0002\u0002\u0002\u0018\u0019\b\u0004\u0001\u0002",
    "\u0019 \u0007\u000b\u0002\u0002\u001a \u0007\n\u0002\u0002\u001b\u001c",
    "\u0007\b\u0002\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d\u001e",
    "\u0007\t\u0002\u0002\u001e \u0003\u0002\u0002\u0002\u001f\u0018\u0003",
    "\u0002\u0002\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003",
    "\u0002\u0002\u0002 )\u0003\u0002\u0002\u0002!\"\f\u0007\u0002\u0002",
    "\"#\t\u0002\u0002\u0002#(\u0005\u0006\u0004\b$%\f\u0006\u0002\u0002",
    "%&\t\u0003\u0002\u0002&(\u0005\u0006\u0004\u0007\'!\u0003\u0002\u0002",
    "\u0002\'$\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002\u0007\u000b\u0016\u001f\')"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExprParser extends antlr4.Parser {

    static grammarFileName = "Expr.g4";
    static literalNames = [ null, "'='", "'*'", "'/'", "'+'", "'-'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ID", "INT", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExprParser.ruleNames;
        this.literalNames = ExprParser.literalNames;
        this.symbolicNames = ExprParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExprParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.stat();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__5) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.NEWLINE))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExprParser.RULE_stat);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TestContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 11;
	            this.expr(0);
	            this.state = 12;
	            this.match(ExprParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new KaanaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 14;
	            this.match(ExprParser.ID);
	            this.state = 15;
	            this.match(ExprParser.T__0);
	            this.state = 16;
	            this.expr(0);
	            this.state = 17;
	            this.match(ExprParser.NEWLINE);
	            break;

	        case 3:
	            localctx = new MathuContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 19;
	            this.match(ExprParser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, ExprParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExprParser.INT:
	            this.state = 23;
	            this.match(ExprParser.INT);
	            break;
	        case ExprParser.ID:
	            this.state = 24;
	            this.match(ExprParser.ID);
	            break;
	        case ExprParser.T__5:
	            this.state = 25;
	            this.match(ExprParser.T__5);
	            this.state = 26;
	            this.expr(0);
	            this.state = 27;
	            this.match(ExprParser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 37;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 31;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 32;
	                    _la = this._input.LA(1);
	                    if(!(_la===ExprParser.T__1 || _la===ExprParser.T__2)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 33;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 34;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 35;
	                    _la = this._input.LA(1);
	                    if(!(_la===ExprParser.T__3 || _la===ExprParser.T__4)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 36;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.ID = 8;
ExprParser.INT = 9;
ExprParser.NEWLINE = 10;
ExprParser.WS = 11;

ExprParser.RULE_prog = 0;
ExprParser.RULE_stat = 1;
ExprParser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MathuContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(ExprParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitMathu(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.MathuContext = MathuContext;

class TestContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(ExprParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.TestContext = TestContext;

class KaanaContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ExprParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(ExprParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitKaana(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.KaanaContext = KaanaContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_expr;
    }

	INT() {
	    return this.getToken(ExprParser.INT, 0);
	};

	ID() {
	    return this.getToken(ExprParser.ID, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ExprParser.ProgContext = ProgContext; 
ExprParser.StatContext = StatContext; 
ExprParser.ExprContext = ExprContext; 
