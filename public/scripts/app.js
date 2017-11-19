'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: []
    };
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem('options');
      if (json) {
        try {
          var options = JSON.parse(json);
          this.setState(function () {
            return { options: options };
          });
        } catch (e) {
          // do nothing, keep empty array
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        localStorage.setItem('options', JSON.stringify(this.state.options));
      }
    }
  }, {
    key: 'handleRemoveOption',
    value: function handleRemoveOption(deletedOption) {
      console.log('delete option', deletedOption);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== deletedOption;
          })
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter a valid value to add item';
      }

      if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var position = Math.floor(Math.random() * this.state.options.length);
      alert('Option choosed was: ' + this.state.options[position]);
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.state.options;


      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: 'Put your life in the hands of a computer' }),
        React.createElement(Action, {
          hasOptions: options.length > 0,
          onClick: this.handlePick
        }),
        React.createElement(Options, {
          options: options,
          onRemoveAll: this.handleRemoveAll,
          onRemoveOption: this.handleRemoveOption
        }),
        React.createElement(AddOption, { onSubmit: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  var title = props.title,
      subtitle = props.subtitle;


  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      title
    ),
    subtitle && React.createElement(
      'h2',
      null,
      subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  var hasOptions = props.hasOptions,
      onClick = props.onClick;


  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { disabled: !hasOptions, onClick: onClick },
      'What should I do?'
    )
  );
};

var Option = function Option(props) {
  var label = props.label,
      onRemove = props.onRemove;


  return React.createElement(
    'li',
    null,
    label,
    React.createElement(
      'button',
      { onClick: function onClick() {
          return onRemove(label);
        } },
      'Remove'
    )
  );
};

var Options = function Options(props) {
  var options = props.options,
      onRemoveAll = props.onRemoveAll,
      onRemoveOption = props.onRemoveOption;


  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    options.length > 0 ? React.createElement(
      'ol',
      null,
      options.map(function (option, index) {
        return React.createElement(Option, {
          key: index,
          label: option,
          onRemove: onRemoveOption });
      })
    ) : React.createElement(
      'p',
      null,
      'Please add an option to get started!'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();

      var error = this.props.onSubmit(option);

      this.setState(function () {
        return { error: error };
      });
      e.target.elements.option.value = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var error = this.state.error;


      return React.createElement(
        'div',
        null,
        error && React.createElement(
          'p',
          null,
          error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
