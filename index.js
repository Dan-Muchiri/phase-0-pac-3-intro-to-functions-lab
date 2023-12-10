function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase());
  }
function logWhisper(string) {
    console.log(string.toLowerCase());
  }    
function sayHiToHeadphonedRoommate(string) {
    string.toUpperCase();
    string.toLowerCase();
    let hi;
    if (string === string.toLowerCase()){
        hi = "I can't hear you!"
    } else if (string === string.toUpperCase()){
        hi = "YES INDEED!"
    } else if (string === "Let's have dinner together!"){
        hi = "I would love to!"
    } else {
        hi = 'Remove headphones!'
    }
    return hi;
  }
