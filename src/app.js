console.log('App.js is running');

const app = {
  title: "Indecision App",
  subtitle: "This is an app to help you to decide what to do",
  options: [],
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length)
  const selectedOption = app.options[randNum]
  console.log(selectedOption)
}

const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options && app.options.length > 0) ?
        <div>
          <p>Here are your options:</p>
          <button onClick={onMakeDecision}>What should I do?</button>
          <button onClick={onRemoveAll}>Remove all</button>
          <ol>
            {app.options.map((option, index) => <li key={index}>{option}</li>)}
          </ol>
        </div>
        : <p>No options</p>}
      <form onSubmit={onFormSubmit}>
        <input type="text"  name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot)
}

render();

