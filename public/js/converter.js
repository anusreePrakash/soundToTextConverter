var r = document.getElementById('result');
var convert = function() {

  if ('webkitSpeechRecognition' in window) {
    // webkitSpeechRecognition

    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = "en=IN";
    speechRecognizer.start();
    var finalTranscript = '';
    speechRecognizer.onresult = function(event) {
      var interimTranscript = "";
      for (var i = event.resultIndex; i < event.results.length; i++) {
        var transcript = event.results[i][0].transcript;
        transcript.replace("\n", '<br>')
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }

      }
      r.innerHTML = finalTranscript + '<span style="color:#999">' + interimTranscript + '</span>'
    };

    speechRecognizer.error = function(event) {

    };
  } else {
    console.log("this browser is not supported");
    r.innerHTML = "your browser is not supported"
  }

}
