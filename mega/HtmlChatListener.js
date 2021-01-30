import antlr4 from 'antlr4';
import ChatLexer from './ChatLexer.js';
import ChatParser from './ChatParser.js';
import ChatListener from './ChatListener.js';

export default class HtmlChatListener extends ChatListener {

    constructor(res) {
        super();
 this.Res = res;
    }

    enterName(ctx) {
        this.Res.write("<strong>");
   
        }

  exitName(ctx) {
             this.Res.write(ctx.WORD().getText());
             this.Res.write("</strong> ");
            
         }
   exitEmoticon(ctx) {
    console.log('ex')
    var emoticon = ctx.getText();
    console.log(emoticon);
    if(emoticon == ':-)' || emoticon == ':)'){
        ctx.text = "🙂";
    
    }
    if(emoticon == ':-(' || emoticon == ':('){
        ctx.text = "🙁";
        
    }
    this.Res.write(ctx.text);

         }

    enterCommand(ctx) {
        if(ctx.SAYS() != null)
          this.Res.write(ctx.SAYS().getText() + ':' + '<p>');
        if(ctx.SHOUTS() != null)
          this.Res.write(ctx.SHOUTS().getText()+':'+ '<p style="text-transform: uppercase">');
        
        }

    exitLine(ctx) {
            this.Res.write("</p>");
            
            }

            enterColor(ctx) {
                 var color = ctx.WORD().getText();
                 this.Res.write('<span style="color: ' + color + '">');
                
                }

                exitColor(ctx) {
                    this.Res.write("</span>");
                 
                    }

                    exitMessage(ctx) {
                        this.Res.write(ctx.getText());
                      
                        }


}