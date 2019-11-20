import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextExample } from './Contexts/ContextExample';

import injectContext from "./store/appContext.js";
import Home from "./views/home";
import OtherHome from "./views/otherHome";


const Layout = props => {
	const [value, setValue] = useState('Hola desde el state del Layout, pasado por el context');
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ContextExample.Provider value={{ value, setValue }}>
					<Switch>
						<Route exact path="/otherhome" component={OtherHome} />
						<Route exact path="/" component={Home} />
						<Route render={() => <h1>Error 404!</h1>} />
					</Switch>
				</ContextExample.Provider>
			</BrowserRouter>
		</div>
	);
}

export default injectContext(Layout);
