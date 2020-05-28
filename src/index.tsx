import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Theme, makeStyles } from "@material-ui/core/styles";
import TopBox from './components/TopBox'
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import Home from './components/Home'
import COSweeper from './components/COSweeper'
import Resources from './components/Resources'
import { history, store, AppState } from "./store";



const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		overflow: "visible",
	},
	contentHolder: {
		overflow: "auto",
		height: '100vh',
		background: 'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(253,31,253,0.15) 100%)',
	},
	content: {
		backgroundColor: 'rgba(0,0,0,0)',
		width: "100%",
		marginTop: 56,
	},
}))


function App() {
	const classes = useStyles();
	return (
		<Router history={history}>
    	<div className={classes.root}>
			<TopBox />
			<div className={classes.content}>
				<Route exact path="/" component={Home}/>
				<Route path="/COSweeper" component={COSweeper}/>
				<Route path="/resources" component={Resources}/>
				{/* <Route exact path="/in/happybirthday" component={HappyBirthday} />
				<Route exact path="/in/memories" render={(instaProps) =>
					<Memory
						{...instaProps}
						feed={getFeedForPosts(postData)}
					/>
				} />
				<Route exact path="/in/setting" component={Setting} /> */}
			</div>
    	</div>
		</Router>
  )
}

ReactDOM.render(
	<Provider store={store as any}>
		<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
		/>
		<link
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
		rel="stylesheet"
		/>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
