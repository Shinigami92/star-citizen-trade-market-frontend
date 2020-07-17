import { DataOptions } from 'vuetify';

/**
 * Create a Vue table options object with default values
 *
 * @param options Options that should be overriden
 */
export function createDataOptions(options: Partial<DataOptions> = {}): DataOptions {
  return {
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    sortDesc: [],
    groupBy: [],
    groupDesc: [],
    multiSort: false,
    mustSort: false,
    ...options
  };
}
