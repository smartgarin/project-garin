import { useEffect } from "react";
import axios from "axios";

import styles from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <div>
            <div><h1>가린</h1></div>
            <div>

                <div className={styles.topMenu}>
                    <span className={styles.left}>사용자등록</span>
                    <span className={styles.right}>로그인</span>
                </div>
                <div className={styles.menu}>우리집 상태 확인</div>
                <div className={styles.menu}>집 안 제어</div>
                <div className={styles.menu}>가린 호출</div>
            </div>
        </div>
    );
}

export default MainPage;