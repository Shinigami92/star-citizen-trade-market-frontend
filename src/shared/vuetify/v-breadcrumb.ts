/**
 * @see https://vuetifyjs.com/en/components/breadcrumbs
 */
export interface VBreadcrumbsItem {
  /**
   * The text that will be displayed
   */
  text: string | number;
  /**
   * Designates the item as anchor and applies the `href` attribute.
   */
  href?: string;
  /**
   * Denotes the target route of the link.
   * You can find more information about the [`to` prop](https://router.vuejs.org/api/#to)
   * on the `vue-router` documentation.
   */
  to?: string | Record<string, unknown>;
  /**
   * By default `v-breadcrumbs` will **disable** all crumbs up to the current page in a nested paths.
   * You can prevent this behavior by using `exact: true` on each applicable breadcrumb in the `items` array.
   */
  exact?: boolean;
  /**
   * Designates that the `item` is a `link`. This is automatic when using the `href` or `to` prop.
   */
  link?: boolean;
  /**
   * Removes the ability to click or target the item.
   */
  disabled?: boolean;
}
