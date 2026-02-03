import { type ReactNode } from "react";
import { useMockupContext } from "../../hooks/useMockupContext";

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
  const { platform } = useMockupContext();

  const borderRadius = platform === "instagram" ? "12px" : "";

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setter(true)}
      onMouseLeave={() => setter(false)}
      className={className}
      style={{ borderTopLeftRadius: borderRadius }}
    >
      {children}
    </button>
  );
};

export default SettingsButton;
