import { useMockupContext } from "../../../hooks/useMockupContext";
import EditableSpan from "../EditableSpan";
import UploadImageInput from "../UploadImageInput/UploadImageInput";
import { onImageChange } from "../../../utils/onImageChange";
import GlobeSvg from "../svg/GlobeSvg";
import { Ellipsis, X } from "lucide-react";

type HeaderSectionClasses = Partial<{
  container: string;
  imgContainer: string;
  titleContainer: string;
  editable: string;
  buttonContainer: string;
}>;

interface HeaderSectionProps {
  classes: HeaderSectionClasses;
  showUpload?: boolean;
  showGlobe?: boolean;
}

const MockupHeaderSection = ({
  classes,
  showGlobe = false,
}: HeaderSectionProps) => {
  const { headerImg, setHeaderImg, headerTitle, setHeaderTitle, platform } =
    useMockupContext();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setHeaderImg);
  };

  const maxTitleLength =
    platform === "facebook" ? 50 : platform === "instagram" ? 32 : 50;

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={headerImg} alt={`${headerTitle} logo`} />
        <UploadImageInput size={36} onChangeFn={handleImageChange} />
      </div>

      <div className={classes.titleContainer}>
        <EditableSpan
          className={classes.editable}
          text={headerTitle}
          onBlurFn={setHeaderTitle}
          maxLength={maxTitleLength}
        />
        <p>
          Sponsored
          {showGlobe && (
            <>
              <span aria-hidden="true"> · </span>
              <GlobeSvg />
            </>
          )}
        </p>
      </div>

      <div className={classes.buttonContainer}>
        <Ellipsis size={20} />
        <X size={22} />
      </div>
    </div>
  );
};

export default MockupHeaderSection;
