import React from 'react';
import dva, { connect }  from 'dva';
import { Link,routerRedux} from 'dva/router';
import "./index.css"
const getRouter = (props) => {
    //使用className在roadhogrc中配置"disableCSSMoudle":tue
    function handleclick(){
    	props.dispatch(routerRedux.push('/inde'))
        // 不生效 this.context.router.push('/inde');
    }
    return(
        <div>
            <ul className="one">
                <li onClick={handleclick}>首页</li>
                <li><Link to="/list">LIST</Link></li>
                <li><Link to="/form">FORM</Link></li>
                <li><Link to="/effect">EFFECT</Link></li>
            </ul>
            {props.children} 
        </div>
       )
};
getRouter.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(({jum}) =>({jum}))(getRouter);