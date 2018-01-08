module.exports.generateRandom = (x) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < x; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

module.exports.sleep = (seconds) =>
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}