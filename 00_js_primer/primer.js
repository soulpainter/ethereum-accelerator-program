// Task 1: Repeating Numbers
var repeatNumbers = function(data) {

  var returnValue = "";

  for (i=0; i<data.length; i++)
  {
    for (j=0; j<data[i][1]; j++)
    {
      returnValue += data[i][0];
    }

    if (i != data.length-1)
    {
      returnValue += ', ';
    }
  }
  return returnValue;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Task 2: Conditional Sums
var conditionalSum = function(values, condition) {
  var sum = 0;
  for (i=0; i<values.length; i++)
  {
    if(condition=='even')
    {
      if(values[i] % 2 === 0)
      {
        sum += values[i];
      }
    }
    else
    {
      if(values[i] % 2 !== 0)
      {
        sum += values[i];
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// Task 3: Talking Calendar
var talkingCalendar = function(date) {
  var year = date.substr(0,4);
  var month = date.substr(5,2) - 1;
  var day = date.substr(8,2);

  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(year,month,day).toLocaleDateString("en-US", options);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Task 4: Challenge Calculator
var calculateChange = function(total, cash) {
  var valid = { 'twentyDollars':2000, 'tenDollars':1000, 'fiveDollars':500, 'twoDollars':200, 'oneDollar':100, 'quarters':25, 'dimes':10, 'nickels':5, 'pennies':1}

  var change = cash - total;

  var returnHash = {}

  Object.keys(valid).forEach(function (key) {
    var value = valid[key]
    while (change >= value)
    {
      change -= value;
      if(returnHash[key])
        returnHash[key]++;
      else
        returnHash[key] = 1;
    }
  })
  return returnHash;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
