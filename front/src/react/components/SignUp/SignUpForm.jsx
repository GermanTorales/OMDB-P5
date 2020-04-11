import React from "react";
import AlertInputError from "../Commons/AlertInputError";
import msg from "../../../assets/error-msg/errorInputs";
import styles from "../../styles/formStyles";

export default ({
  onSubmitForm,
  handlerInput,
  fNameErr,
  lNameErr,
  emailErr,
  passErr,
  button,
}) => {
  return (
    <styles.Container>
      <styles.Form onSubmit={onSubmitForm}>
        <styles.Field>
          <styles.Label>First Name</styles.Label>
          <styles.Input
            type="text"
            name="name"
            placeholder="Enter your first name"
            onBlur={handlerInput}
          />
          {fNameErr ? (
            <AlertInputError msg={msg.NAME_FORMAT_INCORRECT} />
          ) : null}
        </styles.Field>
        <styles.Field>
          <styles.Label>Last Name</styles.Label>
          <styles.Input
            type="text"
            name="last"
            placeholder="Enter your last name"
            onBlur={handlerInput}
          />
          {lNameErr ? (
            <AlertInputError msg={msg.NAME_FORMAT_INCORRECT} />
          ) : null}
        </styles.Field>
        <styles.Field>
          <styles.Label>Email address</styles.Label>
          <styles.Input
            type="email"
            name="email"
            placeholder="Enter email"
            onBlur={handlerInput}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {emailErr ? (
            <AlertInputError msg={msg.EMAIL_FORMAT_INCORRECT} />
          ) : null}
        </styles.Field>
        <styles.Field>
          <styles.Label>Password</styles.Label>
          <styles.Input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={handlerInput}
          />
          {passErr ? (
            <AlertInputError msg={msg.PASSWORD_FORMAT_INCORRECT} />
          ) : null}
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
