console.log('App.js is running');

var template = (
  <div>
    <h1>This is JSX from app.js!</h1>
    <p>Second paragraph</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);
