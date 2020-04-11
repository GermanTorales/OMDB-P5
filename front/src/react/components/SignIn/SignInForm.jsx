import React from "react";
import AlertInputError from "../Commons/AlertInputError";
import styles from "../../styles/formStyles";

export default ({
  onSubmitForm,
  handlerInput,
  passError,
  emailError,
  button,
}) => {
  return (
    <styles.Container>
      <styles.Form onSubmit={onSubmitForm}>
        <styles.Field>
          <styles.Label>Email address</styles.Label>
          <styles.Input
            type="email"
            name="email"
            placeholder="Enter email"
            onBlur={handlerInput}
          />
          {emailError ? <AlertInputError msg={"Email invalid"} /> : null}
        </styles.Field>
        <styles.Field>
          <styles.Label>Password</styles.Label>
          <styles.Input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={handlerInput}
          />
          {passError ? <AlertInputError msg={"Password invalid"} /> : null}
        </styles.Field>
        <styles.Field>
          <styles.Button disabled={button} type="submit">
            Sign In
          </styles.Button>
        </styles.Field>
      </styles.Form>
    </styles.Container>
  );
};
