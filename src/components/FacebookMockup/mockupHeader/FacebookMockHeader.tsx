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
          <input
            maxLength={60}
            className={`${styles.headerTitleInput} ${styles.editable}`}
            value={headerTitle}
            onChange={(e) => setHeaderTitle(e.target.value)}
            spellCheck={false}
            aria-label="Header title"
            style={{ width: `${Math.max(headerTitle.length + 2, 1)}ch` }}
          />

          <p>
            Sponsored <span aria-hidden="true"> · </span>
            <SponsoredIcon />
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Ellipsis size={18} />
          <X size={20} />
        </div>

      </div>
  )
}

export default FacebookMockupHeader