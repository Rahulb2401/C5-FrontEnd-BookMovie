
import React, { Fragment, useEffect, useState } from "react";
import Header from "../../Common/header/Header.js";
import './Home.css';

import { makeStyles } from '@material-ui/core/styles';
// Material UI has mentioned that Grid List has been replace with Image List
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Button, Card, CardActions, CardContent, FormControl, Input, InputLabel, MenuItem, Select, Typography, ListItemText, Checkbox } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({

    imageList: {
        flexWrap: 'nowrap'
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        // transform: 'translateZ(0)',
    },

    showrelease: {
        display: 'flex',

    },


    cardStyle: {
        minWidth: 240,
        maxWidth: 240,

        margin: theme.spacing
    },

    formControl: {
        minWidth: 100
    }
}));


const itemData = [
    {
        id: 1,
        img: 'https://i.imagesup.co/images2/0__05c7e898ac694e.jpg',
        title: 'fun',
        author: 'Image by Free-Photos on Pixabay',
        cols: 2,
        featured: true,
    },
    {
        id: 2,
        img: 'https://i.imagesup.co/images2/0__05c7e8a33418ff.jpg',
        title: 'dog',
        author: 'Image by Free-Photos on Pixabay',
    },
    {
        id: 3,
        img: 'https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_1280.jpg',
        title: 'Camera',
        author: 'Image by Free-Photos on Pixabay',
    },
    {
        id: 4,
        img: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg',
        title: 'Morning',
        author: 'Image by Free-Photos on Pixabay',
        featured: true,
    },
    {
        id: 5,
        img: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__480.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        id: 6,

        img: 'https://cdn.pixabay.com/photo/2015/10/26/11/10/honey-1006972__480.jpg',
        title: 'Honey',
        author: 'Image by Free-Photos on Pixabay',
    },
    {
        id: 7,
        img: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg',
        title: 'Morning',
        author: 'Image by Free-Photos on Pixabay',
        featured: true,
    },
    {
        id: 8,
        img: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__480.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        id: 9,
        img: 'https://cdn.pixabay.com/photo/2015/10/26/11/10/honey-1006972__480.jpg',
        title: 'Honey',
        author: 'Image by Free-Photos on Pixabay',
    }
];



const names = [

];


export default function Home() {

    const classes = useStyles();

    // Get movie list

    const [movieList, setMovieList] = useState([]);
   async function loadMovieData() {
        const rawResponse = await fetch("http://localhost:8085/api/v1/movies");
        const response = await rawResponse.json();
        setMovieList(response.movies);


        }

        useEffect(() => {
            loadMovieData();

        }, []);

        return (
            <Fragment>

                <Header>
                </Header>

                <div className="subHead">
                    <h2>Upcoming Movies</h2>
                </div>

                {/* Image list */}


                <div>
                    <ImageList className={classes.imageList} cellHeight={250} cols={6}>

                        {movieList.map((item) => (


                            <ImageListItem key={item.id}>
                                <img src={item.poster_url} alt={item.title} />

                                <ImageListItemBar
                                    title={item.title}
                                />
                            </ImageListItem>

                        )
                        )
                        }
                    </ImageList>
                </div>)


                {/* Flex container */}


                {/* Grid for released movies */}

                <div className="flex-container">

                    <div className="releasedMovies">


                        <ImageList className={classes.showrelease} cellHeight={350} cols={4}>
                            {itemData.map((item) => (

                                <ImageListItem key={item.id}>
                                    <img src={item.img} alt={item.title} />

                                    <ImageListItemBar
                                        title={item.title}
                                        author={item.author}
                                    />

                                </ImageListItem>

                            ))}
                        </ImageList>



                    </div>

                    {/* Filter card */}
                    <div id="filter">

                        <Card className={classes.cardStyle}>

                            <CardContent>
                                <Typography color="primary" gutterBottom>
                                    FILTER MOVIES BY:
                                </Typography>

                                <FormControl className={classes.formControl}>

                                    <InputLabel htmlFor="my-input" fullWidth>Movie Name</InputLabel>
                                    <Input type="text" id="my-input" fullWidth></Input>
                                </FormControl>
                                <br></br>

                                <FormControl className={classes.formControl}>

                                    <InputLabel htmlFor="my-input">Genre</InputLabel>
                                    <Select
                                        id="genre"
                                        value=""
                                        onChange=""
                                        input={<Input />}
                                        MenuProps=""
                                    >

                                        {names.map((name) => (
                                            <MenuItem key="" value="">
                                                <Checkbox checked="" />
                                                <ListItemText primary="" />
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                                <br></br>

                                <FormControl className={classes.formControl}>

                                    <InputLabel htmlFor="my-input">Artists</InputLabel>
                                    <Input type="text" id="my-input"></Input>
                                </FormControl>
                                <br></br>

                                <FormControl className={classes.formControl}>

                                    <InputLabel htmlFor="my-input" shrink="true" >Release Date Start</InputLabel>
                                    <Input type="date" id="my-input"></Input>
                                </FormControl>
                                <br></br>

                                <FormControl className={classes.formControl}>

                                    <InputLabel htmlFor="my-input" shrink="true">Release Date End</InputLabel>
                                    <Input type="date" id="my-input"></Input>
                                </FormControl>

                            </CardContent>

                            <CardActions>
                                <Button variant="contained" color="primary" fullWidth>Apply</Button>
                            </CardActions>
                        </Card>

                    </div>
                </div>


            </Fragment>

        )
    }