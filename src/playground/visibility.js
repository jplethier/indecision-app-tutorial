console.log('App.js is running');

let visible = false;

const onToggleVisible = () => {
  visible = !visible
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggleVisible}>{visible ? 'Hide details' : 'Show details'}</button>
      {visible && <p>Details</p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'))
}

render();

