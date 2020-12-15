import React, {useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom';
import {getAllTracksData} from '../redux/actions'
import {useDispatch, useSelector} from "react-redux";
import { Grid, Container, Card, Typography, CardContent, Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

const MainPage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const allTracksData = useSelector(state => state.allTracksData.tracks)
    
    useEffect(() => {
        dispatch(getAllTracksData(1))
    },[])

    const allTracks = allTracksData
    .map((track) => (
    <Grid 
        item 
        lg={6}
        key={uuidv4()}>
        <Card 
            className={classes.root}
            direction="row"
            alignItems="center"
            justify="space-between"
            bgcolor="text.secondary"
            key={uuidv4()}>
            <Box
            className={classes.cover}>
                <img src={track.image[1][Object.keys(track.image[1])[0]]} alt={track.name} />
            </Box>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Link to={{
                    pathname: "/artist",
                    propsSearch: track.artist.name}}>
                    <Typography component="h5" variant="h5" className={classes.text}>
                        {track.name}
                    </Typography>
                </Link>
                <Typography variant="subtitle1" color="textSecondary">
                    Artist: {track.artist.name}
                </Typography>
                    Link: <a href={track.artist.url}>{track.artist.url}</a>
                </CardContent>
            </div>
        </Card>
    </Grid>
    ))

    return (
        <Container fixed class={classes.main}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={3}>
                    {allTracks}
            </Grid>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    main: {
     position: "relative",
     padding: theme.spacing(9)
   },
   root: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: "#F0F8FF"
   },
   details: {
     display: 'flex',
     flexDirection: 'column',
     padding: theme.spacing(3)
   },
   content: {
     flex: '1 0 auto',
   },
   cover: {
     display: "flex",
     width: "100%",
     backgroundColor:"#ec407a",
     alignItems: "center"
   }
 }))
 
export default withRouter(MainPage)