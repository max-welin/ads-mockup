import type { ComponentType } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import EditableSpan from "../../shared/EditableSpan";

type CtaSectionClasses = {
  container: string;
  titleContainer: string;
  url: string;
  title: string;
  editable: string;
};

interface Props {
  classes: CtaSectionClasses;
  CtaButton?: ComponentType;
}

const GenericCtaSection = ({
  classes,
  CtaButton,
}: Props) => {
  const {
    url,
    setUrl,
    ctaTitle,
    setCtaTitle,
    ctaSectionDescription,
    setCtaSectionDescription,
  } = useMockupContext();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <EditableSpan
          className={`${classes.url} ${classes.editable}`}
          text={url}
          onBlurFn={setUrl}
          maxLength={50}
        />

        <EditableSpan
          className={`${classes.title} ${classes.editable}`}
          text={ctaTitle}
          onBlurFn={setCtaTitle}
          maxLength={90}
        />

        <EditableSpan
          className={classes.editable}
          text={ctaSectionDescription}
          onBlurFn={setCtaSectionDescription}
          maxLength={55}
        />
      </div>

      {CtaButton && <CtaButton />}
    </div>
  );
};

export default GenericCtaSection;
