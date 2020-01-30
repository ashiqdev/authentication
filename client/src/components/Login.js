import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";

import UseForm from "./common/useForm";
import Input from "./common/Input";
import { SIGNIN_MUTATION } from "../resolvers/mutation";
import {USER_QUERY} from '../resolvers/query';

function App(props) {
  const [values, onChangeHandler, reset] = UseForm({ email: "", password: "" });

  const [signin] = useMutation(SIGNIN_MUTATION, {
    variables: {
      email: values.email,
      password: values.password
    },
    // refetchQueries: [{ query: USER_QUERY }],
  });

  const onSubmit = async e => {
    e.preventDefault();
    await // console.log(props.);
    await signin();
    reset();
    props.history.push("/success");

    // reset();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          label="email"
          value={values.email}
          onChange={onChangeHandler}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={values.password}
          onChange={onChangeHandler}
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
