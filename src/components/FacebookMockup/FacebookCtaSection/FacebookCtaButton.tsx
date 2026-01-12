import { useMockupContext } from "../../../hooks/useMockupContext";
import EditableSpan from "../../shared/svg/EditableSpan";
import facebookMockupStyles from "../FacebookMockup.module.css";
import styles from "./FacebookCtaSection.module.css";

const CTA_BUTTON_OPTIONS = [
  "Learn More",
  "Download",
  "Apply Now",
  "Show Now",
  "Watch More",
  "Subscribe",
  "Sign Up",
  "Book Now",
  "Call Now",
  "Contact Us",
  "Listen Now",
  "Get Showtimes",
  "Order Now",
  "Get Directions",
  "See Menu",
  "Get Quote",
  "Send Message",
  "Request Time",
];

const FacebookCtaButton = () => {
  const { ctaButtonText, setCtaButtonText } = useMockupContext();

  return (
    <>
      <div className={styles.ctaButton}>
        <EditableSpan
          className={facebookMockupStyles.editable}
          text={ctaButtonText}
          onBlurFn={setCtaButtonText}
        />
      </div>
    </>
  );
};

export default FacebookCtaButton;
