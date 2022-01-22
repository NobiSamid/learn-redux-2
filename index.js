const redux = require("redux")
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

// Reducer

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const initialCakeState ={
    numOfCakes : 35
}

const initialIceState ={
    numOfIces : 45
}

//  const reducer = (state = initialState, action) =>{
//      switch(action.type){
//          case BUY_CAKE: return{
//              ...state,
//              numOfCakes: state.numOfCakes - 1
//          }

//          case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCream: state.numOfIceCream - 1
//         }
//          default: return state
//      }
//  }
 const cakeReducer = (state = initialCakeState, action) =>{
     switch(action.type){
         case BUY_CAKE: return{
             ...state,
             numOfCakes: state.numOfCakes - 2
         }
         default: return state
     }
 }
 const iceReducer = (state = initialIceState, action) =>{
     switch(action.type){
         case BUY_CAKE: return{
             ...state,
             numOfIces: state.numOfIces - 2
         }
         default: return state
     }
 }

/// Store

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
