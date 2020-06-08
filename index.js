// Import stylesheets
import './style.css';

//appDiv.innerHTML = `<h1>JS Starter</h1>`;
// Write Javascript code!
function count() {
  
    var array_elements = [11,10,10,9,3,4,3,2,5,4];

  array_elements.sort(function(a,b){ return a-b;});
	console.log(array_elements);

    var current = null;
    var cnt = 0;
    for (let i = 0; i <= array_elements.length; i++) 
    {
    if (array_elements[i] != current) {
      if (cnt > 0) 
            {
      const appDiv = document.getElementById('app');
      appDiv.innerHTML += current + ' comes --> ' + cnt + ' times<br>';
            }
            current = array_elements[i];
            cnt = 1;
      } 
     else {
            cnt++;
        }
    }
}
count();
