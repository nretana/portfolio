import { combineReducers, AnyAction, Reducer } from 'redux';
import locale, { LocaleState } from './slices/localeSlice';
import theme, { ThemeState  } from './slices/themeSlice';


export type RootState = {
    locale: LocaleState,
    theme: ThemeState
}

export interface AsyncReducers {
    [key: string]: Reducer<any, AnyAction>
}

const staticReducers = {
    locale,
    theme
}

const rootReducer =
    (asyncReducers?: AsyncReducers) =>
    (state: RootState, action: AnyAction) => {
        const combinedReducer = combineReducers({
            ...staticReducers,
            ...asyncReducers,
        })
        return combinedReducer(state, action)
    }

export default rootReducer
