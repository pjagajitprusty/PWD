<div id="log"></div>
<script id="worker1" type="javascript/worker">
  // This script won't be parsed by JS engines
  // because its type is javascript/worker.
  console.log('In Worker');
  self.onmessage = function(e) {
    console.log(e.data);
    self.postMessage('msg from worker');
  };
  // Rest of your worker code goes here.
</script>

<script type="text/javascript">
  console.log('In Script tag');
  function log(msg) {
    // Use a fragment: browser will only render/reflow once.
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.createTextNode(msg));
    fragment.appendChild(document.createElement('br'));

    document.querySelector("#log").appendChild(fragment);
  }

  var blob = new Blob([document.querySelector('#worker1').textContent]);

  var worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {
    log("Received: " + e.data);
  }
  worker.postMessage('hello'); // Start the worker.
</script>
