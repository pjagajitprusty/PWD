
// throw 5;
self.onmessage = function(e) {
  console.log('Worker Context:');
  console.log('Message received from main script', e.data);
  var data = fib(e.data) + '</br>At: ' + new Date()
  wait(5000)
  self.postMessage(data);
  console.log('Message is posted back to main script');
}


function fib(count) {
	a = 0, b = 1, sum = 0;
	output = "<b>The first " + count + " elements in the Fibonacci series: </b>";
	for(i = 0; i < count; i ++) {
		output += a + " ";
		sum = a + b;
		a = b;
		b = sum;
	}
  return output
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
console.log("Web Worker Script Executed.");
