import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import Container from '@material-ui/core/Container';
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        padding: theme.spacing(2, 4, 3),
    },
}));



const handleClose = () => {
    setOpen(true);
};


export const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    const override = css`
       display: block;
       margin: 0 auto;
       border-color: red;
     `;
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    return (
        promiseInProgress &&


        <div className="sweet-loading">

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                <MoonLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={true}
                />
                </div>
            </Modal>
        </div>


    );
}
