import { Ellipsis, X } from 'lucide-react';
import { useMockupContext } from '../../../hooks/useMockupContext';
import SponsoredIcon from '../../Shared/SponsoredIcon';
import styles from './FacebookMockup.module.css'

const FacebookMockupHeader = () => {

    const { headerImg, headerTitle, setHeaderTitle } = useMockupContext();

  return (
    <div className={styles.mockupHeader}>
        <img src={headerImg} alt={`${headerTitle} logo`} />

        <div className={styles.headerTitleContainer}>
             <span
          contentEditable
          suppressContentEditableWarning
          className={`${styles.title} ${styles.editable}`}
          onBlur={(e) => setHeaderTitle(e.currentTarget.textContent ?? "")}
        >
          {headerTitle}
        </span>

          <p>
            Sponsored <span aria-hidden="true"> · </span>
            <SponsoredIcon />
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Ellipsis size={20} />
          <X size={22} />
        </div>

      </div>
  )
}

export default FacebookMockupHeader