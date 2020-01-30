import { useState } from "react";

const useFormState = initalValues => {
  const [state, setState] = useState(initalValues);

  const onChangeHandler = e =>
    setState({
      ...state,
      [e.target.name]: e.target.value
    });

  const reset = field => {
    if (field) {
      setState({ ...state, [field]: initalValues[field] });
    } else {
      setState({ ...initalValues });
    }
  };
  return [state, onChangeHandler, reset];
};

export default useFormState;
