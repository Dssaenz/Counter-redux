import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Text } from './style'

class Principal extends React.Component {
  
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
        <Container>
          <Button onClick={this.decrement}>-</Button>
          <Text>{this.props.contador}</Text>
          <Button onClick={this.increment}>+</Button>
        </Container>
      )
    }
  }

const mapStateToProps = state => {
  return {
    contador: state.contador
  }
}

export default connect(mapStateToProps)(Principal);
