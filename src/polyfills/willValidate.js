'use strict';


import installer from '../tools/property_installer';
import is_validation_candidate from '../tools/is_validation_candidate';


/**
 * check, if an element will be subject to HTML5 validation
 */
function willValidate() {
  /* jshint -W040 */
  return is_validation_candidate(this);
  /* jshint +W040 */
}


/**
 * publish a convenience function to replace the native element.willValidate
 */
willValidate.install = installer('willValidate', {
  configurable: true,
  enumerable: true,
  get: willValidate,
  set: undefined,
});


export default willValidate;
