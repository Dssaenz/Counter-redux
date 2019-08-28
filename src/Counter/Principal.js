import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Text } from './style'

class Principal extends React.Component {
  
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
        <Container>
          <Button onClick={this.decrement}>-</Button>
          <Text>{this.props.count}</Text>
          <Button onClick={this.increment}>+</Button>
        </Container>
      )
    }
  }

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Principal);
