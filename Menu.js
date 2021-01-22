import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //this function take an event object as an argument
  handleClick(e) {
    // This variable represent the text of a clicked radio button
    const mode = e.target.value;
    this.props.chooseVideo(mode);
  }
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}