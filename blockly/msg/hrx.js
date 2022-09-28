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

Blockly.Msg["ADD_COMMENT"] = "Kommentar hinzufüche";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";  // untranslated
Blockly.Msg["CHANGE_VALUE_TITLE"] = "Neie Variable...";
Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";  // untranslated
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Collapsed blocks contain warnings.";  // untranslated
Blockly.Msg["COLLAPSE_ALL"] = "Blocke zusammerfalte";
Blockly.Msg["COLLAPSE_BLOCK"] = "Block zusammerfalte";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "Farreb 1";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "mit Farreb 2";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";  // untranslated
Blockly.Msg["COLOUR_BLEND_RATIO"] = "im Verhältniss";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "misch";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Vermischt 2 Farwe mit konfigurierbare Farrebverhältniss (0.0 - 1.0).";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://hrx.wikipedia.org/wiki/Farreb";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Wähl en Farreb von der Palett.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "zufälliche Farwe";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Wähl en Farreb noh dem Zufallsprinzip.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "blau";
Blockly.Msg["COLOUR_RGB_GREEN"] = "grün";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";  // untranslated
Blockly.Msg["COLOUR_RGB_RED"] = "rot";
Blockly.Msg["COLOUR_RGB_TITLE"] = "Färreb mit";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Kreiere ene Farreb mit sellrbst definierte rot, grün und blau Wearte. All Wearte müsse zwischich 0 und 100 liehe.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "ausbreche aus der Schleif";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "mit der nächste Iteration fortfoohre aus der Schleifa";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Die umgebne Schleif beenne.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Die Oonweisung abbreche und mit der nächste Schleifiteration fortfoohre.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Warnung: Die block sollt nuar in en Schleif verwennet sin.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "Für Weart %1 aus der List %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Füahr en Oonweisung für jede Weart in der List aus und setzt dabei die Variable \"%1\" uff den aktuelle List Weart.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg["CONTROLS_FOR_TITLE"] = "Zähl %1 von %2 bis %3 mit %4";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Zähl die Variable \"%1\" von enem Startweart bis zu enem Zielweart und füahrefür jede Weart en Oonweisung aus.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "En weitre Bedingung hinzufüche.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "En orrer Bedingung hinzufüche, füahrt en Oonweisung aus falls ken Bedingung zutrifft.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Hinzufüche, entferne orrer sortiere von Sektione";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "orrer";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "orrer wenn";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "wenn";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Wenn en Bedingung woahr (true) ist, dann füahr en Oonweisung aus.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Wenn en Bedingung woahr (true) ist, dann füahr die earscht Oonweisung aus.  Ansonscht füahr die zwooite Oonweisung aus.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Wenn der erschte Bedingung woahr (true) ist, dann füahr die erschte Oonweisung aus.  Orrer wenn die zwooite Bedingung woahr (true) ist, dann füahr die zwooite Oonweisung aus.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Wenn der erscht Bedingung woahr (true) ist, dann füahr die erschte Oonweisung aus.  Orrer wenn die zwooite Bedingung woahr (true) ist, dann füahr die zwooite Oonweisung aus.  Falls ken der beide Bedingungen woahr (true) ist, dann füahr die dritte Oonweisung aus.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://hrx.wikipedia.org/wiki/For-Schleif";
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "mach";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "wiederhol %1 mol";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "En Oonweisung meahrfach ausführe.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "Repetiere bis";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "Repetier solang";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Füahr die Oonweisung solang aus wie die Bedingung falsch (false) ist.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Füahr die Oonweisung solang aus wie die Bedingung woahr (true) ist.";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "All %1 Bausten lösche?";
Blockly.Msg["DELETE_BLOCK"] = "Block lösche";
Blockly.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";  // untranslated
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";  // untranslated
Blockly.Msg["DELETE_X_BLOCKS"] = "Block %1 lösche";
Blockly.Msg["DIALOG_CANCEL"] = "Abbreche";
Blockly.Msg["DIALOG_OK"] = "Okay";
Blockly.Msg["DISABLE_BLOCK"] = "Block deaktivieren";
Blockly.Msg["DUPLICATE_BLOCK"] = "Kopieren";
Blockly.Msg["DUPLICATE_COMMENT"] = "Duplicate Comment";  // untranslated
Blockly.Msg["ENABLE_BLOCK"] = "Block aktivieren";
Blockly.Msg["EXPAND_ALL"] = "Blocke expandiere";
Blockly.Msg["EXPAND_BLOCK"] = "Block entfalte";
Blockly.Msg["EXTERNAL_INPUTS"] = "External Inputsexterne Ingänge";
Blockly.Msg["HELP"] = "Hellef";
Blockly.Msg["INLINE_INPUTS"] = "interne Ingänge";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "Generier/erzeich en leear List";
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Generier/erzeich en leear List ohne Inhalt.";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "List";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Hinzufüche, entferne und sortiere von Elemente.";
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "Erzeich List mit";
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "En Element zur List hinzufüche.";
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Generier/erzeich en List mit konfigurierte Elemente.";
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "earste";
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "#te von hinne";
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET"] = "Nehm";
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "Nehm und entfern";
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "letzte";
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "zufälliches";
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "Entfern";
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Extrahiert das earste Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Extrahiert das Element zu en definierte Stell von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Extrahiert das letzte Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Extrahiert en zufälliches Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Extrahiert und entfernt das earste Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Extrahiert und entfernt das Element zu en definierte Stell von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Extrahiert und entfernt das letzte Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Extrahiert und entfernt en zufälliches Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Entfernt das earste Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Entfernt das Element zu en definierte Stell von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Entfernt das letzte Element von der List.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Entfernt en zufälliches Element von der List.";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "zu # vom End";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "zu #";
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "zum Letzte";
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "hol Unnerliste vom Earste";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "hol Unnerliste von # vom End";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "hol Unnerlist von #";
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Generiert en Kopie von en definierte Tel von en List.";
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 ist das letzte Element.";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 ist das earschte Element.";
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "Such earstes Voarkommniss";
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "Such letztes Voarkommniss";
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Sucht die Position (index) von en Element in der List Gebt %1 zurück wenn nixs gefunn woard.";
Blockly.Msg["LISTS_INLIST"] = "in der List";
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 ist leear?";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Ist woahr (true), wenn die List leear ist.";
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg["LISTS_LENGTH_TITLE"] = "länge %1";
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Die Oonzoohl von Elemente in der List.";
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_REPEAT_TITLE"] = "Erzich List mit Element %1 wiederhol das %2 mol";
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Erzeicht en List mit en variable Oonzoohl von Elemente";
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";  // untranslated
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "uff";
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "tue ren setz an";
Blockly.Msg["LISTS_SET_INDEX_SET"] = "setz";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Tut das Element an en Oonfang von en List ren setze.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Tut das Element ren setze an en definierte Stell an en List.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Oonhängt das Element zu en List sei End.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Tut das Element zufällich an en List ren setze.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Sets the first item in a list.Setzt das earschte Element an en list.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Setzt das Element zu en definierte Stell in en List.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Setzt das letzte Element an en List.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Setzt en zufälliches Element an en List.";
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ascending";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "descending";  // untranslated
Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3";  // untranslated
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numeric";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabetic";  // untranslated
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "make list from text";  // untranslated
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "make text from list";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Join a list of texts into one text, separated by a delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Split text into a list of texts, breaking at each delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "with delimiter";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "falsch";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Ist entweder woahr (true) orrer falsch (false)";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "woahr";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://hrx.wikipedia.org/wiki/Vergleich_%28Zahlen%29";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Ist woahr (true) wenn beide Wearte identisch sind.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Ist woahr (true) wenn der erschte Weart grösser als der zwooite Weart ist.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Ist woahr (true) wenn der erschte Weart grösser als orrer gleich gross wie zwooite Weart ist.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Ist woahr (true) wenn der earschte Weart klener als der zwooite Weart ist.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Ist woahr (true) wenn der earscht Weart klener als orrer gleich gross wie zwooite Weart ist.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Ist woahr (true) wenn beide Wearte unnerschiedlich sind.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "net %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Ist woahr (true) wenn der Ingäweweart falsch (false) ist.  Ist falsch (false) wenn der Ingäweweart woahr (true) ist.";
Blockly.Msg["LOGIC_NULL"] = "null";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Is NULL.";
Blockly.Msg["LOGIC_OPERATION_AND"] = "und";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg["LOGIC_OPERATION_OR"] = "orrer";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Ist woahr (true) wenn beide Wearte woahr (true) sind.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Ist woahr (true) wenn en von der beide Wearte woahr (true) ist.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "test";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "wenn falsch";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "wenn woahr";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Üwerprüft en Bedingung \"test\". Wenn die Bedingung woahr ist weerd der \"wenn woahr\" Weart zurückgeb, annerfalls der \"wenn falsch\" Weart";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://hrx.wikipedia.org/wiki/Grundrechenoort";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Ist die Summe zwooier Wearte.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Ist der Quotient zwooier Wearte.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Ist die Differenz zwooier Wearte.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Ist das Produkt zwooier Wearte.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Ist der earschte Weart potenziert mit dem zoiten Weart.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";  // untranslated
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2";  // untranslated
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";  // untranslated
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://hrx.wikipedia.org/wiki/Inkrement_und_Dekrement";
Blockly.Msg["MATH_CHANGE_TITLE"] = "mach höcher / erhöhe %1 um %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Addiert en Weart zur Variable \"%1\" hinzu.";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://hrx.wikipedia.org/wiki/Mathematische_Konstante";
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Mathematische Konstante wie: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…) oder ∞ (unendlich).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "begrenze %1 von %2 bis %3";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Begrenzt den Weartebereich mittels von / bis Wearte. (inklusiv)";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";  // untranslated
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "ist telbar/kann getelt sin doorrich";
Blockly.Msg["MATH_IS_EVEN"] = "ist grood";
Blockly.Msg["MATH_IS_NEGATIVE"] = "ist negativ";
Blockly.Msg["MATH_IS_ODD"] = "ist ungrood";
Blockly.Msg["MATH_IS_POSITIVE"] = "ist positiv";
Blockly.Msg["MATH_IS_PRIME"] = "ist en Primenzoohl";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Üwerprüft ob en Zoohl grood, ungrood, en Primenzoohl, ganzzoohlich, positiv, negativ orrer doorrich en zwooite Zoohl telbar ist.  Gebt woahr (true) orrer falsch (false) zurück.";
Blockly.Msg["MATH_IS_WHOLE"] = "ganze Zoohl";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://hrx.wikipedia.org/wiki/Modulo";
Blockly.Msg["MATH_MODULO_TITLE"] = "Rest von %1 ÷ %2";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Der Rest noh en Division.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";  // untranslated
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://hrx.wikipedia.org/wiki/Zoohl";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "En Zoohl.";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "Mittelweart en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "Maximalweart en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "Median von en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "Minimalweart von en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "Restweart von en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "Zufallsweart von en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "Standart/Padrong Abweichung von en List";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "Summe von en List";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Ist der Doorrichschnittsweart von aller Wearte in en List.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Ist der grösste Weart in en List.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Ist der Zentralweart von aller Wearte in en List.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Ist der klenste Weart in en List.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Findt den am häifichste voarkommend Weart in en List.  Falls ken Weart öftersch voarkomme als all annre, weard die originale List zurückgeche";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Geb en Zufallsweart aus der List zurück.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Ist die standartiesierte/padronisierte Standartabweichung/Padrongabweichung von aller Wearte in der List";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Ist die Summ aller Wearte in en List.";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://hex.wikipedia.org/wiki/Zufallszoohle";
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "Zufallszoohl (0.0 -1.0)";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Generier/erzeich en Zufallszoohl zwischich 0.0 (inklusiv) und 1.0 (exklusiv).";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://hrx.wikipedia.org/wiki/Zufallszahlen";
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "ganzoohlicher Zufallswearte zwischich %1 bis %2";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Generier/erzeich en ganzähliche Zufallsweart zwischich zwooi Wearte (inklusiv).";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://hrx.wikipedia.org/wiki/Runden";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "runde";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "ab runde";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "uff runde";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "En Zoohl uff orrer ab runde.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://hrx.wikipedia.org/wiki/Quadratwoorzel";
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "Absolutweart";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "Quadratwoorzel";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Ist der Absolutweart von en Weart.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Ist Weart von der Exponentialfunktion von en Weart.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Ist der natüarliche Logarithmus von en Weart.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Ist der dekoodische Logarithmus von en Weart.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Negiert en Weart.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Rechnet 10 hoch Ingäbweart.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Ist die Qudratwoorzel von en Weart.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";  // untranslated
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";  // untranslated
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";  // untranslated
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";  // untranslated
Blockly.Msg["MATH_TRIG_COS"] = "cos";  // untranslated
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://hrx.wikipedia.org/wiki/Trigonometrie";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";  // untranslated
Blockly.Msg["MATH_TRIG_TAN"] = "tan";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Ist der Arcuscosinus von en Ingabweart.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Ist der Arcussinus von en Ingäbweart.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Ist der Arcustangens von en Ingäbweart.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Ist der Cosinus von en Winkel.";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Ist der Sinus von en Winkel.";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Ist der Tangens von en Winkel.";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Create colour variable...";  // untranslated
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";  // untranslated
Blockly.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";  // untranslated
Blockly.Msg["NEW_VARIABLE"] = "Neie Variable...";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "Die neie Variable sei Noome:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "New variable type:";  // untranslated
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "allow statements";  // untranslated
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "mit:";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://hrx.wikipedia.org/wiki/Prozedur_%28Programmierung%29";
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Ruf en Funktionsblock ohne Rückgäweart uff.";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://hrx.wikipedia.org/wiki/Prozedur_%28Programmierung%29";
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Ruf en Funktionsblock mit Rückgäbweart uff.";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "mit:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "Generier/erzeich \"Uffruf %1\"";
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function...";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "Funktionsblock";
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "zu";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "En Funktionsblock ohne Rückgäbweart.";
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "geb zurück";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "En Funktionsblock mit Rückgäbweart.";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Warnung: die Funktionsblock hot doppelt Parameter.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Markiear Funktionsblock";
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "Wenn der earste Weart woahr (true) ist, Geb den zwooite Weart zurück.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Warnung: Der Block därref nuar innich en Funktionsblock genutzt sin.";
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "Markiear Funktionsblock";
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Generier/erzeich \"Uffruf %1\"";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "Parameter";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Variable:";
Blockly.Msg["REDO"] = "Redo";  // untranslated
Blockly.Msg["REMOVE_COMMENT"] = "Kommentar entferne";
Blockly.Msg["RENAME_VARIABLE"] = "Die neie Variable sei Noome:";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "All \"%1\" Variable umbenenne in:";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_APPEND_TITLE"] = "An %1 Text oonhänge %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Text an die Variable \"%1\" oonhänge.";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "umwandle in klenbuchstoobe";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "umwandle in Wörter";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "umwandle in GROSSBUCHSTOOBE";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Wandelt Schreibweise von Texte um, in Grossbuchstoobe, Klenbuchstoobe orrer den earste Buchstoob von jedes Wort gross und die annre klen.";
Blockly.Msg["TEXT_CHARAT_FIRST"] = "hol earschte Buchstoob";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "hol Buchstoob # von End";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "hol Buchstoob #";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg["TEXT_CHARAT_LAST"] = "hol letztes Wort";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "hol zufälliches Buchstoob";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_CHARAT_TITLE"] = "in text %1 %2";  // untranslated
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Extrahiear en Buchstoob von en spezifizierte Position.";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";  // untranslated
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2";  // untranslated
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Count how many times some text occurs within some other text.";  // untranslated
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "En Element zum Text hinzufüche.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "verbinne";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Hinzufüche, entfernne und sortiere von Elemente.";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "bis #te Buchstoob von hinne";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "bis Buchstoob #te";
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "bis letzte Buchstoob";
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "in Text";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "earschte Buchstoob";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "hol #te Buchstoob von hinne";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "hol substring Buchstoob #te";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Schickt en bestimmstes Tel von dem Text retuar.";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "Such der Begriff sein earstes Voarkommniss";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "Suche der Begriff sein letztes Vorkommniss.";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "im Text %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Findt das earste / letzte Voarkommniss von en Suchbegriffes in enem Text.  Gebt die Position von dem Begriff orrer %1 zurück.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 ist leer?";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Ist woahr (true), wenn der Text leer ist.";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "Erstell Text aus";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Erstellt en Text doorrich das verbinne von mehre Textelemente.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_LENGTH_TITLE"] = "läng %1";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Die Oonzoohl von Zeiche in enem Text. (inkl. Leerzeiche)";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg["TEXT_PRINT_TITLE"] = "Ausgäb %1";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Geb den Inhalt von en Variable aus.";
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Frocht den Benutzer noh en Zoohl.";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Frocht den Benutzer noh enem Text.";
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "Frächt noh Zoohl mit Hinweis";
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "Frocht noh Text mit Hinweis";
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";  // untranslated
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3";  // untranslated
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Replace all occurances of some text within some other text.";  // untranslated
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";  // untranslated
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Reverses the order of the characters in the text.";  // untranslated
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)https://hrx.wikipedia.org/wiki/Zeichenkette";
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "En Buchstoob, Text orrer Satz.";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "entfern Leerzeiche von Oonfang und End Seite";
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "entferne Leerzeiche von Oonfang Seite";
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "entferne Leerzeiche von End Seite von";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Entfernt Leerzeiche vom Oonfang und / orrer End von en Text.";
Blockly.Msg["TODAY"] = "Today";  // untranslated
Blockly.Msg["UNDO"] = "Undo";  // untranslated
Blockly.Msg["UNNAMED_KEY"] = "unnamed";  // untranslated
Blockly.Msg["VARIABLES_CALL_OUT_TOOLTIP"] = "Returns the value of a method from current variable.";  // untranslated
Blockly.Msg["VARIABLES_CALL_TOOLTIP"] = "Calls a method from current variable.";  // untranslated
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "Element";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Generier/erzeiche \"Schreibe %1\"";
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Gebt der Variable sein Weart zurück.";
Blockly.Msg["VARIABLES_SET"] = "Schreib %1 zu %2";
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Generier/erzeich \"Lese %1\"";
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Setzt en Variable sei Weart.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "A variable named '%1' already exists.";  // untranslated
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "A variable named '%1' already exists for another type: '%2'.";  // untranslated
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";  // untranslated
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something...";  // untranslated
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
