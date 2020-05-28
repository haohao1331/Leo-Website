import * as React from "react";
import { history } from "../store";
import { Button, Grid, TextField } from "@material-ui/core"
import { withStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Portrait from '../IMG_0975.png'


const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",

    },
    portrait: {
        position: 'absolute',
        top: '50px',
        right: '50px',
        width: '200px',
    },
}))

export default function Home() {
	const classes = useStyles();

	return (
        <div className={classes.root}>
            <img src={Portrait} className={classes.portrait} />
            Home Page
        </div>
	);
}
