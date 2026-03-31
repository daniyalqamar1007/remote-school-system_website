/*
 * Prevents user from entering space at the start of input field
 */
export const preventLeadingSpace = (e) => {
  // Get the current input value
  const value = e.target.value;

  // If input is empty or only contains spaces, and user presses space
  if ((!value || value.trim() === "") && e.key === " ") {
    e.preventDefault();
  }
};

/*
 * Alternative approach: Trim leading spaces on change
 * Use this with onChange handler
 */
export const trimLeadingSpace = (e) => {
  const value = e.target.value;
  // Remove leading spaces but keep trailing spaces
  return value.replace(/^\s+/, "");
};

/*
 * Custom validator for Ant Design Form
 * Prevents spaces at the start when form is submitted
 */
export const noLeadingSpaceValidator = {
  validator: (_, value) => {
    if (value && value !== value.trimStart()) {
      return Promise.reject(new Error("Cannot start with spaces"));
    }
    return Promise.resolve();
  },
};
