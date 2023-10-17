import * as React from "react";

type Props<T> = {
  className?: string;
  children: React.ReactNode;
} & T;

export const Container = ({
  className,
  children,
  ...rest
}: Props<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => {
  return (
    <div className={`mx-auto w-[90%] max-w-screen-xl ${className}`} {...rest}>
      {children}
    </div>
  );
};
