// function requestFullScreen() {
//   var element = document.body;
//   // Supports most browsers and their versions.
//   var requestMethod =
//     element.requestFullScreen ||
//     element.webkitRequestFullScreen ||
//     element.mozRequestFullScreen ||
//     element.msRequestFullScreen;

//   if (requestMethod) {
//     // Native full screen.
//     requestMethod.call(element);
//   } else if (typeof window.ActiveXObject !== "undefined") {
//     // Older IE.
//     var wscript = new ActiveXObject("WScript.Shell");
//     if (wscript !== null) {
//       wscript.SendKeys("{F11}");
//     }
//   }
// }

// Make the body go full screen.

// document.addEventListener("keyup", (e) => {
//   if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
//     //your code
//     console.log("Thanks you!");
//     window.close();
//   } else {
//     console.log("Invalid key pressed");
//   }
// });
