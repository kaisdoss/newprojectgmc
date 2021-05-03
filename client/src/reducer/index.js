import { combineReducers } from 'redux';
import { AuthReducer } from './authReducer';
import achatReducer from './facturesAndProductsReducer'
import usersReducer from './userReducer'
import CounterReducer from './CounterReducer'

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['auth']
// }

const rootReducer = combineReducers({ auth: AuthReducer, facturesAndProducts: achatReducer, usersRed: usersReducer,counter:CounterReducer });

// export default persistReducer(persistConfig, rootReducer)
export default rootReducer
