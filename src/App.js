import MainPage from "./components/mainpage/MainPage";
import PhotoPage from "./components/photopage/PhotoPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter,
} from "react-router-dom";
import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/Image" component={PhotoPage}></Route>
					<Route exact path="/">
						<MainPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
