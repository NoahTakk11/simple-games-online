export const verifyRules = (
  password: string,
  add: (id: string) => void,
  remove: (id: string) => void
) => {
  //Condition 1
  if (password.length < 8) {
    add("1");
  } else {
    remove("1");
  }

  // Condition 2
  if (/\d/.test(password)) {
    add("2");
  } else {
    remove("2");
  }
};
