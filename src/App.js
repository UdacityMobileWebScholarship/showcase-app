import React, { PureComponent } from 'react';
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

import { FirebaseHelper } from './sdk'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});
class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      userDetails: FirebaseHelper.getCurrentUser()
    }
  }


  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    const { userDetails } = this.state
    if (Boolean(userDetails)) {
      FirebaseHelper.signOut()
        .then(_ => this.setState({ userDetails: null }))
        .catch(_ => _)
    }
    else {
      FirebaseHelper.signIn()
        .then(userDetails => this.setState({ userDetails }))
        .catch(console.log)
    }
  };

  render() {
    const { classes } = this.props;
    const { open, userDetails } = this.state;
    const userSignedIn = Boolean(userDetails);

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
          {userSignedIn ? `Sign out` : `Sign in`}
        </Button>

        <DetailCard onClick={this.handleClick} detail={true} detailText="Read More">
          <div className="title">{
            userSignedIn
              ? `🎉🎉 Yay! you are authorized through GitHub 🎉🎉`
              : `Click on Sign In Button to authorize yourself`;
          }</div>
          <div className="description">
            {
              userSignedIn
                ? JSON.stringify(userDetails)
                : `You are not yet authorized`
            }
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
