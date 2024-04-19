import {
    Card,
    Avatar,
    Box,
    CardContent,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  interface FeedItemProps {
    feed: {
      id: string;
      brand: {
        name: string;
        logo: string;
      };
      brandName: string;
      banner_image: string;
      feed_title: string;
    };
    onClick: () => void;
  }
  
  const FeedListItem: React.FC<FeedItemProps> = ({ feed, onClick }) => {
   
    return (
      <Card
        sx={{ width: "400px", margin: "auto", border: "none", borderRadius: "0",}}
      >
        <CardContent sx={{padding: "16px 16px 0 !important" }} >
          <div
            className="feed-item"
            onClick={onClick}
            style={{ textAlign: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={feed?.brand?.logo}
                  sx={{ width: 24, height: 24, mr: 1 }}
                />
                <span>{feed.brand.name}</span>
              </Box>
              <span style={{ color: "#0000ff", marginLeft: "auto", fontWeight: "bold", cursor:"pointer" }}>
                JOIN BRIEF NOW
              </span>
            </Box>
            <div
              style={{
                margin: "auto",
                textAlign: "center",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                src={feed.banner_image}
                alt={feed.brand.name}
                style={{
                  width: "100%",
                  height: "475px",
                  display: "block",
                  margin: "15px auto auto",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "left",
                  position: "absolute",
                  bottom: 0,
                  transform: "translateY(-32%)",
                  left: "20px",
                  color: "#fff",
                  fontWeight: '500',
                  fontSize: '16px',
                  width: '60%',
                }}
              >
                {feed.feed_title}
              </Typography>
            </div>
            <div style={{ textAlign: "center" }}></div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default FeedListItem;
  