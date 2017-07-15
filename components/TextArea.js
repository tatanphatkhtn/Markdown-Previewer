/**
 * Created by root on 7/15/17.
 */
const React = require('react');

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
  }
  changeText(e) {
    this.props.changeText(e.target.value);
  }
  render(){
    return (
      <textarea onChange={this.changeText} placeholder="Fill some text here !">
      </textarea>
    )
  }
}

module.exports = TextArea;