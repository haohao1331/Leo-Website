import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
// import emailReducer from './reducers/email'
// import userLoginReducer from './reducers/userLogin'
// import instaReducer from './reducers/insta'
// import chatRoomReducer from './reducers/chatRoom'
// import settingsReducer from './reducers/settings'
// import browserReducer from './reducers/browser'
// import libraryReducer from './reducers/library'
// import appstoreReducer from './reducers/appstore'
// import tvReducer from './reducers/tv'
// import bankReducer from './reducers/bank'
// import passwordStoreReducer from './reducers/passwordStore'
// import gameStateReducer from './reducers/gameState'
// import productReducer from './reducers/product'
// import biomedicalReducer from './reducers/biomedical/login'
// import notebookReducer from './reducers/notebook'
// import notificationReducer from './reducers/notification'
// import { DELIVERY_STATUS, updateDeliveryStatus } from './actions/product'
// import todoReducer from './reducers/todos.reducer'
import {
	useSelector as useReduxSelector,
	TypedUseSelectorHook,
  } from 'react-redux'

const saveState = (state: AppState) => {
	try {
		const serializedState = JSON.stringify({...state, router: undefined})
		localStorage.setItem('state', serializedState)
	} catch (err) {
		// tslint:disable-next-line: no-console
		console.error(err)
	}
}

const loadState = (): AppState | undefined => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) {
			return undefined
		}
		const state: AppState = JSON.parse(serializedState)
		return state
	} catch (err) {
		// tslint:disable-next-line: no-console
		console.error(err)
		return undefined
	}
}

export const history = createBrowserHistory()

const createRootReducer = (rootHistory: any) => combineReducers({
	router: connectRouter(rootHistory),
	// email: emailReducer,
	// userLogin: userLoginReducer,
	// insta: instaReducer,
	// chatRoom: chatRoomReducer,
	// settings: settingsReducer,
	// browser: browserReducer,
	// library: libraryReducer,
	// tv: tvReducer,
	// passwordStore: passwordStoreReducer,
	// appstore: appstoreReducer,
	// bank: bankReducer,
	// gameState: gameStateReducer,
	// product: productReducer,
	// biomedical: biomedicalReducer,
	// notebook: notebookReducer,
	// notification: notificationReducer,
	// todos: todoReducer,
})

const configureStore = (preloadedState: any) => {
	const composeEnhancers = (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	const newStore = createStore(
		createRootReducer(history),
		preloadedState,
		composeEnhancers(
			applyMiddleware(
				thunk,
				routerMiddleware(history),
			),
		),
	)

	newStore.subscribe(() => {
		saveState(newStore.getState())
	})
	return newStore
}

export type AppState = Exclude<Parameters<ReturnType<typeof createRootReducer>>[0], undefined>
export const store = configureStore(loadState())

// external

const tempGameState = {
	flowershopAvailable: true,
}

const windowAny = window as any

windowAny.SetFlowershopAvailable = (available: boolean) => {
	tempGameState.flowershopAvailable = available
}

export const getFlowershopAvailable = () => {
	windowAny.QueryFlowershopAvailable()
	return tempGameState.flowershopAvailable
}

// const SetDeliveryProgress = (status: DELIVERY_STATUS, progress?: number) => {
// 	store.dispatch(updateDeliveryStatus(status, progress))
// }

// windowAny.SetDeliveryProgress = SetDeliveryProgress

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector