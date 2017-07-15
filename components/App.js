/**
 * Created by root on 7/15/17.
 */
const React = require('react');
let TextArea = require('./TextArea');
let Previewer = require('./Previewer');
let marked = require('marked')
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        text: ''
      };
      this.changeText = this.changeText.bind(this);
    }
    changeText(value) {
      this.setState({text:marked(value)});
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