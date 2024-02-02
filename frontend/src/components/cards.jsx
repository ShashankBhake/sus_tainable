import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import './cards.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shcardortest,
  }),
}));

export default function CardElement({ cardData }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='body'>
    <div className='card' sx={{ maxWidth: 445 }}   >
      <Card sx={{ maxWidth: 445 }}>
        <CardHeader
          title={cardData.title}
          subheader={cardData.subheader}
          titleTypographyProps={{ variant: 'h6' }}
          subheaderTypographyProps={{ variant: 'body2' }}
        />
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={cardData.image}
          alt="image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {cardData.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="body2" color="text.secondary">
            {"Price : $" + cardData.price}
          </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
        </CardActions>
      </Card>
    </div>
    </div>

  );
}