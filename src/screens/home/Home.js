
// import React, { Fragment, useEffect, useState } from "react";
// import Header from "../../Common/header/Header.js";
// import './Home.css';

// import { makeStyles } from '@material-ui/core/styles';
// // Material UI has mentioned that Grid List has been replace with Image List
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import { Button, Card, CardActions, CardContent, FormControl, Input, InputLabel, MenuItem, Select, Typography, ListItemText, Checkbox } from "@material-ui/core";



// const useStyles = makeStyles((theme) => ({

//     imageList: {
//         flexWrap: 'nowrap'
//         // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//         // transform: 'translateZ(0)',
//     },

//     showrelease: {
//         display: 'flex',

//     },


//     cardStyle: {
//         minWidth: 240,
//         maxWidth: 240,

//         margin: theme.spacing
//     },

//     formControl: {
//         minWidth: 100
//     }
// }));


// const names = [

// ];


// export default function Home(props) {

//     const classes = useStyles();

//     // Get movie list

//     const [movieList, setMovieList] = useState([]);
//     async function loadMovieData() {
//         const rawResponse = await fetch("http://localhost:8085/api/v1/movies");
//         const response = await rawResponse.json();
//         setMovieList(response.movies);


//     }

//     useEffect(() => {
//         loadMovieData();

//     }, []);

//     return (
//         <Fragment>

//             <Header>
//             </Header>

//             <div className="subHead">
//                 <h2>Upcoming Movies</h2>
//             </div>

//             {/* Image list */}


//             <div>
//                 <ImageList className={classes.imageList} cellHeight={250} cols={6}>

//                     {movieList.map((item) => (


//                         <ImageListItem key={item.id}>
//                             <img src={item.poster_url} alt={item.title} />

//                             <ImageListItemBar
//                                 title={item.title}
//                             />
//                         </ImageListItem>
                
//                     )
//                     )
//                     }
//                 </ImageList>
//             </div>)


//             {/* Flex container */}


//             {/* Grid for released movies */}

//             <div className="flex-container">

//                 <div className="releasedMovies">


//                     <ImageList className={classes.showrelease} cellHeight={650} cols={4}>
//                         {movieList.map((item) => (

//                             <ImageListItem key={item.id}>
//                                 <img src={item.poster_url} alt={item.title} />

//                                 <ImageListItemBar
//                                     title={item.title}
//                                     release_date={<span>Release Date {item.release_date}</span>}
                                
// />

//                             </ImageListItem>

//                         ))}
//                     </ImageList>



//                 </div>

//                 {/* Filter card */}
//                 <div id="filter">

//                     <Card className={classes.cardStyle}>

//                         <CardContent>
//                             <Typography color="primary" gutterBottom>
//                                 FILTER MOVIES BY:
//                             </Typography>

//                             <FormControl className={classes.formControl}>

//                                 <InputLabel htmlFor="my-input" fullWidth>Movie Name</InputLabel>
//                                 <Input type="text" id="my-input" fullWidth></Input>
//                             </FormControl>
//                             <br></br>

//                             <FormControl className={classes.formControl}>

//                                 <InputLabel htmlFor="my-input">Genre</InputLabel>
//                                 <Select
//                                     id="genre"
//                                     value=""
//                                     onChange=""
//                                     input={<Input />}
//                                     MenuProps=""
//                                 >

//                                     {names.map((name) => (
//                                         <MenuItem key="" value="">
//                                             <Checkbox checked="" />
//                                             <ListItemText primary="" />
//                                         </MenuItem>
//                                     ))}

//                                 </Select>
//                             </FormControl>
//                             <br></br>

//                             <FormControl className={classes.formControl}>

//                                 <InputLabel htmlFor="my-input">Artists</InputLabel>
//                                 <Input type="text" id="my-input"></Input>
//                             </FormControl>
//                             <br></br>

//                             <FormControl className={classes.formControl}>

//                                 <InputLabel htmlFor="my-input" shrink="true" >Release Date Start</InputLabel>
//                                 <Input type="date" id="my-input"></Input>
//                             </FormControl>
//                             <br></br>

//                             <FormControl className={classes.formControl}>

//                                 <InputLabel htmlFor="my-input" shrink="true">Release Date End</InputLabel>
//                                 <Input type="date" id="my-input"></Input>
//                             </FormControl>

//                         </CardContent>

//                         <CardActions>
//                             <Button variant="contained" color="primary" fullWidth>Apply</Button>
//                         </CardActions>
//                     </Card>

//                 </div>
//             </div>


//         </Fragment>

//     )
// }


import React, {useLayoutEffect , useState } from 'react'
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});


const Home = ( props ) => {


    const [movieName, setMovieName] =  useState("");
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [releasedMovies, setReleasedMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [artistsList, setArtistsList] = useState([]);
    const [releaseDateStart, setReleaseDateStart] = useState("");
    const [releaseDateEnd, setReleaseDateEnd] = useState("");


    useLayoutEffect (() => {

    // Get upcoming movies
    let data = null;

    fetch(props.baseUrl + "movies?status=PUBLISHED", {
        method: "GET" ,
        headers: {
            "Cache-Control" : "no-cache",
            'Accept': 'application/json'
        },
        body: data,
    }).then((response) => response.json())
	  .then((response) => {
        setUpcomingMovies(response.movies);
    });
    
	// Get released movies
	
	let dataReleased = null;
    

    fetch(props.baseUrl + "movies?status=RELEASED", {
        method: "GET" ,
        headers: {
            "Cache-Control" : "no-cache",
            'Accept': 'application/json'
        },
        body: dataReleased,
    })
    .then((response) => response.json())
    .then((response) => {
        setReleasedMovies(response.movies);
    });

         // Get filters
    let dataGenres = null;

    fetch(props.baseUrl + "genres", {
        method: "GET" ,
        headers: {
            'Cache-Control' : "no-cache",
            'Accept': 'application/json'
        },
        body: dataGenres,
    })
    .then((response) => response.json())
    .then((response) => {
        setGenresList(response.genres);
    });

        // Get artists
        let dataArtists = null;

        fetch(props.baseUrl + "artists", {
            method: "GET" ,
            headers: {
                "Cache-Control" : "no-cache",
                'Accept': 'application/json'
            },
            body: dataArtists,
        })
        .then((response) => response.json())
        .then((response) => {
            setArtistsList(response.artists);
        });

}, []);




const movieNameChangeHandler = event => {
    setMovieName(event.target.value);
}

const genreSelectHandler = event => {
    setGenres(event.target.value);
}

const artistSelectHandler = event => {
    setArtists(event.target.value);
}

const releaseDateStartHandler = event => {
    setReleaseDateStart( event.target.value);
}

const releaseDateEndHandler = event => {
    setReleaseDateEnd(event.target.value);
}

const movieClickHandler = (movieId) => {
    props.history.push('/movie/' + movieId);
}

const filterApplyHandler = () => {
    let queryString = "?status=RELEASED";
    if (movieName !== "") {
        queryString += "&title=" + movieName;
    }
    if (genres.length > 0) {
        queryString += "&genres=" + genres.toString();
    }
    if (artists.length > 0) {
        queryString += "&artists=" + artists.toString();
    }
    if (releaseDateStart !== "") {
        queryString += "&start_date=" + releaseDateStart;
    }
    if (releaseDateEnd !== "") {
        queryString += "&end_date=" + releaseDateEnd;
    }

    let dataFilter = null;

    fetch(props.baseUrl +"movies" + encodeURI(queryString),{
        method: "GET",
        headers: {
            "Cache-Control": "no-cache"
        },
        body: dataFilter,
    })
    .then((response) => response.json())
    .then((response) => {
        setReleasedMovies(response.movies)});

}



const { classes } = props;

return( <div>
    <Header baseUrl={props.baseUrl} />

    <div className={classes.upcomingMoviesHeading}>
        <span>Upcoming Movies</span>
    </div>

    <GridList cellHeight={250} cols={6} className={classes.gridListUpcomingMovies} >
        {upcomingMovies.map(movie => (
            <GridListTile key={"upcoming" + movie.id}>
                <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                <GridListTileBar title={movie.title} />
            </GridListTile>
        ))}
    </GridList>

    <div className="flex-container">
        <div className="left">
            <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                {releasedMovies.map(movie => (
                    <GridListTile onClick={() => movieClickHandler(movie.id)} className="released-movie-grid-item" key={"grid" + movie.id}>
                        <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                        <GridListTileBar
                            title={movie.title}
                            subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
        <div className="right">
            <Card>
                <CardContent>
                    <FormControl className={classes.formControl}>
                        <Typography className={classes.title} color="textSecondary">
                            FIND MOVIES BY:
                        </Typography>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                        <Input id="movieName" onChange={movieNameChangeHandler} />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                        <Select
                            multiple
                            input={<Input id="select-multiple-checkbox-genre" />}
                             renderValue={selected => selected.join(",")}
                        
                            value={genres}
                            onChange={genreSelectHandler}
                        >
                            {genresList.map(genre => (
                                <MenuItem key={genre.id} value={genre.genre}>
                                    <Checkbox checked={genres.indexOf(genre.genre) > -1} />
                                    <ListItemText primary={genre.genre} />
                                </MenuItem>
                            ))}
                        </Select> 
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                        <Select
                            multiple
                            input={<Input id="select-multiple-checkbox" />}
                             renderValue={selected => selected.join(',')}
                            value={artists}
                            onChange={artistSelectHandler}
                        >
                            {artistsList.map(artist => (
                                <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                    <Checkbox checked={artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                    <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <TextField
                            id="releaseDateStart"
                            label="Release Date Start"
                            type="date"
                            defaultValue=""
                            InputLabelProps={{ shrink: true }}
                            onChange={releaseDateStartHandler}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <TextField
                            id="releaseDateEnd"
                            label="Release Date End"
                            type="date"
                            defaultValue=""
                            InputLabelProps={{ shrink: true }}
                            onChange={releaseDateEndHandler}
                        />
                    </FormControl>
                    <br /><br />
                    <FormControl className={classes.formControl}>
                        <Button onClick={() =>filterApplyHandler()} variant="contained" color="primary">
                            APPLY
                        </Button>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    </div>
</div > )
}


export default withStyles(styles)(Home);