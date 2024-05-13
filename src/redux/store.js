import { configureStore } from '@reduxjs/toolkit'
import slidesReducer from './reducers/slidesReducer'

const rootReducer = {
  slide: slidesReducer
}
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store
