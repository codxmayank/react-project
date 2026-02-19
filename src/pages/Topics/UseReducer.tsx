import { useReducer } from "react"

// const initialState = { count: 0 }

// function counterReducer(currentState, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: currentState.count + 1 }
//     case 'decrement':
//       return { count: currentState.count - 1 }
//     default:
//       return currentState
//   }
// }

// export default function UseReducer() {
//   const [countValue, countDispatch] = useReducer(counterReducer, initialState)

//   return (
//     <>
//       <p>{countValue.count}</p>
//       <button onClick={() => countDispatch({ type: 'increment' })}>
//         +
//       </button>
//       <button onClick={() => countDispatch({ type: 'decrement' })}>
//         -
//       </button>
//     </>
//   )
// }


const initialState = { count: 0 };

const counterReducer = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: currentState.count + 1 }
    case 'decrement':
      return { count: currentState.count - 1 }
    default:
      return currentState
  }
}

export default function UseReducer() {
  const [countValue, countDispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <div>Count: {countValue.count}</div>
      <button onClick={() => countDispatch({type: 'increment'})}>+</button>
      <button onClick={() => countDispatch({type: 'decrement'})}>-</button>
    </>
  )
}
