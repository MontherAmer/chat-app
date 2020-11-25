import moment from 'moment';

export const timeFormate = date => {
  // return moment(date).startOf('day').fromNow();
  return moment().format('dddd');
};
