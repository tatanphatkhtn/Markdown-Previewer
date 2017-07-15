/**
 * Created by root on 7/15/17.
 */
const React = require('react');
let TextArea = require('./TextArea');
let Previewer = require('./Previewer');
let marked = require('marked');
let processString = {
   entityMap : {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  },
  escapeHtml :(string) => {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return processString.entityMap[s];
  });
}

};
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        text: ''
      };
      this.changeText = this.changeText.bind(this);
    }
    changeText(value) {
      let escapeValue = processString.escapeHtml(value);
      console.log(escapeValue);
      this.setState({text:marked(escapeValue)});
    }
    render() {
      return(
      <div>
        <TextArea changeText = {this.changeText}/>
        <Previewer text = {this.state.text}/>
      </div>
      )
    }
}

module.exports = App;