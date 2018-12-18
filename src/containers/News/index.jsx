import React, { Fragment } from 'react';
import { Timeline } from 'react-twitter-widgets';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import FOOTBALL_NEWS from '../../database/news';

class Home extends React.Component {
  state = {
    selectItem: null,
    open: false,
    footballNews: FOOTBALL_NEWS,
    term: '',
  };

  handleClickOpen = selectItem => () => {
    this.setState({ open: true, selectItem });
  };

  handleClose = () => {
    this.setState({ open: false, selectItem: null });
  };

  handleSearch = (event) => {
    this.setState({ term: event.target.value });
  };

  searchingFor = term => x => x.title.toLowerCase().includes(term.toLowerCase()) || !term;

  render() {
    const {
      open, selectItem, footballNews, term,
    } = this.state;

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
      }}
      >
        <div style={{ width: '75%' }}>
          <form className="news-search">
            <input
              type="text"
              placeholder="Поиск по новостям"
              onChange={this.handleSearch}
              value={term}
            />
          </form>
          {footballNews.filter(this.searchingFor(term)).map(item => (
            <Card key={item.id} style={{ display: 'flex', margin: '20px 0' }}>
              <Fragment>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{ width: '50%', height: '50%' }}
                  image={item.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {item.title}
                    <Button onClick={this.handleClickOpen(item)}>Подробнее</Button>
                  </Typography>
                </CardContent>
              </Fragment>
            </Card>
          ))}
          {selectItem && (
          <Dialog
            open={open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{selectItem.title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {selectItem.description}
                <img src={selectItem.image} alt="Фото" width="100%" />
                <span>
                  {selectItem.data}
                  {', '}
                  {selectItem.time}
                </span>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Закрыть
              </Button>
            </DialogActions>
          </Dialog>
          )}
        </div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ChampionsLeague',
          }}
          options={{
            username: 'TwitterDev',
            height: '100%',
          }}
        />
      </div>
    );
  }
}

export default Home;
