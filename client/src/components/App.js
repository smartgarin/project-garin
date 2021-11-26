import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import MainPage from "./view/MainPage/MainPage";
import AudioRecord from "./view/AudioRecord/AudioRecord";

import styles from "./App.module.scss";

const App = () => {
	const callApi = async () => {
		axios.get("/api").then((res) => console.log(res.data.api));
	};

	useEffect(() => {
		callApi();
	}, []);

	return (
		<div className={styles.App}>
			<Router>
				<div>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path="/AudioRecord" element={<AudioRecord />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
