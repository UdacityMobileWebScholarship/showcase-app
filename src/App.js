import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';

import { DetailCard } from './DetailCard/DetailCard';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from "./withRoot";
import './App.css';
import Tile from './components/Tiles/Tiles';

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

        <DetailCard onClick={this.handleClick} detail={true} detailText="Read More">
          <div className="title">This is the title</div>
          <div className="description">
            Eiusmod labore nisi excepteur dolor tempor non ad commodo eu nulla in.
            Culpa aute incididunt deserunt Lorem non tempor esse sunt aliquip.
            In consectetur ullamco irure culpa duis sunt. Fugiat dolore Lorem cupidatat
            et ex adipisicing proident minim.
          </div>
        </DetailCard>

        <DetailCard onClick={this.handleClick} detail={false} detailText="">
          <div className="title">Card 2</div>
          <div className="description">
            Card 2 goes here
          </div>
        </DetailCard>

        <DetailCard onClick={this.handleClick} detail={true} detailText="More Info">
          <div className="title">Card 3</div>
          <div className="description">
            Card 3 goes here
          </div>
        </DetailCard>

      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
