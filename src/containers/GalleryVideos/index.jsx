import React, { Fragment } from 'react';
import YouTube from 'react-youtube';
import Button from '@material-ui/core/Button/Button';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Dialog from '@material-ui/core/Dialog/Dialog';

class GalleryVideos extends React.Component {
  constructor(props) {
    super(props);

    this.onReady = this.onReady.bind(this);
  }

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, selectItem: null });
  };

  onReady = event => event.target.pauseVideo();

  render() {
    const { open } = this.state;
    const { fullScreen } = this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <Fragment>
        <Button style={{
          border: '1px solid grey',
          backgroundColor: '#00000017',
          margin: '15px',
        }} onClick={this.handleClickOpen}>Посмотреть видео</Button>
        <Dialog
          open={open}
          maxWidth="lg"
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Просмотр видео</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={this.onReady}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>

    );
  }
}

export default GalleryVideos;
