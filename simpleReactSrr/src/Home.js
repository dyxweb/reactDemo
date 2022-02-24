import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  const { list, dispatch } = props;
  const loadData = () => {
    dispatch({
      type: 'CHANGE_LIST',
      list: [2, 4, 6] 
    })
  }
  useEffect(() => {
    // 没有数据才请求，避免服务端和客户端重复请求
    if (!list.length) {
      loadData()
    }
  }, [])
  return (
    <div>
      <div onClick={() => console.log(2)}>dyx123</div>
      <div onClick={() => console.log(list)}>{list}</div>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.home.list,
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

