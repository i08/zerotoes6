var sTemp = "test string";
alert (typeof sTemp);
alert (typeof 86);

var oTemp;
var iNum = 0x1f;
var fNum = 5.0;
var fNum = 5.618e7;

var o = new Object();
var o = new Object;

var oBooleanObject = new Boolean(true);
var iNumber = oNumberObject.valueOf();

var oNumberObject = new Number(68);
alert(oNumberObject.toFixed(2));

var iNum1 = 25;
var iNum2 = ~iNum1;
var iResult = 25 ^ 3;
var iNew = iOld >>> 5;
var result2 = 5 + "5";

var iNum1 = 1, iNum = 2, iNum3 = 3;
do (i += 2;} while (i < 10);
while (i < 10) {
  i += 2;
}
for (var i = 0; i < iCount; i++) {
   alert(i);
}
start : i = 5;
for (var i=0; i < 10; i++) {
  for (var j=0; j < 10; j++) {
    if )i == 5 && j == 5) {
      continue outermost;
    }
  iNum++;
  }
}

var sMessage = "hello";
switch (i) {
  case 20: alert("20");
    break;
  case 30: alert("30");
    break;
  case 40: alert("40");
    break;
  default: alert("other");
}

function diff(iNum1, iNum2) {
  if (iNum1 > iNum2) {
    return iNum1 - iNum2;
  } else {
    return iNum2 - iNum1;
  }
}

function sayHi(sMessage) {
  if (sMessage == "bye") {
    return;
  }
  alert(sMessage);
}

function doAdd() {
  if (arguments.length == 1) {
    alert(arguments[0] + 5);
  } else if(arguments.length == 2) {
    alert(arguments[0] + arguments[1]);
  }
}

var sayHi = new Function("sName", "sMessage", "alert(\"Hello \" + sName + sMessage);");

function addNum(iNum1, iNum2) {
  function doAdd() {
    return iNum1 + iNum2 + iBaseNum;
  }
  return doAdd();
}

var oCar = new Object;
oCar.color = "red";
oCar.showColor = function () {
  alert(this.color);
};
oCar.showColor();

function showColor() {
  alert(this.color);
}

function createCar(sColor, iDoors, iMpg) {
  var oTempCar = new Object;
  oTempCar.color = sColor;
  oTempCar.doors = iDoors;
  oTempCar.mpg = iMpg;
  
  oTempCar.showColor = showColor;
  return oTempCar;
}

var oCar1 = createCar("red", 4, 23);
var oCar2 = createCar("blue", 3, 25);

oCar1.showColor();
oCar2.showColor();

class Car {
  public String color = "blue";
  public int doors = 4;
  public int mpg = 25;
  
  public Car(String color, int doors, int mpg) {
    this.color = color;
    this.doors = doors;
    this.mpg = mpg;
  }
  
  public void showColor() {
    System.out.println(color);
  }
}

var d1 = new Date();
var str = "";
for (var i = 0; i < 10000; i++) {
  str += "text";
}
var d2 = new Date();

document.write("Concatenation with plus: "
  + (d2.getTime() - d1.getTime()) + " milliseconds");

var buffer = new StringBuffer();
d1 = new Date();
for (var i=0; i < 10000; i++) {
  buffer.append("text");
}
var result = buffer.toStrig();
d2 = new Date();

document.write("<br />Concatenation with StringBuffer: "
  + (d2.getTime() - d1.getTime()) + " milliseconds");

Fucntion.prototype.originalToString = Function.prototype.toString;

Function.prototype.toString = function () {
  if (this.originalToString().length > 100) {
    return "Function too long to display.";
  } else {
    return this.originalToString();
  }
};

var o = new Object();
Object.prototype.sayHi = function () {
  alert("hi");
};
o.sayHi();

function ClassA(sColor) {
  this.color = sColor;
}

ClassA.prototype.sayColor = function () {
  alert(this.color);
};

function ClassB(sCplor, sName) {
  ClassA.call(this, sColor);
  this.name = sName;
}

ClassB.prototype = new ClassA();

ClassB.prototype.sayName = function () {
  alert(this.name);
};

var Calc = function Calc() {
  console.log('Calc constructor');
};

{
  let a = 10;
  var b = 1;
}
