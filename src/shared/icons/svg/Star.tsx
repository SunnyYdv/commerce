import cls from "classnames";
import React, { FC } from "react";
import { IconProps } from "shared/icons";

export const Star: FC<IconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.99984 14.2742L4.84984 16.7742C4.66651 16.8909 4.47484 16.9409 4.27484 16.9242C4.07484 16.9076 3.89984 16.8409 3.74984 16.7242C3.59984 16.6076 3.48317 16.4616 3.39984 16.2862C3.31651 16.1109 3.29984 15.9152 3.34984 15.6992L4.44984 10.9742L0.774841 7.79922C0.608174 7.64922 0.504174 7.47822 0.462841 7.28622C0.421507 7.09422 0.433841 6.90689 0.499841 6.72422C0.566507 6.54089 0.666507 6.39089 0.799841 6.27422C0.933174 6.15755 1.11651 6.08255 1.34984 6.04922L6.19984 5.62422L8.07484 1.17422C8.15817 0.974219 8.28751 0.824219 8.46284 0.724219C8.63817 0.624219 8.81717 0.574219 8.99984 0.574219C9.18317 0.574219 9.36217 0.624219 9.53684 0.724219C9.71151 0.824219 9.84084 0.974219 9.92484 1.17422L11.7998 5.62422L16.6498 6.04922C16.8832 6.08255 17.0665 6.15755 17.1998 6.27422C17.3332 6.39089 17.4332 6.54089 17.4998 6.72422C17.5665 6.90755 17.5792 7.09522 17.5378 7.28722C17.4965 7.47922 17.3922 7.64989 17.2248 7.79922L13.5498 10.9742L14.6498 15.6992C14.6998 15.9159 14.6832 16.1119 14.5998 16.2872C14.5165 16.4626 14.3998 16.6082 14.2498 16.7242C14.0998 16.8409 13.9248 16.9076 13.7248 16.9242C13.5248 16.9409 13.3332 16.8909 13.1498 16.7742L8.99984 14.2742Z"
        fill=""
      />
    </svg>
  );
};
