function shout(string) {
  return string.toUpperCase ()
  
}

function whisper(string) {
  return string.toLowerCase ()
  
}

function logShout(hello) {
  console.log(hello.toUpperCase());
  
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  
}

function sayHiToGrandma (string) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I love you, too.";
  if (string.toLowerCase()) {
    return cantUnswer;
  }
  else if (string.toUpperCase()) {
    return yesUnswer;
  }
  else if ("I love you, Grandma.") {
    return lovUnswer
  }
}