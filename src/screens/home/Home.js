
import React, { Fragment } from "react";
import Header from "../../Common/header/Header.js";
import './Home.css';

import { makeStyles } from '@material-ui/core/styles';

// Material UI has mentioned that Grid List has been replace with Image List
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';



const useStyles = makeStyles((theme) => ({

    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        // transform: 'translateZ(0)',
    },

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



export default function Home(props) {
    const classes = useStyles();

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
                    {itemData.map((item) => (

                        <ImageListItem key={item.img}>
                            <img src={item.img} alt={item.title} />

                            <ImageListItemBar
                                title={item.title}
                            />
                        </ImageListItem>

                    ))}
                </ImageList>
            </div>


        </Fragment>

    )
}