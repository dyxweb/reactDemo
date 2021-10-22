import React from 'react';
import useCreateStore from './hooks/useCreateStore';
import ReduxContext from './hooks/reduxContext';
import Demo from './containers/Demo';

const reducer = function(state, action) {
  const { type, payload } = action
  if (type === 'setA') {
    return {
      ...state,
      mesA: payload
    }
  } else if (type === 'setB') {
    return {
      ...state,
      mesB: payload
    }
  } else if (type === 'clear') { //清空
    return  {
      mesA: '',
      mesB: ''
    }
  } else {
    return state
  }
}

const App = () => {
  const store = useCreateStore(reducer, { mesA:'aaa', mesB:'bbb' })
  return (
    <div>
      <ReduxContext.Provider value={store}>
        <Demo/>
      </ReduxContext.Provider>
    </div>
  );
}

export default App;