import $ from 'jquery';

export default (url, options) => {
  return $.ajax(url, options).fail(() => {
    console.log('Something Went Wrong')
    return;
    });
};
