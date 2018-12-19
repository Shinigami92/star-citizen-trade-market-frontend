export type ValidationRule<V = string> = (v: V) => V | boolean;
