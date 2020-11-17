import { utilsActionTypes, userActionTypes } from '../constants';
import { groupApis } from '../apis/groups';

export const createGroup = data => dispatch => {
  const formData = new FormData();
  if (data.image) formData.append('image', data.image);
  formData.append('name', data.name);
  formData.append('members', JSON.stringify(data.members));

  return groupApis.create(formData).then(res => {
    return res.success
      ? (dispatch({
          type: userActionTypes.USER_CONNECTIONS_LIST,
          payload: res.data
        }),
        dispatch({
          type: utilsActionTypes.SHOW_ALERT,
          payload: { message: 'Group created!', success: true }
        }))
      : dispatch({
          type: utilsActionTypes.SHOW_ALERT,
          payload: { message: res.err }
        });
  });
};
