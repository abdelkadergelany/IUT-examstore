import {createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {User} from './reducers/User'
import {Exams} from './reducers/Exams'
import {Favorites} from './reducers/Favorites'
import {Filters} from './reducers/Filters'
import AuthReducer from './reducers/AuthReducer';




export const ConfigureStore = () => {
    const store = createStore(
           combineReducers({
            User: User,
            Exams: Exams,
            Favorites: Favorites,
            Filters: Filters,
            Auth:AuthReducer
        }),
       compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

    return store;
}
