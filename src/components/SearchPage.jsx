import React, {useState} from 'react'
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getTrackInfo} from '../redux/actions'
import {Container,Typography,Box, Input, Button, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

const SearchPage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const track = useSelector(state => state.trackInfo.track)
    const loading = useSelector(state => state.trackInfo.loading)
    const [trackName, setTrackName] = useState('')

    const handleSearch = (track) => {
        dispatch(getTrackInfo(track))
    }
    return (
        <Container fixed className={classes.main}>
            <Box className={classes.cover}>
            <Input 
                className={classes.input}
                type="text" 
                value={trackName}
                placeholder="Track name" 
                onChange={(e) => setTrackName(e.target.value)}/>
            <Button 
                color="secondary" 
                variant="contained"
                onClick={() => handleSearch(trackName)}
                >Find Track
            </Button>
            </Box>
            <Grid
                className={classes.belowInputText}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={3}>
            {loading ? <Typography component="h5" variant="h5">Please type track name and press "Find track"</Typography> : 
            track.map((track) => (
                <Grid 
                    item 
                    lg={3}
                    className={classes.trackInfoCover}
                    key={uuidv4()}>
                    <Box className={classes.songInfo}>
                        <Typography variant="subtitle1" color="textSecondary" >{track.name}</Typography>
                        <Typography variant="subtitle1" color="textSecondary" >{track.artist}</Typography>
                    </Box>
                </Grid>))}
        </Grid>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    main: {
     position: "relative",
     padding: theme.spacing(9),
     display: "flex",
     justifyContent: "center",
     flexDirection: "column",
     alignItems: "center"
   },
   cover: {
       display: "flex",
       flexDirection: "row",
       alignItems: "center",
       marginTop: 20
   },
   belowInputText: {
       marginTop: 10
   },
   input: {
       marginRight: 20,
       width: 300
   },
   songInfo: {
       padding: theme.spacing(2),
       backgroundColor: "#e8eaf6",
       borderRadius: 10,
       border: "4px solid",
       borderColor: "#ff80ab"
   }
}))

export default withRouter(SearchPage)