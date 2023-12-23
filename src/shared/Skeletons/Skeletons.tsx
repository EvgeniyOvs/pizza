import React from 'react';
import styles from './skeletons.module.scss';
import ContentLoader from "react-content-loader";

export function Skeletons() {
  return (
      <div className={styles.skeletons}>
          <ContentLoader
              speed={0}
              width={150}
              height={187}
              viewBox="0 0 150 187"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
          >
              <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
              <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
              <rect x="0" y="126" rx="5" ry="5" width="100" height="15" />
              <rect x="0" y="156" rx="5" ry="5" width="80" height="25" />
              <rect x="109" y="148" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
      </div>

  );
}
