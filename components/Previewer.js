/**
 * Created by root on 7/15/17.
 */
const React = require('react');

class Previewer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
    )
  }
}

module.exports = Previewer;