import React from "react";
import styles from '../../styles/index.less';
const Detail = () => <div className={styles.number}>{location.hash.split('/')[2]}</div>
export default Detail