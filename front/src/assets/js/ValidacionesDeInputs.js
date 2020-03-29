const validations = {};

validations.isValidName = name => {
  return !/^[A-Z]+$/i.test(name);
};

validations.isValidEmail = email => {
  return !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    email
  );
};

validations.isValidPassword = password => {
  return !/^(?=(?:.*(\d|[$@._&])){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{4,20}$/.test(
    password
  );
};

export default validations;
