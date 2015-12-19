import Ember from 'ember';

export function feedbackClasses(params, { length, isValid }) {
  let classes = '';

  if (length > 0) {
    classes += 'has-feedback';

    if (isValid) classes += ' has-success';
    else classes += ' has-error';
  }

  return classes;
}

export default Ember.Helper.helper(feedbackClasses);
