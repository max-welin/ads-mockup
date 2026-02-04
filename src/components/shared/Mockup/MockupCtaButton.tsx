import { useState } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import { CTA_COPY_OPTIONS } from "../../../config/ctaButtonOptions";

type CtaButtonClasses = Partial<{
  ctaButton: string;
  copySelectionWrapper: string;
  active: string;
  editable: string;
}>;

interface Props {
  classes: CtaButtonClasses;
}

const MockupCtaButton = ({ classes }: Props) => {
  const [showCopyOptions, setShowCopyOptions] = useState(false);

  const { ctaCopy, setCtaCopy } = useMockupContext();

  return (
    <>
      <div
        className={classes.ctaButton}
        onMouseEnter={() => setShowCopyOptions(true)}
        onMouseLeave={() => setShowCopyOptions(false)}
      >
        <p className={classes.editable}>{ctaCopy}</p>
        {showCopyOptions && (
          <div
            className={classes.copySelectionWrapper}
            onMouseEnter={() => setShowCopyOptions(true)}
            onMouseLeave={() => setShowCopyOptions(false)}
          >
            <ul>
              {CTA_COPY_OPTIONS.map((option, i) => (
                <li
                  key={i}
                  onClick={() => setCtaCopy(option)}
                  className={option === ctaCopy ? `${classes.active}` : ""}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MockupCtaButton;
