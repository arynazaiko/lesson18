import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from '../components/Card'

const Heading = styled.h2`
  color: red;
  text-transform: uppercase;
  font-style: italic;
`;

class HomePage extends Component {
  state = {}
  inputRef = React.createRef();
  formRef = React.createRef();

  componentDidMount() {
    console.log(this);

    setTimeout(() => {
      this.inputRef.current.focus();
    }, 100);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.formRef.current.reset();
  }

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <h1 style={styles}>Самый красивый заголовок</h1>
        <Heading>
          Самый красивый заголовок №2
        </Heading>
        <form onSubmit = {this.handleSubmit} className="form-inline" ref={this.formRef}>
          <input type="text" placeholder="Текст" className="form-control mr-2" ref={this.inputRef}/>
          <input type="text" placeholder="Имя" className="form-control mr-2"/>
          <input type="text" placeholder="Возраст" className="form-control mr-2"/>
          <button type="submit" className="btn btn-secondary">Send</button>
        </form>
        <Card  price={100}/>
      </React.Fragment>
    );
  }
}

const styles = {
  color: 'red', textTransform: 'uppercase', fontStyle: 'italic',
}

const mapStateToProps = state => {
  return {
    //..
  }
}
export default connect(mapStateToProps, {})(HomePage);
