/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating JavaScript for unit test blocks.
 */
'use strict';

Blockly.JavaScript['unittest_main'] = function(block) {
  // Container for unit tests.
  var resultsVar = Blockly.JavaScript.nameDB_.getName('unittestResults',
      Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var functionName = Blockly.JavaScript.provideFunction_(
      'unittest_report',
      [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
        '  // Create test report.',
        '  var report = [];',
        '  var summary = [];',
        '  var fails = 0;',
        '  for (var i = 0; i < ' + resultsVar + '.length; i++) {',
        '    if (' + resultsVar + '[i][0]) {',
        '      summary.push(".");',
        '    } else {',
        '      summary.push("F");',
        '      fails++;',
        '      report.push("");',
        '      report.push("FAIL: " + ' + resultsVar + '[i][2]);',
        '      report.push(' + resultsVar + '[i][1]);',
        '    }',
        '  }',
        '  report.unshift(summary.join(""));',
        '  report.push("");',
        '  report.push("Number of tests run: " + ' + resultsVar +
              '.length);',
        '  report.push("");',
        '  if (fails) {',
        '    report.push("FAILED (failures=" + fails + ")");',
        '  } else {',
        '    report.push("OK");',
        '  }',
        '  return report.join("\\n");',
        '}']);
  // Setup global to hold test results.
  var code = resultsVar + ' = [];\n';
  // Say which test suite this is.
  code += 'console.log(\'\\n====================\\n\\n' +
      'Running suite: ' +
      block.getFieldValue('SUITE_NAME') +
       '\')\n';
  // Run tests (unindented).
  code += Blockly.JavaScript.statementToCode(block, 'DO')
      .replace(/^  /, '').replace(/\n  /g, '\n');
  // Send the report to the console (that's where errors will go anyway).
  code += 'console.log(' + functionName + '());\n';
  // Destroy results.
  code += resultsVar + ' = null;\n';
  return code;
};

Blockly.JavaScript['unittest_main'].defineAssert_ = function(block) {
  var resultsVar = Blockly.JavaScript.nameDB_.getName('unittestResults',
      Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var functionName = Blockly.JavaScript.provideFunction_(
      'assertEquals',
      [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
          '(actual, expected, message) {',
        '  // Asserts that a value equals another value.',
        '  if (!' + resultsVar + ') {',
        '    throw "Orphaned assert: " + message;',
        '  }',
        '  function equals(a, b) {',
        '    if (a === b) {',
        '      return true;',
        '    } else if ((typeof a === "number") && (typeof b === "number") &&',
        '        (a.toPrecision(15) == b.toPrecision(15))) {',
        '      return true;',
        '    } else if (a instanceof Array && b instanceof Array) {',
        '      if (a.length !== b.length) {',
        '        return false;',
        '      }',
        '      for (var i = 0; i < a.length; i++) {',
        '        if (!equals(a[i], b[i])) {',
        '          return false;',
        '        }',
        '      }',
        '      return true;',
        '    }',
        '    return false;',
        '  }',
        '  if (equals(actual, expected)) {',
        '    ' + resultsVar + '.push([true, "OK", message]);',
        '  } else {',
        '    ' + resultsVar + '.push([false, ' +
          '"Expected: " + expected + "\\nActual: " + actual, message]);',
        '  }',
        '}']);
  return functionName;
};

Blockly.JavaScript['unittest_assertequals'] = function(block) {
  // Asserts that a value equals another value.
  var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_NONE) || '';
  var actual = Blockly.JavaScript.valueToCode(block, 'ACTUAL',
      Blockly.JavaScript.ORDER_NONE) || 'null';
  var expected = Blockly.JavaScript.valueToCode(block, 'EXPECTED',
      Blockly.JavaScript.ORDER_NONE) || 'null';
  return Blockly.JavaScript['unittest_main'].defineAssert_() +
      '(' + actual + ', ' + expected + ', ' + message + ');\n';
};

Blockly.JavaScript['unittest_assertvalue'] = function(block) {
  // Asserts that a value is true, false, or null.
  var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_NONE) || '';
  var actual = Blockly.JavaScript.valueToCode(block, 'ACTUAL',
      Blockly.JavaScript.ORDER_NONE) || 'null';
  var expected = block.getFieldValue('EXPECTED');
  if (expected === 'TRUE') {
    expected = 'true';
  } else if (expected === 'FALSE') {
    expected = 'false';
  } else if (expected === 'NULL') {
    expected = 'null';
  }
  return Blockly.JavaScript['unittest_main'].defineAssert_() +
      '(' + actual + ', ' + expected + ', ' + message + ');\n';
};

Blockly.JavaScript['unittest_fail'] = function(block) {
  // Always assert an error.
  var resultsVar = Blockly.JavaScript.nameDB_.getName('unittestResults',
      Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var message = Blockly.JavaScript.quote_(block.getFieldValue('MESSAGE'));
  var functionName = Blockly.JavaScript.provideFunction_(
      'unittest_fail',
      [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
          '(message) {',
        '  // Always assert an error.',
        '  if (!' + resultsVar + ') {',
        '    throw "Orphaned assert fail: " + message;',
        '  }',
        '  ' + resultsVar + '.push([false, "Fail.", message]);',
        '}']);
  return functionName + '(' + message + ');\n';
};

Blockly.JavaScript['unittest_adjustindex'] = function(block) {
  var index = Blockly.JavaScript.valueToCode(block, 'INDEX',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  // Adjust index if using one-based indexing.
  if (block.workspace.options.oneBasedIndex) {
    if (Blockly.isNumber(index)) {
      // If the index is a naked number, adjust it right now.
      return [Number(index) + 1, Blockly.JavaScript.ORDER_ATOMIC];
    } else {
      // If the index is dynamic, adjust it in code.
      index = index + ' + 1';
    }
  } else if (Blockly.isNumber(index)) {
    return [index, Blockly.JavaScript.ORDER_ATOMIC];
  }
  return [index, Blockly.JavaScript.ORDER_ADDITION];
};
