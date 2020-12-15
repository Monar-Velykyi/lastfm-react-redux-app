import React, {useEffect} from 'react'
import { withRouter} from 'react-router-dom';
import {getArtistData} from '../redux/actions'
import {useDispatch, useSelector} from "react-redux";
import {Container,Typography,Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const ArtistPage = ({location}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const artistInfo = useSelector(state => state.artistInfo.info)
    const loading = useSelector(state => state.artistInfo.loading)

    useEffect(() => {
        if (artistInfo.name == location.propsSearch || location.propsSearch == undefined) {return}
        dispatch(getArtistData(location.propsSearch))
    },[])

    return (
        <Container fixed class={classes.main}>
            {loading 
            ? <div className="loader"/>
            : <div id={artistInfo.mbid}>
                <Box className={classes.artist}>
                    <img src={artistInfo.image[1][Object.keys(artistInfo.image[1])[0]]} alt={artistInfo.name} className={classes.img}/>
                    <Typography component="h5" variant="h5">{artistInfo.name}</Typography>
                </Box>
                <Box className={classes.cover}>
                    <Typography component="h6" variant="h6">Tags: </Typography>{artistInfo.tags.tag.map((tag) => <Typography variant="subtitle1" className={classes.tags}>{tag.name}</Typography>)}
                </Box>
                <Typography variant="subtitle1" color="textSecondary" className={classes.content}>{artistInfo.bio.content}</Typography>
            </div>}
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    main: {
     position: "relative",
     padding: theme.spacing(9)
   },
   cover: {
       display: "flex",
       flexDirection: "row",
       alignItems: "center"
   },
   tags: {
       marginTop: 10,
       marginRight: 5,
       backgroundColor: "#f50057",
       padding: theme.spacing(0.3),
       color: "#fce4ec",
       borderRadius: 5
   },
   content: {
       marginTop: 10
   },
   artist: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
   },
   img: {
    marginRight: 40
   }
}))

export default withRouter(ArtistPage)