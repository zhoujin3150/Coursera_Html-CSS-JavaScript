var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var count = 0 ; count < names.length; count++) {
  var firstLetter = names[count].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[count]);
  } else {
    helloSpeaker.speak(names[count]);
  }
}
