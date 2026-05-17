export const emailRegex = (email) => {
  const emailcheck =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailcheck.test(email)) {
    return "Incorrect Email";
  }
  return null;
};