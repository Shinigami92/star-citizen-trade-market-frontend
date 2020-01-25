export type ValidationRule<V = string> = (v: V) => V | boolean;

export function checkErrorMessage(message: string | null, expectedMessage: string): string | true {
  return !message || message !== expectedMessage || message;
}
