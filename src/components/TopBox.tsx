import * as React from "react";
import { history } from "../store";
import { Button, Grid, TextField } from "@material-ui/core"
import {
    withStyles,
    makeStyles,
    Theme,
  } from '@material-ui/core/styles';



export default function TopBox() {
	const classes = useStyles();

	return (
		<Grid container className={classes.root} direction="row" justify="space-around" alignItems="stretch" spacing={0}>
            <MyButton color="default" onClick={() => history.push("/")}>Home</MyButton>
            <MyButton color="default" onClick={() => history.push("/resources")}>
            	Resources
            </MyButton>
            <MyButton color="default" onClick={() => history.push("COSweeper")}>
            	COSweeper
            </MyButton>
            {/* <MyButton color="default" onClick={() => history.push("/in/setting")} >
                设置
            </MyButton> */}
        </Grid>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "6.5vh",
        background: 'rgba(0, 8, 255, 1)',
        minHeight: '45px',
    },
    bottomBorder: {
        background: 'black',
        height: '4px',
    },
}));

const MyButton = withStyles((theme: Theme) => ({
    root: {
        color: 'white',
        backgroundColor: 'rgba(247, 3, 251, 0)',
            '&:hover': {
        backgroundColor: 'rgba(251, 3, 234, 0.3)',
        },
        width: '25%'
    },
}))(Button);