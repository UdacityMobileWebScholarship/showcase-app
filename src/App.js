import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from "./withRoot";
import './App.css';
const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class App extends React.Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle>Test Popup</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Hello World</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleClose}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <Typography variant="display1" gutterBottom>
                    Material-UI
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    Showcase App
                </Typography>
                <Button variant="raised" color="secondary" onClick={this.handleClick}>
                    Test Popup
                </Button>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(App));