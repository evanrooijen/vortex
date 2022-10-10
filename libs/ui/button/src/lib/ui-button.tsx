import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface UiButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const UiButton: FunctionComponent<PropsWithChildren<UiButtonProps>> = ({children, ...rest}) => {
  return (
    <button className='' {...rest}>
      {children}
    </button>
  );
}

export default UiButton;
