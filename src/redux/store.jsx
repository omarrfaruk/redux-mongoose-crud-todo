import {configureStore} from '@reduxjs/toolkit'
import hobbiesReducer from './hobbiesSlice'

const store = configureStore({
    reducer:{
        hobbiesStore: hobbiesReducer
    }
})

export default store;