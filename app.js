(function() {
  
  var result = document.getElementById("result"),
      onlineMessage = document.getElementById('onlineStatusMessage'),
      ONLINE = "online",
      OFFLINE = "offline";

  // Online Detection feature
  window.addEventListener('load', function(event) {
    if (navigator.onLine) {
      onlineMessage.innerHTML = ONLINE;
    } else {
      onlineMessage.innerHTML = OFFLINE;
    }
  });

  window.addEventListener('online', function(e) {
    onlineMessage.innerHTML = ONLINE;
  });

  window.addEventListener('offline', function(e) {
    onlineMessage.innerHTML = OFFLINE;
  });

})();
