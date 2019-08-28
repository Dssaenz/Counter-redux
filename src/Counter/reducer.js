const initialState = {
    contador: 0
  }
  
  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
            contador: state.contador + 1
        }
      case 'DECREMENT':
        return {
            contador: state.contador - 1
        }
      default:
        return state
    }
  }


  export default reducer