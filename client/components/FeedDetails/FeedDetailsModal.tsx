import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, CardMedia, Box } from '@mui/material';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import { formatDate } from '../../utils/dateFormat';

interface FeedDetailsModalProps {
    feed?: any;
    comments?: any[];   
    onClose: () => void;
}

const FeedDetailsModal: React.FC<FeedDetailsModalProps> = ({ feed, comments, onClose }) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const handleScroll = (direction: 'up' | 'down') => {
        if (direction === 'up' && currentItemIndex > 0) {
            setCurrentItemIndex(currentItemIndex - 1);
        } else if (direction === 'down' && currentItemIndex < 1) {
            setCurrentItemIndex(currentItemIndex + 1);
        }
    };

    console.log(feed, comments, 'sidebar')

    return (
      <Dialog open={true} onClose={onClose} maxWidth="xl" fullWidth sx={{ width: '100%', maxWidth: '100%', height: '100%', color: 'red' }}>
        <DialogTitle sx={{position: 'absolute', zIndex: 9}}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton sx={{color: '#fff', backgroundColor: '#0000ff'}} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{padding: 0}}>
          <Box display="flex" sx={{height: '100%'}}>
            <Box flex={1} pr={1} sx={{ backgroundColor: '#000'}} position="relative">
              <Box
                position="absolute"
                top={0}
                display="flex"
                justifyContent="flex-end"
                width="100%"
                sx={{top: '41%'}}
              >
                <IconButton onClick={() => handleScroll("up")} sx={currentItemIndex === 0? {backgroundColor: '#0000ff', color: '#fff', opacity: '40%'} : {backgroundColor: '#0000ff', color: '#fff'}}>
                  <ExpandLessOutlinedIcon />
                </IconButton>
              </Box>
              <CardMedia
                component="img"
                src={currentItemIndex === 0 ? feed.ad_1_image : feed.ad_2_image}
                alt="Feed Image"
                className='card-media'
                style={{ width: "50%", height: "100%", margin: '0 auto', objectFit: 'contain', objectPosition: 'center' }}
              />
              <Box
                position="absolute"
                bottom={0}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-start"
                width="100%"
                sx={{top: '50%'}}
              >
                <IconButton onClick={() => handleScroll("down")} sx={currentItemIndex !== 0? {backgroundColor: '#0000ff', color: '#fff', opacity: '40%'} : {backgroundColor: '#0000ff', color: '#fff'} }>
                  <KeyboardArrowDownOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
            <Box flex={1} pl={2} pr={2} className="feed-details" sx={{flex: '0 0 500px', height: '100%', overflow: 'auto'}}>
              <Box display="flex" flexDirection="column" pt={2}>
                <Box display="flex" alignItems="start" sx={{ borderBottom: "1px solid #ddd" }}>
                  <Avatar
                    alt={feed.brand.name}
                    src={feed?.brand?.logo}
                    sx={{ width: 24, height: 24, mr: 1, }}
                  />
                  <Box >
                    <Typography variant="h6" sx={{fontWeight: 'bold', marginTop:'-5px'}}>{feed.brand.name}</Typography>
                    <Typography variant="subtitle1">
                        {formatDate(feed.starts_on)}
                    </Typography>
                  </Box>
                </Box>

                <Box mb={1} sx={{ borderBottom: "1px solid #ddd", padding:'8px 0' }}>
                  <Typography variant="h6" fontWeight="bold">
                    {feed.banner_text}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="start" sx={{ borderBottom: "1px solid #ddd", marginBottom: '8px', paddingBottom: '8px'}}>
                  <Avatar
                    alt={feed.brand.name}
                    src={feed?.brand?.logo}
                    sx={{ width: 24, height: 24, mr: 1 }}
                  />
                  <Box >
                    <Typography variant="h6" sx={{fontWeight: 'bold', marginTop:'-5px', fontSize: '14px' }}>{feed.brand.name}</Typography>
                    <Typography variant="subtitle1" sx={{fontSize: '13px'}}>
                        {feed.description}
                    </Typography>
                </Box>
                </Box>

                <Box mt="auto">
                  {comments?.map((userComment, index) => (
                    <Box key={index} display="flex" alignItems="start" >
                        <Avatar
                        alt={feed.brand.name}
                        src={userComment.user.avatar}
                        sx={{ width: 24, height: 24, mr: 1 }}
                        />
                        <Box sx={{fontWeight: 'bold', marginTop:'-5px', fontSize: '14px' }}>
                        <Typography variant="subtitle1" sx={{fontSize: '14px', fontWeight: 'bold'}} >
                            {userComment.user.name}
                        </Typography>
                        <Typography variant="body1" sx={{fontSize: '14px'}}>{userComment.comment}</Typography>
                        <Typography variant="subtitle1" sx={{fontSize: '12px'}}>
                            {formatDate(userComment.submitted_on)}
                        </Typography>
                        </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    );
};

export default FeedDetailsModal;