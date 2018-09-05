export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}

// action creater
export function getUserInfo() {
  //使用中间件的时候会有三个action，请求时，请求成功，请求失败
  return function (dispatch) {
      dispatch(getUserInfoRequest());

      return fetch('http://localhost:8080/api/user.json')
          .then((response => {
              return response.json()
          }))
          .then((json) => {
                  dispatch(getUserInfoSuccess(json))
              }
          ).catch(
              () => {
                  dispatch(getUserInfoFail());
              }
          )
  }
}