import {createStore, combineReducers } from 'redux'

const initialState = {}

const rooterReducers = combineReducers({

})

const store = createStore(rooterReducers,initialState)

export default store