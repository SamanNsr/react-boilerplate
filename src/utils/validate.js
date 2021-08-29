function validationField(value, schemas) {
  let err = null;
  let isValid = true;
  schemas.map((schema) => {
    const { error } = schema.validate(value);
    if (error) {
      err = error.details[0].message;
      isValid = false;
    }
  });
  return { isValid, err };
}

export default validationField;
