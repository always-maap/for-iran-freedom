import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "../styles/IconButton.module.css";
import cn from "classnames";

type Props = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton(props: Props) {
  const { children, ...rest } = props;

  return (
    <button className={cn(styles.iconButton, rest.className)} {...rest}>
      {children}
    </button>
  );
}
