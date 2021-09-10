import React from "react";
import { Typography, Card, Button, CardActions, CardMedia, CardContent, AppBar, Toolbar, Container, Grid, CssBaseline } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./components/style";


function App() {

  const cards = [1,2,3,4,5,6,7,8,9,]

 const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar position='fixed'>
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography >
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography  variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' paragraph >
            Easily move pictures, add a title, and choose a cover design. And unlike photo albums, you create a photo book once and can order copies for everyone.

            </Typography>
            <div className={classes.Button}>
              <Grid container spacing={2} justifyContent='center'>
                
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See the photos
                  </Button>
                </Grid>
                <Grid item>
                <Button variant='outlined' color='primary'>
                    Secondary Action
                </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
          {cards.map((card) => (

             <Grid item key={card} xm={12} sm={6} md={4} >
              <Card className={classes.card}>
                <CardMedia
                 className={classes.cardMedia}
                 image="https://source.unsplash.com/random"
                 titel="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                  This is a media Section. You can use it for the discription purpose.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'> View </Button>
                  <Button size='small' color='primary'> Edit </Button>
                </CardActions>
              </Card>
            </Grid>

          ))}
           
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          All rights Reserved 2020
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          By photo Album
        </Typography>

      </footer>
    </React.Fragment>
  );
}

export default App;
