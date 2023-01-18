import { configureStore } from '@reduxjs/toolkit'
import dataslice from './dataslice'



export default configureStore({
    reducer: { data : dataslice }
})