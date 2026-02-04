import { useMockupContext } from "../../../hooks/useMockupContext";
import EditableSpan from "../../shared/EditableSpan";
import UploadImageInput from "../../shared/UploadImageInput";
import { onImageChange } from "../../../utils/onImageChange";
import GlobeSvg from "../../shared/svg/GlobeSvg";
import { Ellipsis, X } from "lucide-react";

type HeaderSectionClasses = {
  container: string;
  imgContainer: string;
  titleContainer: string;
  editable: string;
  buttonContainer: string;
};

interface HeaderSectionProps {
  classes: HeaderSectionClasses;
  showUpload?: boolean;
  showGlobe?: boolean;
}

const MokcupHeaderSection = ({
  classes,
  showGlobe = false,
}: HeaderSectionProps) => {
  const { headerImg, setHeaderImg, headerTitle, setHeaderTitle } =
    useMockupContext();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setHeaderImg);
  };

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
          maxLength={50}
        />
          <p>Sponsored
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

export default MokcupHeaderSection;
