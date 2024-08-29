import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Creativity = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'var(--background-gradient, #1a1a2e)', // Fallback for dark mode
        color: 'var(--text-color, #eaeaea)', // Light text color for dark backgrounds
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '36px',
          marginBottom: '40px',
          fontWeight: 'bold',
          color: 'var(--heading-color, whit)', // Ensure the heading stands out in dark mode
        }}
      >
        {t('discoverNextGreatRead')}
      </motion.h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '300px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Stronger shadow for dark mode
            backgroundColor: 'var(--card-background, #162447)', // Darker card background for dark mode
            flex: '1',
          }}
        >
          <h1>!</h1>
          <h3
            style={{
              fontSize: '20px',
              marginBottom: '15px',
              fontWeight: 'bold',
              color: 'var(--text-color, #eaeaea)', // Light text color
            }}
          >
            {t('pickOneBook')}
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--subtext-color, #a9a9a9)' }}>
            {t('pickOneBookDescription')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '300px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            backgroundColor: 'var(--card-background, #162447)',
            flex: '1',
          }}
        >
          <h1>!</h1>
          <h3
            style={{
              fontSize: '20px',
              marginBottom: '15px',
              fontWeight: 'bold',
              color: 'var(--text-color, #eaeaea)',
            }}
          >
            {t('thousandsOfTitles')}
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--subtext-color, #a9a9a9)' }}>
            {t('thousandsOfTitlesDescription')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '300px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            backgroundColor: 'var(--card-background, #162447)',
            flex: '1',
          }}
        >
          <h1>!</h1>
          <h3
            style={{
              fontSize: '20px',
              marginBottom: '15px',
              fontWeight: 'bold',
              color: 'var(--text-color, #eaeaea)',
            }}
          >
            {t('exclusiveDeals')}
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--subtext-color, #a9a9a9)' }}>
            {t('exclusiveDealsDescription')}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ paddingTop: '10px' }}
      >
        <motion.button
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--button-background, #fca311)', // Kept the button color bright
            color: 'var(--button-text-color, #14213d)', // Dark button text color for contrast
            padding: '15px 40px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow for dark mode
          }}
        >
          {t('startReading')}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Creativity;
