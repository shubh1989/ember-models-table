import {
  create,
  attribute,
  text,
  collection,
  hasClass
} from 'ember-cli-page-object';

import {exists, definition as definitionBs} from './models-table-bs';

export const definition = Object.assign({}, definitionBs, {
  globalFilterLabel: text('.globalSearch .input-group-addon'),
  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: exists('i'),
    isSorted: hasClass('fa', 'i'),
    colspan: attribute('colspan')
  }),
  columnsDropDown: collection('.columns-dropdown a', {
    toggleLabel: text('button'),
    label: text()
  }),
  firstColumnIconSelector: '.columns-dropdown a:nth-child(5) i',
  secondColumnIconSelector: '.columns-dropdown a:nth-child(6) i',

  checkedIconClass: 'fa fa-check-square-o',
  uncheckedIconClass: 'fa fa-square-o'
});

export default create(definition);
