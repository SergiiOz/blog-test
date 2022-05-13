// import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//POSTS
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

//USERS
export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: 'FETCH_USER',
      payload: response.data,
    });
  };
};

//use _.memoize - if pass id same, fetch will be one time
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.date,
//   });
// });
