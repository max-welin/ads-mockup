import { type ReactNode } from "react";

interface SettingsButtonProps {
  children: ReactNode;
  setter: (value: React.SetStateAction<boolean>) => void;
  className: string;
  handleClick?: () => void;
}

const SettingsButton = ({
  children,
  setter,
  className,
  handleClick,
}: SettingsButtonProps) => {
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setter(true)}
      onMouseLeave={() => setter(false)}
      className={className}
    >
      {children}
    </button>
  );
};

export default SettingsButton;
