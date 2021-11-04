import axios from "axios";
import { useEffect } from "react";
import './App.css';

const App = () => {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.api));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      test
    </div>);
}

export default App;
