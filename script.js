(function () {
  var names = ["Anara", "Yernar", "Sultan", "Yeldar", "Batyr", "Amir", "Nuray", "Azhar", "Arna", "Alizhan"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'a') { // Теперь 'Hello' только для имен на 'A'
      helloSpeaker.speak(names[i]);
    } else {
      byeSpeaker.speak(names[i]);
    }
  }
})();