import React from "react";
import styles from '../../styles/index.less';
//无状态组件的props传入形参且不能使用this，在有状态组件中直接使用this.props.children
const Second = (props) => <div className={styles.number}>第一个示例的第【1】个路由，第一个路由在第一个和第二个url里都会显示，但不在第三个显示{props.children}</div>
export default Second