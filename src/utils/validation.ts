

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


export function formatValidationErrors(errors: Record<string, string[]>) {
  return Object.entries(errors).map(([key]) => `${key} is required`);
}
