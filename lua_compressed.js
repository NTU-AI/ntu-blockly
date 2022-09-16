// Do not edit this file; automatically generated.

/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define(["./blockly_compressed.js"], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory(require("./blockly_compressed.js"));
  } else { // Browser
    var factoryExports = factory(root.Blockly);
    root.Blockly.Lua = factoryExports;
  }
}(this, function(__parent__) {
var $=__parent__.__namespace__;
var module$contents$Blockly$Lua_Lua=new $.module$exports$Blockly$Generator.Generator("Lua");module$contents$Blockly$Lua_Lua.addReservedWords("_,__inext,assert,bit,colors,colours,coroutine,disk,dofile,error,fs,fetfenv,getmetatable,gps,help,io,ipairs,keys,loadfile,loadstring,math,native,next,os,paintutils,pairs,parallel,pcall,peripheral,print,printError,rawequal,rawget,rawset,read,rednet,redstone,rs,select,setfenv,setmetatable,sleep,string,table,term,textutils,tonumber,tostring,turtle,type,unpack,vector,write,xpcall,_VERSION,__indext,HTTP,and,break,do,else,elseif,end,false,for,function,if,in,local,nil,not,or,repeat,return,then,true,until,while,add,sub,mul,div,mod,pow,unm,concat,len,eq,lt,le,index,newindex,call,assert,collectgarbage,dofile,error,_G,getmetatable,inpairs,load,loadfile,next,pairs,pcall,print,rawequal,rawget,rawlen,rawset,select,setmetatable,tonumber,tostring,type,_VERSION,xpcall,require,package,string,table,math,bit32,io,file,os,debug");
module$contents$Blockly$Lua_Lua.ORDER_ATOMIC=0;module$contents$Blockly$Lua_Lua.ORDER_HIGH=1;module$contents$Blockly$Lua_Lua.ORDER_EXPONENTIATION=2;module$contents$Blockly$Lua_Lua.ORDER_UNARY=3;module$contents$Blockly$Lua_Lua.ORDER_MULTIPLICATIVE=4;module$contents$Blockly$Lua_Lua.ORDER_ADDITIVE=5;module$contents$Blockly$Lua_Lua.ORDER_CONCATENATION=6;module$contents$Blockly$Lua_Lua.ORDER_RELATIONAL=7;module$contents$Blockly$Lua_Lua.ORDER_AND=8;module$contents$Blockly$Lua_Lua.ORDER_OR=9;
module$contents$Blockly$Lua_Lua.ORDER_NONE=99;module$contents$Blockly$Lua_Lua.isInitialized=!1;module$contents$Blockly$Lua_Lua.init=function(a){Object.getPrototypeOf(this).init.call(this);this.nameDB_?this.nameDB_.reset():this.nameDB_=new $.module$exports$Blockly$Names.Names(this.RESERVED_WORDS_);this.nameDB_.setVariableMap(a.getVariableMap());this.nameDB_.populateVariables(a);this.nameDB_.populateProcedures(a);this.isInitialized=!0};
module$contents$Blockly$Lua_Lua.finish=function(a){var b=(0,$.module$exports$Blockly$utils$object.values)(this.definitions_);a=Object.getPrototypeOf(this).finish.call(this,a);this.isInitialized=!1;this.nameDB_.reset();return b.join("\n\n")+"\n\n\n"+a};module$contents$Blockly$Lua_Lua.scrubNakedValue=function(a){return"local _ = "+a+"\n"};module$contents$Blockly$Lua_Lua.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
module$contents$Blockly$Lua_Lua.multiline_quote_=function(a){return a.split(/\n/g).map(this.quote_).join(" .. '\\n' ..\n")};
module$contents$Blockly$Lua_Lua.scrub_=function(a,b,c){var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(e=(0,$.module$exports$Blockly$utils$string.wrap)(e,this.COMMENT_WRAP-3),d+=this.prefixLines(e,"-- ")+"\n");for(var f=0;f<a.inputList.length;f++)a.inputList[f].type===$.module$exports$Blockly$inputTypes.inputTypes.VALUE&&(e=a.inputList[f].connection.targetBlock())&&(e=this.allNestedComments(e))&&(d+=this.prefixLines(e,"-- "))}a=a.nextConnection&&
a.nextConnection.targetBlock();c=c?"":this.blockToCode(a);return d+b+c};$.Blockly.Lua=module$contents$Blockly$Lua_Lua;var module$exports$Blockly$Lua$variables={};$.Blockly.Lua.variables_get=function(a){return[$.Blockly.Lua.nameDB_.getName(a.getFieldValue("VAR"),$.module$exports$Blockly$Names.NameType.VARIABLE),$.Blockly.Lua.ORDER_ATOMIC]};$.Blockly.Lua.variables_set=function(a){var b=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_NONE)||"0";return $.Blockly.Lua.nameDB_.getName(a.getFieldValue("VAR"),$.module$exports$Blockly$Names.NameType.VARIABLE)+" = "+b+"\n"};var module$exports$Blockly$Lua$variablesDynamic={};$.Blockly.Lua.variables_get_dynamic=$.Blockly.Lua.variables_get;$.Blockly.Lua.variables_set_dynamic=$.Blockly.Lua.variables_set;var module$exports$Blockly$Lua$texts={};$.Blockly.Lua.text=function(a){return[$.Blockly.Lua.quote_(a.getFieldValue("TEXT")),$.Blockly.Lua.ORDER_ATOMIC]};$.Blockly.Lua.text_multiline=function(a){a=$.Blockly.Lua.multiline_quote_(a.getFieldValue("TEXT"));var b=-1!==a.indexOf("..")?$.Blockly.Lua.ORDER_CONCATENATION:$.Blockly.Lua.ORDER_ATOMIC;return[a,b]};
$.Blockly.Lua.text_join=function(a){if(0===a.itemCount_)return["''",$.Blockly.Lua.ORDER_ATOMIC];if(1===a.itemCount_)return["tostring("+($.Blockly.Lua.valueToCode(a,"ADD0",$.Blockly.Lua.ORDER_NONE)||"''")+")",$.Blockly.Lua.ORDER_HIGH];if(2===a.itemCount_){var b=$.Blockly.Lua.valueToCode(a,"ADD0",$.Blockly.Lua.ORDER_CONCATENATION)||"''";a=$.Blockly.Lua.valueToCode(a,"ADD1",$.Blockly.Lua.ORDER_CONCATENATION)||"''";return[b+" .. "+a,$.Blockly.Lua.ORDER_CONCATENATION]}b=[];for(var c=0;c<a.itemCount_;c++)b[c]=
$.Blockly.Lua.valueToCode(a,"ADD"+c,$.Blockly.Lua.ORDER_NONE)||"''";return["table.concat({"+b.join(", ")+"})",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.text_append=function(a){var b=$.Blockly.Lua.nameDB_.getName(a.getFieldValue("VAR"),$.module$exports$Blockly$Names.NameType.VARIABLE);a=$.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_CONCATENATION)||"''";return b+" = "+b+" .. "+a+"\n"};
$.Blockly.Lua.text_length=function(a){return["#"+($.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_UNARY)||"''"),$.Blockly.Lua.ORDER_UNARY]};$.Blockly.Lua.text_isEmpty=function(a){return["#"+($.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_UNARY)||"''")+" == 0",$.Blockly.Lua.ORDER_RELATIONAL]};
$.Blockly.Lua.text_indexOf=function(a){var b=$.Blockly.Lua.valueToCode(a,"FIND",$.Blockly.Lua.ORDER_NONE)||"''",c=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_NONE)||"''";return[("FIRST"===a.getFieldValue("END")?$.Blockly.Lua.provideFunction_("firstIndexOf","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str, substr)\n  local i = string.find(str, substr, 1, true)\n  if i == nil then\n    return 0\n  end\n  return i\nend\n"):$.Blockly.Lua.provideFunction_("lastIndexOf","\nfunction "+
$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str, substr)\n  local i = string.find(string.reverse(str), string.reverse(substr), 1, true)\n  if i then\n    return #str + 2 - i - #substr\n  end\n  return 0\nend\n"))+"("+c+", "+b+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=$.Blockly.Lua.valueToCode(a,"AT","FROM_END"===b?$.Blockly.Lua.ORDER_UNARY:$.Blockly.Lua.ORDER_NONE)||"1";a=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_NONE)||"''";if("RANDOM"===b)b=$.Blockly.Lua.provideFunction_("text_random_letter","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str)\n  local index = math.random(string.len(str))\n  return string.sub(str, index, index)\nend\n")+"("+a+")";else{if("FIRST"===
b)b="1";else if("LAST"===b)b="-1";else if("FROM_START"===b)b=c;else if("FROM_END"===b)b="-"+c;else throw Error("Unhandled option (text_charAt).");b=b.match(/^-?\w*$/)?"string.sub("+a+", "+b+", "+b+")":$.Blockly.Lua.provideFunction_("text_char_at","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str, index)\n  return string.sub(str, index, index)\nend\n")+"("+a+", "+b+")"}return[b,$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.text_getSubstring=function(a){var b=$.Blockly.Lua.valueToCode(a,"STRING",$.Blockly.Lua.ORDER_NONE)||"''",c=a.getFieldValue("WHERE1"),d=$.Blockly.Lua.valueToCode(a,"AT1","FROM_END"===c?$.Blockly.Lua.ORDER_UNARY:$.Blockly.Lua.ORDER_NONE)||"1";if("FIRST"===c)c=1;else if("FROM_START"===c)c=d;else if("FROM_END"===c)c="-"+d;else throw Error("Unhandled option (text_getSubstring)");d=a.getFieldValue("WHERE2");a=$.Blockly.Lua.valueToCode(a,"AT2","FROM_END"===d?$.Blockly.Lua.ORDER_UNARY:$.Blockly.Lua.ORDER_NONE)||
"1";if("LAST"===d)a=-1;else if("FROM_START"!==d)if("FROM_END"===d)a="-"+a;else throw Error("Unhandled option (text_getSubstring)");return["string.sub("+b+", "+c+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.text_changeCase=function(a){var b=a.getFieldValue("CASE");a=$.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''";var c;"UPPERCASE"===b?c="string.upper":"LOWERCASE"===b?c="string.lower":"TITLECASE"===b&&(c=$.Blockly.Lua.provideFunction_("text_titlecase","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+'(str)\n  local buf = {}\n  local inWord = false\n  for i = 1, #str do\n    local c = string.sub(str, i, i)\n    if inWord then\n      table.insert(buf, string.lower(c))\n      if string.find(c, "%s") then\n        inWord = false\n      end\n    else\n      table.insert(buf, string.upper(c))\n      inWord = true\n    end\n  end\n  return table.concat(buf)\nend\n'));
return[c+"("+a+")",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.text_trim=function(a){var b={LEFT:"^%s*(,-)",RIGHT:"(.-)%s*$",BOTH:"^%s*(.-)%s*$"}[a.getFieldValue("MODE")];return["string.gsub("+($.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''")+', "'+b+'", "%1")',$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.text_print=function(a){return"print("+($.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''")+")\n"};
$.Blockly.Lua.text_prompt_ext=function(a){var b=a.getField("TEXT")?$.Blockly.Lua.quote_(a.getFieldValue("TEXT")):$.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''";b=$.Blockly.Lua.provideFunction_("text_prompt","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(msg)\n  io.write(msg)\n  io.flush()\n  return io.read()\nend\n")+"("+b+")";"NUMBER"===a.getFieldValue("TYPE")&&(b="tonumber("+b+", 10)");return[b,$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.text_prompt=$.Blockly.Lua.text_prompt_ext;
$.Blockly.Lua.text_count=function(a){var b=$.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''";a=$.Blockly.Lua.valueToCode(a,"SUB",$.Blockly.Lua.ORDER_NONE)||"''";return[$.Blockly.Lua.provideFunction_("text_count","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle)\n  if #needle == 0 then\n    return #haystack + 1\n  end\n  local i = 1\n  local count = 0\n  while true do\n    i = string.find(haystack, needle, i, true)\n    if i == nil then\n      break\n    end\n    count = count + 1\n    i = i + #needle\n  end\n  return count\nend\n")+
"("+b+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.text_replace=function(a){var b=$.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''",c=$.Blockly.Lua.valueToCode(a,"FROM",$.Blockly.Lua.ORDER_NONE)||"''";a=$.Blockly.Lua.valueToCode(a,"TO",$.Blockly.Lua.ORDER_NONE)||"''";return[$.Blockly.Lua.provideFunction_("text_replace","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle, replacement)\n  local buf = {}\n  local i = 1\n  while i <= #haystack do\n    if string.sub(haystack, i, i + #needle - 1) == needle then\n      for j = 1, #replacement do\n        table.insert(buf, string.sub(replacement, j, j))\n      end\n      i = i + #needle\n    else\n      table.insert(buf, string.sub(haystack, i, i))\n      i = i + 1\n    end\n  end\n  return table.concat(buf)\nend\n")+"("+
b+", "+c+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.text_reverse=function(a){return["string.reverse("+($.Blockly.Lua.valueToCode(a,"TEXT",$.Blockly.Lua.ORDER_NONE)||"''")+")",$.Blockly.Lua.ORDER_HIGH]};var module$exports$Blockly$Lua$procedures={};
$.Blockly.Lua.procedures_defreturn=function(a){var b=$.Blockly.Lua.nameDB_.getName(a.getFieldValue("NAME"),$.module$exports$Blockly$Names.NameType.PROCEDURE),c="";$.Blockly.Lua.STATEMENT_PREFIX&&(c+=$.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_PREFIX,a));$.Blockly.Lua.STATEMENT_SUFFIX&&(c+=$.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_SUFFIX,a));c&&(c=$.Blockly.Lua.prefixLines(c,$.Blockly.Lua.INDENT));var d="";$.Blockly.Lua.INFINITE_LOOP_TRAP&&(d=$.Blockly.Lua.prefixLines($.Blockly.Lua.injectId($.Blockly.Lua.INFINITE_LOOP_TRAP,a),
$.Blockly.Lua.INDENT));var e=$.Blockly.Lua.statementToCode(a,"STACK"),f=$.Blockly.Lua.valueToCode(a,"RETURN",$.Blockly.Lua.ORDER_NONE)||"",g="";e&&f&&(g=c);f?f=$.Blockly.Lua.INDENT+"return "+f+"\n":e||(e="");for(var h=[],k=a.getVars(),l=0;l<k.length;l++)h[l]=$.Blockly.Lua.nameDB_.getName(k[l],$.module$exports$Blockly$Names.NameType.VARIABLE);c="function "+b+"("+h.join(", ")+")\n"+c+d+e+g+f+"end\n";c=$.Blockly.Lua.scrub_(a,c);$.Blockly.Lua.definitions_["%"+b]=c;return null};
$.Blockly.Lua.procedures_defnoreturn=$.Blockly.Lua.procedures_defreturn;$.Blockly.Lua.procedures_callreturn=function(a){for(var b=$.Blockly.Lua.nameDB_.getName(a.getFieldValue("NAME"),$.module$exports$Blockly$Names.NameType.PROCEDURE),c=[],d=a.getVars(),e=0;e<d.length;e++)c[e]=$.Blockly.Lua.valueToCode(a,"ARG"+e,$.Blockly.Lua.ORDER_NONE)||"nil";return[b+"("+c.join(", ")+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.procedures_callnoreturn=function(a){return $.Blockly.Lua.procedures_callreturn(a)[0]+"\n"};
$.Blockly.Lua.procedures_ifreturn=function(a){var b="if "+($.Blockly.Lua.valueToCode(a,"CONDITION",$.Blockly.Lua.ORDER_NONE)||"false")+" then\n";$.Blockly.Lua.STATEMENT_SUFFIX&&(b+=$.Blockly.Lua.prefixLines($.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_SUFFIX,a),$.Blockly.Lua.INDENT));a.hasReturnValue_?(a=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_NONE)||"nil",b+=$.Blockly.Lua.INDENT+"return "+a+"\n"):b+=$.Blockly.Lua.INDENT+"return\n";return b+"end\n"};var module$exports$Blockly$Lua$math={};$.Blockly.Lua.math_number=function(a){a=Number(a.getFieldValue("NUM"));return[a,0>a?$.Blockly.Lua.ORDER_UNARY:$.Blockly.Lua.ORDER_ATOMIC]};
$.Blockly.Lua.math_arithmetic=function(a){var b={ADD:[" + ",$.Blockly.Lua.ORDER_ADDITIVE],MINUS:[" - ",$.Blockly.Lua.ORDER_ADDITIVE],MULTIPLY:[" * ",$.Blockly.Lua.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",$.Blockly.Lua.ORDER_MULTIPLICATIVE],POWER:[" ^ ",$.Blockly.Lua.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=$.Blockly.Lua.valueToCode(a,"A",b)||"0";a=$.Blockly.Lua.valueToCode(a,"B",b)||"0";return[d+c+a,b]};
$.Blockly.Lua.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"===b)return a=$.Blockly.Lua.valueToCode(a,"NUM",$.Blockly.Lua.ORDER_UNARY)||"0",["-"+a,$.Blockly.Lua.ORDER_UNARY];if("POW10"===b)return a=$.Blockly.Lua.valueToCode(a,"NUM",$.Blockly.Lua.ORDER_EXPONENTIATION)||"0",["10 ^ "+a,$.Blockly.Lua.ORDER_EXPONENTIATION];a="ROUND"===b?$.Blockly.Lua.valueToCode(a,"NUM",$.Blockly.Lua.ORDER_ADDITIVE)||"0":$.Blockly.Lua.valueToCode(a,"NUM",$.Blockly.Lua.ORDER_NONE)||"0";switch(b){case "ABS":b=
"math.abs("+a+")";break;case "ROOT":b="math.sqrt("+a+")";break;case "LN":b="math.log("+a+")";break;case "LOG10":b="math.log("+a+", 10)";break;case "EXP":b="math.exp("+a+")";break;case "ROUND":b="math.floor("+a+" + .5)";break;case "ROUNDUP":b="math.ceil("+a+")";break;case "ROUNDDOWN":b="math.floor("+a+")";break;case "SIN":b="math.sin(math.rad("+a+"))";break;case "COS":b="math.cos(math.rad("+a+"))";break;case "TAN":b="math.tan(math.rad("+a+"))";break;case "ASIN":b="math.deg(math.asin("+a+"))";break;
case "ACOS":b="math.deg(math.acos("+a+"))";break;case "ATAN":b="math.deg(math.atan("+a+"))";break;default:throw Error("Unknown math operator: "+b);}return[b,$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.math_constant=function(a){return{PI:["math.pi",$.Blockly.Lua.ORDER_HIGH],E:["math.exp(1)",$.Blockly.Lua.ORDER_HIGH],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",$.Blockly.Lua.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",$.Blockly.Lua.ORDER_HIGH],SQRT1_2:["math.sqrt(1 / 2)",$.Blockly.Lua.ORDER_HIGH],INFINITY:["math.huge",$.Blockly.Lua.ORDER_HIGH]}[a.getFieldValue("CONSTANT")]};
$.Blockly.Lua.math_number_property=function(a){var b={EVEN:[" % 2 == 0",$.Blockly.Lua.ORDER_MULTIPLICATIVE,$.Blockly.Lua.ORDER_RELATIONAL],ODD:[" % 2 == 1",$.Blockly.Lua.ORDER_MULTIPLICATIVE,$.Blockly.Lua.ORDER_RELATIONAL],WHOLE:[" % 1 == 0",$.Blockly.Lua.ORDER_MULTIPLICATIVE,$.Blockly.Lua.ORDER_RELATIONAL],POSITIVE:[" > 0",$.Blockly.Lua.ORDER_RELATIONAL,$.Blockly.Lua.ORDER_RELATIONAL],NEGATIVE:[" < 0",$.Blockly.Lua.ORDER_RELATIONAL,$.Blockly.Lua.ORDER_RELATIONAL],DIVISIBLE_BY:[null,$.Blockly.Lua.ORDER_MULTIPLICATIVE,
$.Blockly.Lua.ORDER_RELATIONAL],PRIME:[null,$.Blockly.Lua.ORDER_NONE,$.Blockly.Lua.ORDER_HIGH]},c=a.getFieldValue("PROPERTY");b=$.$jscomp.makeIterator(b[c]);var d=b.next().value,e=b.next().value;b=b.next().value;e=$.Blockly.Lua.valueToCode(a,"NUMBER_TO_CHECK",e)||"0";if("PRIME"===c)a=$.Blockly.Lua.provideFunction_("math_isPrime","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(n)\n  -- https://en.wikipedia.org/wiki/Primality_test#Naive_methods\n  if n == 2 or n == 3 then\n    return true\n  end\n  -- False if n is NaN, negative, is 1, or not whole.\n  -- And false if n is divisible by 2 or 3.\n  if not(n > 1) or n % 1 ~= 0 or n % 2 == 0 or n % 3 == 0 then\n    return false\n  end\n  -- Check all the numbers of form 6k +/- 1, up to sqrt(n).\n  for x = 6, math.sqrt(n) + 1.5, 6 do\n    if n % (x - 1) == 0 or n % (x + 1) == 0 then\n      return false\n    end\n  end\n  return true\nend\n")+
"("+e+")";else if("DIVISIBLE_BY"===c){a=$.Blockly.Lua.valueToCode(a,"DIVISOR",$.Blockly.Lua.ORDER_MULTIPLICATIVE)||"0";if("0"===a)return["nil",$.Blockly.Lua.ORDER_ATOMIC];a=e+" % "+a+" == 0"}else a=e+d;return[a,b]};$.Blockly.Lua.math_change=function(a){var b=$.Blockly.Lua.valueToCode(a,"DELTA",$.Blockly.Lua.ORDER_ADDITIVE)||"0";a=$.Blockly.Lua.nameDB_.getName(a.getFieldValue("VAR"),$.module$exports$Blockly$Names.NameType.VARIABLE);return a+" = "+a+" + "+b+"\n"};$.Blockly.Lua.math_round=$.Blockly.Lua.math_single;
$.Blockly.Lua.math_trig=$.Blockly.Lua.math_single;
$.Blockly.Lua.math_on_list=function(a){function b(){return $.Blockly.Lua.provideFunction_("math_sum","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)\n  local result = 0\n  for _, v in ipairs(t) do\n    result = result + v\n  end\n  return result\nend\n")}var c=a.getFieldValue("OP");a=$.Blockly.Lua.valueToCode(a,"LIST",$.Blockly.Lua.ORDER_NONE)||"{}";switch(c){case "SUM":c=b();break;case "MIN":c=$.Blockly.Lua.provideFunction_("math_min","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+
"(t)\n  if #t == 0 then\n    return 0\n  end\n  local result = math.huge\n  for _, v in ipairs(t) do\n    if v < result then\n      result = v\n    end\n  end\n  return result\nend\n");break;case "AVERAGE":c=$.Blockly.Lua.provideFunction_("math_average","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)\n  if #t == 0 then\n    return 0\n  end\n  return "+b()+"(t) / #t\nend\n");break;case "MAX":c=$.Blockly.Lua.provideFunction_("math_max","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+
"(t)\n  if #t == 0 then\n    return 0\n  end\n  local result = -math.huge\n  for _, v in ipairs(t) do\n    if v > result then\n      result = v\n    end\n  end\n  return result\nend\n");break;case "MEDIAN":c=$.Blockly.Lua.provideFunction_("math_median","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)\n  -- Source: http://lua-users.org/wiki/SimpleStats\n  if #t == 0 then\n    return 0\n  end\n  local temp = {}\n  for _, v in ipairs(t) do\n    if type(v) == 'number' then\n      table.insert(temp, v)\n    end\n  end\n  table.sort(temp)\n  if #temp % 2 == 0 then\n    return (temp[#temp / 2] + temp[(#temp / 2) + 1]) / 2\n  else\n    return temp[math.ceil(#temp / 2)]\n  end\nend\n");
break;case "MODE":c=$.Blockly.Lua.provideFunction_("math_modes","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)\n  -- Source: http://lua-users.org/wiki/SimpleStats\n  local counts = {}\n  for _, v in ipairs(t) do\n    if counts[v] == nil then\n      counts[v] = 1\n    else\n      counts[v] = counts[v] + 1\n    end\n  end\n  local biggestCount = 0\n  for _, v  in pairs(counts) do\n    if v > biggestCount then\n      biggestCount = v\n    end\n  end\n  local temp = {}\n  for k, v in pairs(counts) do\n    if v == biggestCount then\n      table.insert(temp, k)\n    end\n  end\n  return temp\nend\n");
break;case "STD_DEV":c=$.Blockly.Lua.provideFunction_("math_standard_deviation","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)\n  local m\n  local vm\n  local total = 0\n  local count = 0\n  local result\n  m = #t == 0 and 0 or "+b()+"(t) / #t\n  for _, v in ipairs(t) do\n    if type(v) == 'number' then\n      vm = v - m\n      total = total + (vm * vm)\n      count = count + 1\n    end\n  end\n  result = math.sqrt(total / (count-1))\n  return result\nend\n");break;case "RANDOM":c=$.Blockly.Lua.provideFunction_("math_random_list",
"\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)\n  if #t == 0 then\n    return nil\n  end\n  return t[math.random(#t)]\nend\n");break;default:throw Error("Unknown operator: "+c);}return[c+"("+a+")",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.math_modulo=function(a){var b=$.Blockly.Lua.valueToCode(a,"DIVIDEND",$.Blockly.Lua.ORDER_MULTIPLICATIVE)||"0";a=$.Blockly.Lua.valueToCode(a,"DIVISOR",$.Blockly.Lua.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,$.Blockly.Lua.ORDER_MULTIPLICATIVE]};
$.Blockly.Lua.math_constrain=function(a){var b=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_NONE)||"0",c=$.Blockly.Lua.valueToCode(a,"LOW",$.Blockly.Lua.ORDER_NONE)||"-math.huge";a=$.Blockly.Lua.valueToCode(a,"HIGH",$.Blockly.Lua.ORDER_NONE)||"math.huge";return["math.min(math.max("+b+", "+c+"), "+a+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.math_random_int=function(a){var b=$.Blockly.Lua.valueToCode(a,"FROM",$.Blockly.Lua.ORDER_NONE)||"0";a=$.Blockly.Lua.valueToCode(a,"TO",$.Blockly.Lua.ORDER_NONE)||"0";return["math.random("+b+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.math_random_float=function(a){return["math.random()",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.math_atan2=function(a){var b=$.Blockly.Lua.valueToCode(a,"X",$.Blockly.Lua.ORDER_NONE)||"0";return["math.deg(math.atan2("+($.Blockly.Lua.valueToCode(a,"Y",$.Blockly.Lua.ORDER_NONE)||"0")+", "+b+"))",$.Blockly.Lua.ORDER_HIGH]};var module$exports$Blockly$Lua$loops={},module$contents$Blockly$Lua$loops_CONTINUE_STATEMENT="goto continue\n",module$contents$Blockly$Lua$loops_addContinueLabel=function(a){return-1!==a.indexOf(module$contents$Blockly$Lua$loops_CONTINUE_STATEMENT)?a+$.Blockly.Lua.INDENT+"::continue::\n":a};
$.Blockly.Lua.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):$.Blockly.Lua.valueToCode(a,"TIMES",$.Blockly.Lua.ORDER_NONE)||"0";b=(0,$.module$exports$Blockly$utils$string.isNumber)(b)?parseInt(b,10):"math.floor("+b+")";var c=$.Blockly.Lua.statementToCode(a,"DO");c=$.Blockly.Lua.addLoopTrap(c,a);c=module$contents$Blockly$Lua$loops_addContinueLabel(c);return"for "+$.Blockly.Lua.nameDB_.getDistinctName("count",$.module$exports$Blockly$Names.NameType.VARIABLE)+
" = 1, "+b+" do\n"+c+"end\n"};$.Blockly.Lua.controls_repeat=$.Blockly.Lua.controls_repeat_ext;$.Blockly.Lua.controls_whileUntil=function(a){var b="UNTIL"===a.getFieldValue("MODE"),c=$.Blockly.Lua.valueToCode(a,"BOOL",b?$.Blockly.Lua.ORDER_UNARY:$.Blockly.Lua.ORDER_NONE)||"false",d=$.Blockly.Lua.statementToCode(a,"DO");d=$.Blockly.Lua.addLoopTrap(d,a);d=module$contents$Blockly$Lua$loops_addContinueLabel(d);b&&(c="not "+c);return"while "+c+" do\n"+d+"end\n"};
$.Blockly.Lua.controls_for=function(a){var b=$.Blockly.Lua.nameDB_.getName(a.getFieldValue("VAR"),$.module$exports$Blockly$Names.NameType.VARIABLE),c=$.Blockly.Lua.valueToCode(a,"FROM",$.Blockly.Lua.ORDER_NONE)||"0",d=$.Blockly.Lua.valueToCode(a,"TO",$.Blockly.Lua.ORDER_NONE)||"0",e=$.Blockly.Lua.valueToCode(a,"BY",$.Blockly.Lua.ORDER_NONE)||"1",f=$.Blockly.Lua.statementToCode(a,"DO");f=$.Blockly.Lua.addLoopTrap(f,a);f=module$contents$Blockly$Lua$loops_addContinueLabel(f);a="";if((0,$.module$exports$Blockly$utils$string.isNumber)(c)&&
(0,$.module$exports$Blockly$utils$string.isNumber)(d)&&(0,$.module$exports$Blockly$utils$string.isNumber)(e))var g=(Number(c)<=Number(d)?"":"-")+Math.abs(Number(e));else a="",g=$.Blockly.Lua.nameDB_.getDistinctName(b+"_inc",$.module$exports$Blockly$Names.NameType.VARIABLE),a+=g+" = ",a=(0,$.module$exports$Blockly$utils$string.isNumber)(e)?a+(Math.abs(e)+"\n"):a+("math.abs("+e+")\n"),a=a+("if ("+c+") > ("+d+") then\n")+($.Blockly.Lua.INDENT+g+" = -"+g+"\n"),a+="end\n";return a+("for "+b+" = "+c+", "+
d+", "+g)+(" do\n"+f+"end\n")};$.Blockly.Lua.controls_forEach=function(a){var b=$.Blockly.Lua.nameDB_.getName(a.getFieldValue("VAR"),$.module$exports$Blockly$Names.NameType.VARIABLE),c=$.Blockly.Lua.valueToCode(a,"LIST",$.Blockly.Lua.ORDER_NONE)||"{}",d=$.Blockly.Lua.statementToCode(a,"DO");d=$.Blockly.Lua.addLoopTrap(d,a);d=module$contents$Blockly$Lua$loops_addContinueLabel(d);return"for _, "+b+" in ipairs("+c+") do \n"+d+"end\n"};
$.Blockly.Lua.controls_flow_statements=function(a){var b="";$.Blockly.Lua.STATEMENT_PREFIX&&(b+=$.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_PREFIX,a));$.Blockly.Lua.STATEMENT_SUFFIX&&(b+=$.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_SUFFIX,a));if($.Blockly.Lua.STATEMENT_PREFIX){var c=a.getSurroundLoop();c&&!c.suppressPrefixSuffix&&(b+=$.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_PREFIX,c))}switch(a.getFieldValue("FLOW")){case "BREAK":return b+"break\n";case "CONTINUE":return b+module$contents$Blockly$Lua$loops_CONTINUE_STATEMENT}throw Error("Unknown flow statement.");
};var module$exports$Blockly$Lua$logic={};
$.Blockly.Lua.controls_if=function(a){var b=0,c="";$.Blockly.Lua.STATEMENT_PREFIX&&(c+=$.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_PREFIX,a));do{var d=$.Blockly.Lua.valueToCode(a,"IF"+b,$.Blockly.Lua.ORDER_NONE)||"false",e=$.Blockly.Lua.statementToCode(a,"DO"+b);$.Blockly.Lua.STATEMENT_SUFFIX&&(e=$.Blockly.Lua.prefixLines($.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_SUFFIX,a),$.Blockly.Lua.INDENT)+e);c+=(0<b?"else":"")+"if "+d+" then\n"+e;b++}while(a.getInput("IF"+b));if(a.getInput("ELSE")||
$.Blockly.Lua.STATEMENT_SUFFIX)b=$.Blockly.Lua.statementToCode(a,"ELSE"),$.Blockly.Lua.STATEMENT_SUFFIX&&(b=$.Blockly.Lua.prefixLines($.Blockly.Lua.injectId($.Blockly.Lua.STATEMENT_SUFFIX,a),$.Blockly.Lua.INDENT)+b),c+="else\n"+b;return c+"end\n"};$.Blockly.Lua.controls_ifelse=$.Blockly.Lua.controls_if;
$.Blockly.Lua.logic_compare=function(a){var b={EQ:"==",NEQ:"~=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c=$.Blockly.Lua.valueToCode(a,"A",$.Blockly.Lua.ORDER_RELATIONAL)||"0";a=$.Blockly.Lua.valueToCode(a,"B",$.Blockly.Lua.ORDER_RELATIONAL)||"0";return[c+" "+b+" "+a,$.Blockly.Lua.ORDER_RELATIONAL]};
$.Blockly.Lua.logic_operation=function(a){var b="AND"===a.getFieldValue("OP")?"and":"or",c="and"===b?$.Blockly.Lua.ORDER_AND:$.Blockly.Lua.ORDER_OR,d=$.Blockly.Lua.valueToCode(a,"A",c);a=$.Blockly.Lua.valueToCode(a,"B",c);if(d||a){var e="and"===b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};$.Blockly.Lua.logic_negate=function(a){return["not "+($.Blockly.Lua.valueToCode(a,"BOOL",$.Blockly.Lua.ORDER_UNARY)||"true"),$.Blockly.Lua.ORDER_UNARY]};
$.Blockly.Lua.logic_boolean=function(a){return["TRUE"===a.getFieldValue("BOOL")?"true":"false",$.Blockly.Lua.ORDER_ATOMIC]};$.Blockly.Lua.logic_null=function(a){return["nil",$.Blockly.Lua.ORDER_ATOMIC]};$.Blockly.Lua.logic_ternary=function(a){var b=$.Blockly.Lua.valueToCode(a,"IF",$.Blockly.Lua.ORDER_AND)||"false",c=$.Blockly.Lua.valueToCode(a,"THEN",$.Blockly.Lua.ORDER_AND)||"nil";a=$.Blockly.Lua.valueToCode(a,"ELSE",$.Blockly.Lua.ORDER_OR)||"nil";return[b+" and "+c+" or "+a,$.Blockly.Lua.ORDER_OR]};var module$exports$Blockly$Lua$lists={};$.Blockly.Lua.lists_create_empty=function(a){return["{}",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=$.Blockly.Lua.valueToCode(a,"ADD"+c,$.Blockly.Lua.ORDER_NONE)||"None";return["{"+b.join(", ")+"}",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.lists_repeat=function(a){var b=$.Blockly.Lua.provideFunction_("create_list_repeated","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(item, count)\n  local t = {}\n  for i = 1, count do\n    table.insert(t, item)\n  end\n  return t\nend\n  "),c=$.Blockly.Lua.valueToCode(a,"ITEM",$.Blockly.Lua.ORDER_NONE)||"None";a=$.Blockly.Lua.valueToCode(a,"NUM",$.Blockly.Lua.ORDER_NONE)||"0";return[b+"("+c+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.lists_length=function(a){return["#"+($.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_UNARY)||"{}"),$.Blockly.Lua.ORDER_UNARY]};$.Blockly.Lua.lists_isEmpty=function(a){return["#"+($.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_UNARY)||"{}")+" == 0",$.Blockly.Lua.ORDER_RELATIONAL]};
$.Blockly.Lua.lists_indexOf=function(a){var b=$.Blockly.Lua.valueToCode(a,"FIND",$.Blockly.Lua.ORDER_NONE)||"''",c=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_NONE)||"{}";return[("FIRST"===a.getFieldValue("END")?$.Blockly.Lua.provideFunction_("first_index","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t, elem)\n  for k, v in ipairs(t) do\n    if v == elem then\n      return k\n    end\n  end\n  return 0\nend\n"):$.Blockly.Lua.provideFunction_("last_index","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+
"(t, elem)\n  for i = #t, 1, -1 do\n    if t[i] == elem then\n      return i\n    end\n  end\n  return 0\nend\n"))+"("+c+", "+b+")",$.Blockly.Lua.ORDER_HIGH]};var module$contents$Blockly$Lua$lists_getListIndex=function(a,b,c){return"FIRST"===b?"1":"FROM_END"===b?"#"+a+" + 1 - "+c:"LAST"===b?"#"+a:"RANDOM"===b?"math.random(#"+a+")":c};
$.Blockly.Lua.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=$.Blockly.Lua.valueToCode(a,"VALUE",$.Blockly.Lua.ORDER_HIGH)||"({})";if("LAST"!==c&&"FROM_END"!==c&&"RANDOM"!==c||d.match(/^\w+$/)){a=$.Blockly.Lua.valueToCode(a,"AT","GET"===b&&"FROM_END"===c?$.Blockly.Lua.ORDER_ADDITIVE:$.Blockly.Lua.ORDER_NONE)||"1";a=module$contents$Blockly$Lua$lists_getListIndex(d,c,a);if("GET"===b)return[d+"["+a+"]",$.Blockly.Lua.ORDER_HIGH];c="table.remove("+
d+", "+a+")";return"GET_REMOVE"===b?[c,$.Blockly.Lua.ORDER_HIGH]:c+"\n"}if("REMOVE"===b)return b=$.Blockly.Lua.valueToCode(a,"AT","FROM_END"===c?$.Blockly.Lua.ORDER_ADDITIVE:$.Blockly.Lua.ORDER_NONE)||"1",a=$.Blockly.Lua.nameDB_.getDistinctName("tmp_list",$.module$exports$Blockly$Names.NameType.VARIABLE),b=module$contents$Blockly$Lua$lists_getListIndex(a,c,b),a+" = "+d+"\ntable.remove("+a+", "+b+")\n";a=$.Blockly.Lua.valueToCode(a,"AT",$.Blockly.Lua.ORDER_NONE)||"1";return[("GET"===b?$.Blockly.Lua.provideFunction_("list_get_"+
c.toLowerCase(),["function "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t"+("FROM_END"===c||"FROM_START"===c?", at)":")"),"  return t["+module$contents$Blockly$Lua$lists_getListIndex("t",c,"at")+"]","end"]):$.Blockly.Lua.provideFunction_("list_remove_"+c.toLowerCase(),["function "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t"+("FROM_END"===c||"FROM_START"===c?", at)":")"),"  return table.remove(t, "+module$contents$Blockly$Lua$lists_getListIndex("t",c,"at")+")","end"]))+"("+d+("FROM_END"===c||"FROM_START"===
c?", "+a:"")+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.lists_setIndex=function(a){var b=$.Blockly.Lua.valueToCode(a,"LIST",$.Blockly.Lua.ORDER_HIGH)||"{}",c=a.getFieldValue("MODE")||"SET",d=a.getFieldValue("WHERE")||"FROM_START",e=$.Blockly.Lua.valueToCode(a,"AT",$.Blockly.Lua.ORDER_ADDITIVE)||"1";a=$.Blockly.Lua.valueToCode(a,"TO",$.Blockly.Lua.ORDER_NONE)||"None";var f="";if(("LAST"===d||"FROM_END"===d||"RANDOM"===d)&&!b.match(/^\w+$/)){var g=$.Blockly.Lua.nameDB_.getDistinctName("tmp_list",$.module$exports$Blockly$Names.NameType.VARIABLE);
f=g+" = "+b+"\n";b=g}f="SET"===c?f+(b+"["+module$contents$Blockly$Lua$lists_getListIndex(b,d,e)+"] = "+a):f+("table.insert("+b+", "+(module$contents$Blockly$Lua$lists_getListIndex(b,d,e)+("LAST"===d?" + 1":""))+", "+a+")");return f+"\n"};
$.Blockly.Lua.lists_getSublist=function(a){var b=$.Blockly.Lua.valueToCode(a,"LIST",$.Blockly.Lua.ORDER_NONE)||"{}",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=$.Blockly.Lua.valueToCode(a,"AT1",$.Blockly.Lua.ORDER_NONE)||"1";a=$.Blockly.Lua.valueToCode(a,"AT2",$.Blockly.Lua.ORDER_NONE)||"1";var f="FROM_END"===c||"FROM_START"===c?", at1":"",g="FROM_END"===d||"FROM_START"===d?", at2":"";return[$.Blockly.Lua.provideFunction_("list_sublist_"+c.toLowerCase()+"_"+d.toLowerCase(),"\nfunction "+
$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(source"+f+g+")\n  local t = {}\n  local start = "+module$contents$Blockly$Lua$lists_getListIndex("source",c,"at1")+"\n  local finish = "+module$contents$Blockly$Lua$lists_getListIndex("source",d,"at2")+"\n  for i = start, finish do\n    table.insert(t, source[i])\n  end\n  return t\nend\n")+"("+b+("FROM_END"===c||"FROM_START"===c?", "+e:"")+("FROM_END"===d||"FROM_START"===d?", "+a:"")+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.lists_sort=function(a){var b=$.Blockly.Lua.valueToCode(a,"LIST",$.Blockly.Lua.ORDER_NONE)||"{}",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");return[$.Blockly.Lua.provideFunction_("list_sort","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(list, typev, direction)\n  local t = {}\n  for n,v in pairs(list) do table.insert(t, v) end\n  local compareFuncs = {\n    NUMERIC = function(a, b)\n      return (tonumber(tostring(a)) or 0)\n          < (tonumber(tostring(b)) or 0) end,\n    TEXT = function(a, b)\n      return tostring(a) < tostring(b) end,\n    IGNORE_CASE = function(a, b)\n      return string.lower(tostring(a)) < string.lower(tostring(b)) end\n  }\n  local compareTemp = compareFuncs[typev]\n  local compare = compareTemp\n  if direction == -1\n  then compare = function(a, b) return compareTemp(b, a) end\n  end\n  table.sort(t, compare)\n  return t\nend\n")+
"("+b+',"'+a+'", '+c+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.lists_split=function(a){var b=$.Blockly.Lua.valueToCode(a,"INPUT",$.Blockly.Lua.ORDER_NONE),c=$.Blockly.Lua.valueToCode(a,"DELIM",$.Blockly.Lua.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"===a)b||(b="''"),a=$.Blockly.Lua.provideFunction_("list_string_split","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(input, delim)\n  local t = {}\n  local pos = 1\n  while true do\n    next_delim = string.find(input, delim, pos)\n    if next_delim == nil then\n      table.insert(t, string.sub(input, pos))\n      break\n    else\n      table.insert(t, string.sub(input, pos, next_delim-1))\n      pos = next_delim + #delim\n    end\n  end\n  return t\nend\n");else if("JOIN"===
a)b||(b="{}"),a="table.concat";else throw Error("Unknown mode: "+a);return[a+"("+b+", "+c+")",$.Blockly.Lua.ORDER_HIGH]};$.Blockly.Lua.lists_reverse=function(a){a=$.Blockly.Lua.valueToCode(a,"LIST",$.Blockly.Lua.ORDER_NONE)||"{}";return[$.Blockly.Lua.provideFunction_("list_reverse","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(input)\n  local reversed = {}\n  for i = #input, 1, -1 do\n    table.insert(reversed, input[i])\n  end\n  return reversed\nend\n")+"("+a+")",$.Blockly.Lua.ORDER_HIGH]};var module$exports$Blockly$Lua$colour={};$.Blockly.Lua.colour_picker=function(a){return[$.Blockly.Lua.quote_(a.getFieldValue("COLOUR")),$.Blockly.Lua.ORDER_ATOMIC]};$.Blockly.Lua.colour_random=function(a){return['string.format("#%06x", math.random(0, 2^24 - 1))',$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.colour_rgb=function(a){var b=$.Blockly.Lua.provideFunction_("colour_rgb","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+'(r, g, b)\n  r = math.floor(math.min(100, math.max(0, r)) * 2.55 + .5)\n  g = math.floor(math.min(100, math.max(0, g)) * 2.55 + .5)\n  b = math.floor(math.min(100, math.max(0, b)) * 2.55 + .5)\n  return string.format("#%02x%02x%02x", r, g, b)\nend\n'),c=$.Blockly.Lua.valueToCode(a,"RED",$.Blockly.Lua.ORDER_NONE)||0,d=$.Blockly.Lua.valueToCode(a,"GREEN",$.Blockly.Lua.ORDER_NONE)||
0;a=$.Blockly.Lua.valueToCode(a,"BLUE",$.Blockly.Lua.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};
$.Blockly.Lua.colour_blend=function(a){var b=$.Blockly.Lua.provideFunction_("colour_blend","\nfunction "+$.Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+'(colour1, colour2, ratio)\n  local r1 = tonumber(string.sub(colour1, 2, 3), 16)\n  local r2 = tonumber(string.sub(colour2, 2, 3), 16)\n  local g1 = tonumber(string.sub(colour1, 4, 5), 16)\n  local g2 = tonumber(string.sub(colour2, 4, 5), 16)\n  local b1 = tonumber(string.sub(colour1, 6, 7), 16)\n  local b2 = tonumber(string.sub(colour2, 6, 7), 16)\n  local ratio = math.min(1, math.max(0, ratio))\n  local r = math.floor(r1 * (1 - ratio) + r2 * ratio + .5)\n  local g = math.floor(g1 * (1 - ratio) + g2 * ratio + .5)\n  local b = math.floor(b1 * (1 - ratio) + b2 * ratio + .5)\n  return string.format("#%02x%02x%02x", r, g, b)\nend\n'),c=
$.Blockly.Lua.valueToCode(a,"COLOUR1",$.Blockly.Lua.ORDER_NONE)||"'#000000'",d=$.Blockly.Lua.valueToCode(a,"COLOUR2",$.Blockly.Lua.ORDER_NONE)||"'#000000'";a=$.Blockly.Lua.valueToCode(a,"RATIO",$.Blockly.Lua.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",$.Blockly.Lua.ORDER_HIGH]};var module$exports$Blockly$Lua$all={};
$.Blockly.Lua.__namespace__=$;
return $.Blockly.Lua;
}));


//# sourceMappingURL=lua_compressed.js.map
