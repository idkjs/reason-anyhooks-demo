// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Constant$ReasonAnyhooks = require("reason-anyhooks/src/Constant.bs.js");
var Hooks$ReasonAnyhooksDemo = require("./Hooks.bs.js");
var AnalogClock$ReasonAnyhooksDemo = require("./AnalogClock.bs.js");

function AnyHooksClock(Props) {
  var date = Hooks$ReasonAnyhooksDemo.useAnyHooksClock(/* () */0);
  var constant = Constant$ReasonAnyhooks.useConstant((function (param) {
          return 23;
        }));
  console.log("constant", constant);
  var anotherConstant = constant + 1 | 0;
  console.log("anotherConstant", anotherConstant);
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Using AnyHooks"), React.createElement("h1", undefined, "Using UseConstant, constant is: " + String(anotherConstant)), React.createElement(AnalogClock$ReasonAnyhooksDemo.make, {
                  date: date
                }));
}

var make = AnyHooksClock;

exports.make = make;
/* react Not a pure module */
