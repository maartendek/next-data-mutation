"use client"

import { useFormStatus } from "react-dom";

export default function FormSubmit({type}) {
  const status = useFormStatus();

  if (status.pending) {
    return <span>Creating {type}...</span>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
