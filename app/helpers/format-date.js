import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  let setValue = !!params[1];
  // if (!setValue) {
  console.log("hola", setValue);
  if (!setValue) {
    return moment(params[0]).format('DD-MM-YYYY');
  } else {
    return moment(params[0]).format('YYYY-MM-DD');
  }
}

export default Ember.Helper.helper(formatDate);
