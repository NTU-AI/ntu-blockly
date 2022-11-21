/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define([], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory();
  } else { // Browser
    var messages = factory();
    for (var key in messages) {
      root.Blockly.Msg[key] = messages[key];
    }
  }
}(this, function() {
// This file was automatically generated.  Do not modify.

'use strict';

var Blockly = Blockly || { Msg: Object.create(null) };

Blockly.Msg["ADD_COMMENT"] = "Дадаць камэнтар";
Blockly.Msg["CALL_TEXT"] = "call";  // untranslated
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Немагчыма выдаліць зьменную «%1», таму што яна зьяўляецца часткай вызначэньня функцыі «%2»";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "Зьмяніць значэньне:";
Blockly.Msg["CLEAN_UP"] = "Ачысьціць блёкі";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Згорнутыя блёкі ўтрымліваюць папярэджаньні.";
Blockly.Msg["COLLAPSE_ALL"] = "Згарнуць блёкі";
Blockly.Msg["COLLAPSE_BLOCK"] = "Згарнуць блёк";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "колер 1";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "колер 2";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";  // untranslated
Blockly.Msg["COLOUR_BLEND_RATIO"] = "дзеля";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "зьмяшаць";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Зьмешвае два колеры ў дадзенай прапорцыі (0.0 — 1.0)";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%B5%D1%80";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Абярыце колер з палітры.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "выпадковы колер";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Абраць выпадковы колер.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "сіняга";
Blockly.Msg["COLOUR_RGB_GREEN"] = "зялёнага";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";  // untranslated
Blockly.Msg["COLOUR_RGB_RED"] = "чырвонага";
Blockly.Msg["COLOUR_RGB_TITLE"] = "колер з";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Стварыць колер з абранымі прапорцыямі чырвонага, зялёнага і сіняга. Усе значэньні павінны быць ад 0 да 100.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "перарваць цыкль";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "працягнуць з наступнага кроку цыклю";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Спыніць гэты цыкль.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Прапусьціць рэшту цыклю і перайсьці да наступнага кроку.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Увага: гэты блёк можа быць выкарыстаны толькі ў цыклі.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "для кожнага элемэнта %1 у сьпісе %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Для кожнага элемэнту сьпісу прысвойвае зьменнай '%1' ягонае значэньне і выконвае пэўныя апэрацыі.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg["CONTROLS_FOR_TITLE"] = "лічыць з %1 ад %2 да %3 па %4";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Прысвойвае зьменнай \"%1\" значэньні ад пачатковага да канчатковага значэньня, улічваючы зададзены крок, і выконвае абраныя блёкі.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Дадаць умову да блёку «калі».";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Дадаць заключную ўмову для ўсіх астатніх варыянтаў блёку «калі».";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Дадаць, выдаліць ці пераставіць сэкцыі для пераканфігураваньня гэтага блёку «калі».";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "інакш";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "інакш, калі";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "калі";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Калі значэньне ісьціна, выканаць пэўныя апэрацыі.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Калі значэньне ісьціна, выканаць першы блёк апэрацыяў, інакш выканаць другі блёк.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Калі першае значэньне ісьціна, выканаць першы блёк апэрацыяў. Інакш, калі другое значэньне ісьціна, выканаць другі блёк апэрацыяў.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Калі першае значэньне ісьціна, выканаць першы блёк апэрацыяў. Інакш, калі другое значэньне ісьціна, выканаць другі блёк апэрацыяў. Калі ніводнае з значэньняў не сапраўднае, выканаць апошні блёк апэрацыяў.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://en.wikipedia.org/wiki/For_loop";
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "выканаць";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "паўтарыць %1 раз(ы)";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Выконвае апэрацыі некалькі разоў.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "паўтараць, пакуль не";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "паўтараць, пакуль";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Пакуль значэньне хлусьня, выконваць пэўныя апэрацыі.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Пакуль значэньне ісьціна, выконваць пэўныя апэрацыі.";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "Выдаліць усе блёкі %1?";
Blockly.Msg["DELETE_BLOCK"] = "Выдаліць блёк";
Blockly.Msg["DELETE_VARIABLE"] = "Выдаліць зьменную «%1»";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Выдаліць %1 выкарыстаньняў зьменнай «%2»?";
Blockly.Msg["DELETE_X_BLOCKS"] = "Выдаліць %1 блёкі";
Blockly.Msg["DIALOG_CANCEL"] = "Скасаваць";
Blockly.Msg["DIALOG_OK"] = "OK";
Blockly.Msg["DISABLE_BLOCK"] = "Адключыць блёк";
Blockly.Msg["DUPLICATE_BLOCK"] = "Капіяваць";
Blockly.Msg["DUPLICATE_COMMENT"] = "Прадубляваць камэнтар";
Blockly.Msg["ENABLE_BLOCK"] = "Уключыць блёк";
Blockly.Msg["EXPAND_ALL"] = "Разгарнуць блёкі";
Blockly.Msg["EXPAND_BLOCK"] = "Разгарнуць блёк";
Blockly.Msg["EXTERNAL_INPUTS"] = "Зьнешнія ўваходы";
Blockly.Msg["HELP"] = "Дапамога";
Blockly.Msg["INLINE_INPUTS"] = "Унутраныя ўваходы";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "стварыць пусты сьпіс";
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Вяртае сьпіс даўжынёй 0, які ня ўтрымлівае запісаў зьвестак";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "сьпіс";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Дадаць, выдаліць ці пераставіць сэкцыі для пераканфігураваньня гэтага блёку.";
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "стварыць сьпіс з";
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Дадаць элемэнт да сьпісу.";
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Ставарае сьпіс зь любой колькасьцю элемэнтаў.";
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "першы";
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "№ з канца";
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET"] = "атрымаць";
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "атрымаць і выдаліць";
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "апошні";
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "выпадковы";
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "выдаліць";
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Вяртае першы элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Вяртае элемэнт у пазначанай пазыцыі ў сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Вяртае апошні элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Вяртае выпадковы элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Выдаляе і вяртае першы элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Выдаляе і вяртае элемэнт у пазначанай пазыцыі ў сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Выдаляе і вяртае апошні элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Выдаляе і вяртае выпадковы элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Выдаляе першы элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Выдаляе элемэнт у пазначанай пазыцыі ў сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Выдаляе апошні элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Выдаляе выпадковы элемэнт у сьпісе.";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "па № з канца";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "да #";
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "да апошняга";
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "атрымаць падсьпіс зь першага";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "атрымаць падсьпіс з № з канца";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "атрымаць падсьпіс з №";
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Стварае копію пазначанай часткі сьпісу.";
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "№%1 — апошні элемэнт.";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "№%1 — першы элемэнт.";
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "знайсьці першае ўваходжаньне элемэнту";
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "знайсьці апошняе ўваходжаньне элемэнту";
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Вяртае індэкс першага/апошняга ўваходжаньня элемэнту ў сьпіс. Вяртае %1, калі элемэнт ня знойдзены.";
Blockly.Msg["LISTS_INLIST"] = "у сьпісе";
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 пусты";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Вяртае значэньне ісьціна, калі сьпіс пусты.";
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg["LISTS_LENGTH_TITLE"] = "даўжыня %1";
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Вяртае даўжыню сьпісу.";
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_REPEAT_TITLE"] = "стварыць сьпіс з элемэнту %1, які паўтараецца %2 разоў";
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Стварае сьпіс, які ўтрымлівае пададзеную колькасьць копіяў элемэнту.";
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "адваротна %1";
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Зьмяняе парадак копіі сьпісу на адваротны.";
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "як";
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "уставіць у";
Blockly.Msg["LISTS_SET_INDEX_SET"] = "усталяваць";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Устаўляе элемэнт у пачатак сьпісу.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Устаўляе элемэнт у пазначанай пазыцыі ў сьпісе.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Дадае элемэнт у канец сьпісу.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Выпадковым чынам устаўляе элемэнт у сьпіс.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Задае першы элемэнт у сьпісе.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Задае элемэнт у пазначанай пазыцыі ў сьпісе.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Задае апошні элемэнт у сьпісе.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Задае выпадковы элемэнт у сьпісе.";
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "па павелічэньні";
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "па зьмяншэньні";
Blockly.Msg["LISTS_SORT_TITLE"] = "сартаваць %1 %2 %3";
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Сартаваць копію сьпісу.";
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "паводле альфабэту, ігнараваць рэгістар";
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "як лікі";
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "паводле альфабэту";
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "стварыць сьпіс з тэксту";
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "стварыць тэкст са сьпісу";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Аб’ядноўвае сьпіс тэкстаў у адзін тэкст па падзяляльніках.";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Падзяліць тэкст у сьпіс тэкстаў, па падзяляльніках.";
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "з падзяляльнікам";
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "хлусьня";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Вяртае «ісьціна» ці «хлусьня».";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "ісьціна";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%9D%D1%8F%D1%80%D0%BE%D1%9E%D0%BD%D0%B0%D1%81%D1%8C%D1%86%D1%8C";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Вяртае «ісьціна», калі абодва ўводы роўныя.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Вяртае «ісьціна», калі першы ўвод большы за другі.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Вяртае «ісьціна», калі першы ўвод большы ці роўны другому.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Вяртае «ісьціна», калі першы ўвод меншы за другі.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Вяртае «ісьціна», калі першы ўвод меншы ці роўны другому.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Вяртае «ісьціна», калі абодва ўводы ня роўныя.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "не %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Вяртае «ісьціна», калі ўвод непраўдзівы. Вяртае «хлусьня», калі ўвод праўдзівы.";
Blockly.Msg["LOGIC_NULL"] = "нічога";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Вяртае нічога.";
Blockly.Msg["LOGIC_OPERATION_AND"] = "і";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg["LOGIC_OPERATION_OR"] = "ці";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Вяртае «ісьціна», калі абодва ўводы праўдзівыя.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Вяртае «ісьціна», калі прынамсі адзін з уводаў праўдзівы.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "тэст";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "калі хлусьня";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "калі ісьціна";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Праверыць умову ў 'тэст'. Калі ўмова праўдзівая, будзе вернутае значэньне «калі ісьціна»; інакш будзе вернутае «калі хлусьня».";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%90%D1%80%D1%8B%D1%82%D0%BC%D1%8D%D1%82%D1%8B%D0%BA%D0%B0";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Вяртае суму двух лікаў.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Вяртае дзель двух лікаў.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Вяртае рознасьць двух лікаў.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Вяртае здабытак двух лікаў.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Вяртае першы лік у ступені другога ліку.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 ад X:%1 Y:%2";
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Вяртае арктангенс пункту (X, Y) у градусах ад -180 да 180.";
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
Blockly.Msg["MATH_CHANGE_TITLE"] = "зьмяніць %1 на %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Дадае лічбу да зьменнай '%1'.";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%8D%D0%BC%D0%B0%D1%82%D1%8B%D1%87%D0%BD%D0%B0%D1%8F_%D0%BA%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B0";
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Вяртае адну з агульных канстантаў: π (3.141...), e (2.718...), φ (1.618...), sqrt(2) (1.414...), sqrt(½) (0,707...) або ∞ (бясконцасьць).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "абмежаваць %1 зьнізу %2 зьверху %3";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Абмяжоўвае колькасьць ніжняй і верхняй межамі (уключна).";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";  // untranslated
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "дзеліцца на";
Blockly.Msg["MATH_IS_EVEN"] = "парная";
Blockly.Msg["MATH_IS_NEGATIVE"] = "адмоўная";
Blockly.Msg["MATH_IS_ODD"] = "няпарная";
Blockly.Msg["MATH_IS_POSITIVE"] = "дадатная";
Blockly.Msg["MATH_IS_PRIME"] = "простая";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Правярае, ці зьяўляецца лік парным, няпарным, простым, станоўчым, адмоўным, ці ён дзеліцца на пэўны лік без астатку. Вяртае значэньне ісьціна або няпраўда.";
Blockly.Msg["MATH_IS_WHOLE"] = "цэлая";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";
Blockly.Msg["MATH_MODULO_TITLE"] = "рэшта дзяленьня %1 ÷ %2";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Вяртае рэшту дзяленьня двух лікаў.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";  // untranslated
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%9B%D1%96%D0%BA";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Лік.";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "сярэдняя ў сьпісе";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "мінімальная ў сьпісе";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "мэдыяна сьпісу";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "мінімальная ў сьпісе";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "рэжымы сьпісу";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "выпадковы элемэнт сьпісу";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "стандартнае адхіленьне сьпісу";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "Сума сьпісу";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Вяртае сярэднеарытмэтычнае значэньне лікавых значэньняў у сьпісе.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Вяртае найменшы лік у сьпісе.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Вяртае мэдыяну сьпісу.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Вяртае найменшы лік у сьпісе.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Вяртае сьпіс самых распаўсюджаных элемэнтаў у сьпісе.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Вяртае выпадковы элемэнт сьпісу.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Вяртае стандартнае адхіленьне сьпісу.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Вяртае суму ўсіх лікаў у сьпісе.";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "выпадковая дроб";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Вяртае выпадковую дроб у дыяпазоне ад 0,0 (уключна) да 1,0.";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "выпадковая цэлая з %1 для %2";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Вяртае выпадковы цэлы лік паміж двума зададзенымі абмежаваньнямі ўключна.";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "акругліць";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "акругліць да меншага";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "акругліць да большага";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Акругленьне ліку да большага ці меншага.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B_%D0%BA%D0%BE%D1%80%D0%B0%D0%BD%D1%8C";
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "модуль";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "квадратны корань";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Вяртае модуль ліку.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Вяртае e ў ступені ліку.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Вяртае натуральны лягарытм ліку.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Вяртае дзесятковы лягарытм ліку.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Вяртае супрацьлеглы лік.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Вяртае 10 у ступені ліку.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Вяртае квадратны корань ліку.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";  // untranslated
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";  // untranslated
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";  // untranslated
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";  // untranslated
Blockly.Msg["MATH_TRIG_COS"] = "cos";  // untranslated
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://be-x-old.wikipedia.org/wiki/%D0%A2%D1%80%D1%8B%D0%B3%D0%B0%D0%BD%D0%B0%D0%BC%D1%8D%D1%82%D1%80%D1%8B%D1%8F#.D0.A2.D1.80.D1.8B.D0.B3.D0.B0.D0.BD.D0.B0.D0.BC.D1.8D.D1.82.D1.80.D1.8B.D1.87.D0.BD.D1.8B.D1.8F_.D1.84.D1.83.D0.BD.D0.BA.D1.86.D1.8B.D1.96";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";  // untranslated
Blockly.Msg["MATH_TRIG_TAN"] = "tan";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Вяртае арккосынус ліку.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Вяртае арксынус ліку.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Вяртае арктангэнс ліку.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Вяртае косынус кута ў градусах.";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Вяртае сынус кута ў градусах.";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Вяртае тангэнс кута ў градусах.";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Стварыць зьменную колеру…";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Стварыць лікавую зьменную…";
Blockly.Msg["NEW_STRING_VARIABLE"] = "Стварыць радковую зьменную…";
Blockly.Msg["NEW_VARIABLE"] = "Стварыць зьменную…";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "Імя новай зьменнай:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Новы тып зьменнай:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "дазволіць зацьвярджэньне";
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "з:";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Запусьціць функцыю вызначаную карыстальнікам '%1'.";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Запусьціць функцыю вызначаную карыстальнікам '%1' і выкарыстаць яе вынік.";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "з:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "Стварыць '%1'";
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Апішыце гэтую функцыю…";
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "зрабіць што-небудзь";
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "да";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Стварае функцыю бяз выніку.";
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "вярнуць";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Стварае функцыю з вынікам.";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Увага: гэтая функцыя мае парамэтры-дублікаты.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Падсьвяціць вызначэньне функцыі";
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "Калі значэньне ісьціна, вярнуць другое значэньне.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Папярэджаньне: гэты блёк можа выкарыстоўвацца толькі ў вызначанай функцыі.";
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "назва парамэтру:";
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Дадаць уваходныя парамэтры ў функцыю.";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "парамэтры";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Дадаць, выдаліць ці запісаць чаргу ўваходных парамэтраў для гэтай функцыі.";
Blockly.Msg["PROCEDURES_RUN_TITLE"] = "Run";  // untranslated
Blockly.Msg["PROCEDURES_RUN_TOOLTIP"] = "Block that contains the blocks related to the execution of the program.";  // untranslated
Blockly.Msg["PROCEDURES_SETUP_SUPERVISOR_TOOLTIP"] = "Block that contains the blocks related to the setup of the supervisor.";  // untranslated
Blockly.Msg["PROCEDURES_SETUP_TITLE"] = "Setup";  // untranslated
Blockly.Msg["PROCEDURES_SETUP_TOOLTIP"] = "Block that contains the blocks related to the setup of the program.";  // untranslated
Blockly.Msg["REDO"] = "Паўтарыць";
Blockly.Msg["REMOVE_COMMENT"] = "Выдаліць камэнтар";
Blockly.Msg["RENAME_VARIABLE"] = "Перайменаваць зьменную…";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Перайменаваць усе назвы зьменных '%1' на:";
Blockly.Msg["RETURN_TEXT"] = "return";  // untranslated
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_APPEND_TITLE"] = "да %1 дадаць тэкст %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Дадаць які-небудзь тэкст да зьменнай '%1'.";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "да ніжняга рэгістру";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "Вялікія Першыя Літары";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "да ВЕРХНЯГА РЭГІСТРУ";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Вярнуць копію тэксту зь іншай велічынёй літар.";
Blockly.Msg["TEXT_CHARAT_FIRST"] = "узяць першую літару";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "узяць літару № з канца";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "узяць літару №";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg["TEXT_CHARAT_LAST"] = "узяць апошнюю літару";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "узяць выпадковую літару";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_CHARAT_TITLE"] = "у тэксьце %1 %2";
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Вяртае літару ў пазначанай пазыцыі.";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "падлічыць %1 сярод %2";
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Падлічвае колькі разоў нейкі тэкст сустракаецца ўнутры нейкага іншага тэксту.";
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Дадаць элемэнт да тэксту.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "далучыць";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Дадайце, выдаліце ці зьмяніце парадак разьдзелаў для перадачы тэкставага блёку.";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "да літары № з канца";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "да літары №";
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "да апошняй літары";
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "у тэксьце";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "атрымаць падрадок зь першай літары";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "узяць падрадок зь літары № з канца";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "узяць падрадок зь літары №";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Вяртае пазначаную частку тэксту.";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "знайсьці першае ўваходжаньне тэксту";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "знайсьці апошняе ўваходжаньне тэксту";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "у тэксьце %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Вяртае індэкс першага/апошняга ўваходжаньня першага тэксту ў другі тэкст. Вяртае %1, калі тэкст ня знойдзены.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 пусты";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Вяртае значэньне ісьціна, калі тэкст пусты.";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "стварыць тэкст з";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Стварае фрагмэнт тэксту аб’яднаньнем любой колькасьці элемэнтаў.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_LENGTH_TITLE"] = "даўжыня %1";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Вяртае колькасьць літараў (у тым ліку прабелы) у пададзеным тэксьце.";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg["TEXT_PRINT_TITLE"] = "друкаваць %1";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Надрукаваць пазначаны тэкст, лічбу ці іншыя сымбалі.";
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Запытаць у карыстальніка лічбу.";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Запытаць у карыстальніка тэкст.";
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "запытаць лічбу з падказкай";
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "запытаць тэкст з падказкай";
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "замяніць %1 на %2 у %3";
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Замяняе ўсе выпадкі нейкага тэксту на іншы тэкст.";
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "адваротна %1";
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Мяняе парадак сымбаляў у тэксьце на адваротны.";
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Літара, слова ці радок тэксту.";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "абрэзаць прабелы з абодвух бакоў";
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "абрэзаць прабелы зь левага боку";
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "абрэзаць прабелы з правага боку";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Вяртае копію тэксту з прабеламі, выдаленымі ад аднаго ці абодвух бакоў.";
Blockly.Msg["TODAY"] = "Сёньня";
Blockly.Msg["UNDO"] = "Скасаваць";
Blockly.Msg["UNNAMED_KEY"] = "безназоўны";
Blockly.Msg["VARIABLES_CALL_OUT_TOOLTIP"] = "Returns the value of a method from current variable.";  // untranslated
Blockly.Msg["VARIABLES_CALL_TOOLTIP"] = "Calls a method from current variable.";  // untranslated
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "аб’ект";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Стварыць блёк «усталяваць %1»";
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Вяртае значэньне гэтай зьменнай.";
Blockly.Msg["VARIABLES_SET"] = "усталяваць %1 да %2";
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Стварыць блёк «атрымаць %1»";
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Надаць гэтай зьменнай значэньне ўстаўкі.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Зьменная з назвай «%1» ужо існуе.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "Зьменная з назвай «%1» ужо існуе зь іншым тыпам: «%2».";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Працоўная прастора Blockly";
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Напішыце што-небудзь…";
Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["LISTS_GET_INDEX_HELPURL"] = Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
Blockly.Msg["PROCEDURES_DEFRETURN_DO"] = Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];

Blockly.Msg["MATH_HUE"] = "230";
Blockly.Msg["LOOPS_HUE"] = "120";
Blockly.Msg["LISTS_HUE"] = "260";
Blockly.Msg["LOGIC_HUE"] = "210";
Blockly.Msg["VARIABLES_HUE"] = "330";
Blockly.Msg["TEXTS_HUE"] = "160";
Blockly.Msg["PROCEDURES_HUE"] = "290";
Blockly.Msg["COLOUR_HUE"] = "20";
Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
return Blockly.Msg;
})); 
