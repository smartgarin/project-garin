import axios from "axios";
import { useEffect } from "react";
import style from "./App.module.scss";

const App = () => {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.api));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className={style.App}>
      <div><h1>가린</h1></div>
      <div>

        <div className={style.topMenu}>
          <span className={style.left}>사용자등록</span>
          <span className={style.right}>로그인</span>
        </div>
        <div className={style.menu}>우리집 상태 확인</div>
        <div className={style.menu}>집 안 제어</div>
        <div className={style.menu}>가린 호출</div>
      </div>
    </div>);
}

export default App;
