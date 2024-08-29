import { Grid, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WifiIcon from '@mui/icons-material/Wifi';
import { useTranslation } from 'react-i18next';

const Icons = () => {
  const { t } = useTranslation();

  const data = [
    { icon: <BookIcon />, title: '642 000', description: t('books') },
    { icon: <HeadphonesIcon />, title: '280 000', description: t('audiobooks') },
    { icon: <StarIcon />, title: '+ 2 000', description: t('new_releases_monthly') },
    { icon: <FavoriteIcon />, title: t('collections_recommendations'), description: '' },
    { icon: <WifiIcon />, title: t('offline_online'), description: '' },
  ];

  return (
    <Grid container justifyContent="space-around" alignItems="center" sx={{ backgroundColor: '', py: 4 }}>
      {data.map((item, index) => (
        <Grid item key={index} textAlign="center">
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            {item.icon}
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 0.5 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" component="div">
            {item.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Icons;
