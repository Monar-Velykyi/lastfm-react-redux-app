import React from 'react'
import MainPage from './components/MainPage'
import { Route , Switch, withRouter} from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import SearchPage from './components/SearchPage';
import {Container, AppBar, Toolbar, Typography, Button, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  mainLink: {
    cursor: "pointer",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}))

function App() {
  const classes = useStyles()
  const history = useHistory();
  
    function handleSearchClick() {
      history.push("/search");
    }
    function handleHomeClick() {
      history.push("/");
    }

  return (
      <Container maxWidth="lg">
        <AppBar>
          <Container fixed>
            <Toolbar className={classes.toolbar}>
              <Box className={classes.mainLink} onClick={handleHomeClick}>
                <Typography variant="h3" class={classes.title}>Last.fm</Typography>
              </Box>
              <Box>
                <Button color="secondary" variant="contained" onClick={handleSearchClick}>Search Song</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/artist' component={ArtistPage}/>
          <Route exact path='/search' component={SearchPage}/>
        </Switch>
      </Container>
  );
}

export default withRouter(App);