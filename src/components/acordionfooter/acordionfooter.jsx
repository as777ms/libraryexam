import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="footer-content">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Library Links
            </Typography>
            <ul>
              <li><Link href="#catalog" color="inherit">Catalog</Link></li>
              <li><Link href="#events" color="inherit">Events</Link></li>
              <li><Link href="#membership" color="inherit">Membership</Link></li>
              <li><Link href="#contact" color="inherit">Contact Us</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Resources
            </Typography>
            <ul>
              <li><Link href="#ebooks" color="inherit">eBooks</Link></li>
              <li><Link href="#audiobooks" color="inherit">Audiobooks</Link></li>
              <li><Link href="#research" color="inherit">Research</Link></li>
              <li><Link href="#databases" color="inherit">Databases</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              About Us
            </Typography>
            <ul>
              <li><Link href="#about" color="inherit">About the Library</Link></li>
              <li><Link href="#team" color="inherit">Our Team</Link></li>
              <li><Link href="#policies" color="inherit">Policies</Link></li>
              <li><Link href="#support" color="inherit">Support Us</Link></li>
            </ul>
          </Grid>
          
        </Grid>
      </Container>
      <Box className="footer-bottom">
        <Box className="social-icons">
          <IconButton href="#facebook" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="#twitter" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="#linkedin" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="#instagram" color="inherit">
            <Instagram />
          </IconButton>
        </Box>
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} YourLibraryName | All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;