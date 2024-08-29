// InfoBook.js

import { useDispatch, useSelector } from "react-redux";
import { getTodosById } from "../../store/reducers/todoById/todoByIdSlice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./infoBook.css";
import { getSlider } from "../../store/reducers/todoSlider/sliderSlice";

const InfoBook = () => {
  let { id } = useParams();
  let { data } = useSelector((state) => state.todoById);
  let { items } = useSelector((state) => state.todoSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosById(id));
    dispatch(getSlider());
  }, []);

  return (
    <div className="main">
      <Container maxWidth="lg">
        {data?.map((el) => (
          <motion.div key={el.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Card className="info-card">
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <img src={el.img} alt={el.nameOfBook} className="book-image" />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Typography variant="h3" component="div" gutterBottom>{el.nameOfBook}</Typography>
                    <Typography variant="h5" color="textSecondary">{el.author}</Typography>
                    <div className="book-info">
                      <Typography variant="body1" component="div">
                        <strong>Language:</strong> {el.language}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Category:</strong> {el.category}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Release Date:</strong> {el.release}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Copyright Status:</strong> {el.copyrightStatus}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Downloads:</strong> {el.downloads}
                      </Typography>
                    </div>
                    <Button variant="contained" color="primary" href={el.readOnline} target="_blank" className="read-button">Read Online</Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        ))}
        <div className="recommendations-section">
          <Typography variant="h4" component="div" gutterBottom>Recommended Books</Typography>
          <div className="recommendations">
            {items?.map((item) => (
              <Link to={`/slider/${item.id}`} key={item.id} className="recommendation-link">
                <img src={item.img} alt={item.nameOfBook} className="recommendation-image" />
                <Typography variant="body2">{item.nameOfBook}</Typography>
              </Link>
            ))}
          </div>
        </div>
        <div className="advertisement-section">
          <Typography variant="h4" component="div" gutterBottom>Advertisement</Typography>
          <div className="advertisement">
            <Typography variant="body1">Your Ad Here!</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoBook;