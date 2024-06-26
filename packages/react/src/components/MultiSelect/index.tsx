/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { deprecateFieldOnObject } from '../../internal/deprecateFieldOnObject';

import MultiSelect from './MultiSelect';
import { default as FilterableMultiSelect } from './FilterableMultiSelect';

FilterableMultiSelect.displayName = 'MultiSelect.Filterable';
// @ts-expect-error: The attribute indeed does not exist on the object,
// but since it is already deprecated, we do not have to fix it.
MultiSelect.Filterable = FilterableMultiSelect;

if (__DEV__) {
  deprecateFieldOnObject(MultiSelect, 'Filterable', FilterableMultiSelect);
}

export { FilterableMultiSelect, MultiSelect };
export default MultiSelect;
