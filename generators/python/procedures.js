/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Python for procedure blocks.
 */
'use strict';

goog.module('Blockly.Python.procedures');

const Python = goog.require('Blockly.Python');
const Variables = goog.require('Blockly.Variables');
const {NameType} = goog.require('Blockly.Names');


Python['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  const globals = [];
  const workspace = block.workspace;
  const usedVariables = Variables.allUsedVarModels(workspace) || [];
  for (let i = 0, variable; (variable = usedVariables[i]); i++) {
    const varName = variable.name;
    if (block.getVars().indexOf(varName) === -1) {
      globals.push(Python.nameDB_.getName(varName, NameType.VARIABLE));
    }
  }
  // Add developer variables.
  const devVarList = Variables.allDeveloperVariables(workspace);
  for (let i = 0; i < devVarList.length; i++) {
    globals.push(
        Python.nameDB_.getName(devVarList[i], NameType.DEVELOPER_VARIABLE));
  }

  const globalString = globals.length ?
      Python.INDENT + 'global ' + globals.join(', ') + '\n' :
      '';
  const funcName =
      Python.nameDB_.getName(block.getFieldValue('NAME'), NameType.PROCEDURE);
  let xfix1 = '';
  if (Python.STATEMENT_PREFIX) {
    xfix1 += Python.injectId(Python.STATEMENT_PREFIX, block);
  }
  if (Python.STATEMENT_SUFFIX) {
    xfix1 += Python.injectId(Python.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = Python.prefixLines(xfix1, Python.INDENT);
  }
  let loopTrap = '';
  if (Python.INFINITE_LOOP_TRAP) {
    loopTrap = Python.prefixLines(
        Python.injectId(Python.INFINITE_LOOP_TRAP, block), Python.INDENT);
  }
  let branch = Python.statementToCode(block, 'STACK');
  let returnValue =
      Python.valueToCode(block, 'RETURN', Python.ORDER_NONE) || '';
  let xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = Python.INDENT + 'return ' + returnValue + '\n';
  } else if (!branch) {
    branch = Python.PASS;
  }
  const args = ['self'];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i+1] = Python.nameDB_.getName(variables[i], NameType.VARIABLE);
  }

  var initVariables = "";
  for(let i = 1; i < args.length; i++){
    initVariables = initVariables + Python.INDENT + "self." + args[i] + " = " + args[i] + "\n";   
  }
  // REMOVENDO O GLOBAL STRING
  // let code = 'def ' + funcName + '(' + args.join(', ') + '):\n' + globalString +
  //     xfix1 + loopTrap + branch + xfix2 + returnValue;

  let code = 'def ' + funcName + '(' + args.join(', ') + '):\n' + initVariables +
      xfix1 + loopTrap + branch + xfix2 + returnValue;
  code = Python.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Python.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Python['procedures_defnoreturn'] = Python['procedures_defreturn'];

Python['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  const funcName =
      Python.nameDB_.getName(block.getFieldValue('NAME'), NameType.PROCEDURE);
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = Python.valueToCode(block, 'ARG' + i, Python.ORDER_NONE) || 'None';
  }
  const code = 'self.' + funcName + '(' + args.join(', ') + ')';
  return [code, Python.ORDER_FUNCTION_CALL];
};

Python['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  // Generated code is for a function call as a statement is the same as a
  // function call as a value, with the addition of line ending.
  const tuple = Python['procedures_callreturn'](block);
  return tuple[0] + '\n';
};

Python['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  const condition =
      Python.valueToCode(block, 'CONDITION', Python.ORDER_NONE) || 'False';
  let code = 'if ' + condition + ':\n';
  if (Python.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the return is triggered.
    code += Python.prefixLines(
        Python.injectId(Python.STATEMENT_SUFFIX, block), Python.INDENT);
  }
  if (block.hasReturnValue_) {
    const value =
        Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || 'None';
    code += Python.INDENT + 'return ' + value + '\n';
  } else {
    code += Python.INDENT + 'return\n';
  }
  return code;
};


Python["procedures_setup"] = function (block) {
  let branch = Python.statementToCode(block, "DO") || Python.PASS;
  // let return_value = Python.valueToCode(
  //   block,
  //   "RETURN",
  //   Python.ORDER_NONE
  // );
  // const code =
  //   "def setup(self):\n" + branch + "  return self.defineActor(" + return_value + ")\n";
  const code =
    "def setup(self):\n" + branch + "\n";
  return code;
};

Python["procedures_setup_supervisor"] = function (block) {
  let branch = Python.statementToCode(block, "DO") || Python.PASS;
  // let return_value = Python.valueToCode(
  //   block,
  //   "RETURN",
  //   Python.ORDER_NONE
  // );
  // const code =
  //   "def setup(self, actors):\n" + branch + "  return self.defineActor(" + return_value + ")\n";
  const code =
    "def setup(self, actors):\n" + branch + "\n";
  return code;
};

Python["procedures_run"] = function (block) {
  let branch = Python.statementToCode(block, "DO") || Python.PASS;
  const code =
    "def run(self):\n" + branch + "\n";
  return code;
};