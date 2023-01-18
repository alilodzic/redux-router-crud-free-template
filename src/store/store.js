import { configureStore } from '@reduxjs/toolkit'
import data from './dataslice'



export default configureStore({
    reducer: { data }
})