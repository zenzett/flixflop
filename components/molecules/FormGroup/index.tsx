import { FunctionComponent, HTMLAttributes } from "react";

import FormMessage from "./_components/FormMessage";

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  error?: string;
  children: React.ReactNode;
}

const FormGroup: FunctionComponent<FormGroupProps> = ({
  error,
  children,
  className,
  ...attrs
}) => {
  return (
    <div
      className={"form-group".concat(className ? ` ${className}` : "")}
      {...attrs}
    >
      {children}
      {error ? (
        <FormMessage
          variant="danger"
          id="username-error-message"
          data-testid="username-error-message"
        >
          {error}
        </FormMessage>
      ) : (
        false
      )}
    </div>
  );
};

export default FormGroup;
