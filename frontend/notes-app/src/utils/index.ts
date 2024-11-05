export const getInitials = (name: string): string => {
  const parts = name.split(" ");
  return parts.map((part) => part.charAt(0).toUpperCase()).join("");
};

export const getFirstName = (name: string): string => {
  const parts = name.split(" ");
  return parts[0] || "";
};

export const getErrorField = (
  fields: string[],
  errorMessage: string
): string | undefined => {
  return fields.find((field) => errorMessage.includes(field));
};
