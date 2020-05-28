import * as React from "react";
import { history } from "../store";
import { Button, Grid, TextField } from "@material-ui/core"
import {
    withStyles,
    makeStyles,
    Theme,
  } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
    },
}));

export default function Resources() {
	const classes = useStyles();

	return (
		<Grid container className={classes.root} direction="row" justify="space-around" alignItems="stretch" spacing={0}>
            Resources Page
        </Grid>
	);
}


