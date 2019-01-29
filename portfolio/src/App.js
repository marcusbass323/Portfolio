import React, { Component } from 'react';
import HulkModal from './components/HulkModal';
import BallmerModal from './components/BallmerModal';
import BatModal from './components/BatModal';
import AliModal from './components/AliModal';

import './App.css';

class App extends Component {

  state = {
    Hulkshow: false,
    Ballmershow: false,
    Batshow: false,
  };

  showHulkModal = () => {
    this.setState({
      Hulkshow: true,
    });
  };

  showBallmerModal = () => {
    this.setState({
      Ballmershow: true,
    });
  };

  showBatModal = () => {
    this.setState({
      Batshow: true,
    });
  };

  showAliModal = () => {
    this.setState({
      Alishow: true,
    });
  };

  hideModal = () => {
    this.setState({
      Hulkshow: false,
      Ballmershow: false,
      Batshow: false,
      Alishow: false
    
    });
  };

  render() {
    return (
      <div className="App">
                
      <HulkModal Hulkshow={this.state.Hulkshow} handleClose={this.hideModal}/>
      <BallmerModal Ballmershow={this.state.Ballmershow} handleClose={this.hideModal}/>
      <BatModal Batshow={this.state.Batshow} handleClose={this.hideModal}/>
      <AliModal Alishow={this.state.Alishow} handleClose={this.hideModal}/>


        <h1>Welcome</h1>
        <h2>Select your tour guide</h2>
        <div class="tourguides">
            <div>
            <img id="narrator" alt="" src="https://c3.thejournal.ie/media/2012/05/hulk-390x285.jpg"
              onMouseOver={e => (e.currentTarget.src = "https://media.tenor.com/images/4ce0f51b15f4f7784e0ac504c2c9324d/tenor.gif")}
              onMouseOut={e => (e.currentTarget.src = "https://c3.thejournal.ie/media/2012/05/hulk-390x285.jpg")}
              onClick={this.showHulkModal} 
              />
                <p className="Guide">The Hulk </p>
            </div>

            <div>
                <img id="narrator" alt="" src="https://specials-images.forbesimg.com/imageserve/5b58aaaca7ea434a7978f524/416x416.jpg?background=000000&cropX1=142&cropX2=1814&cropY1=205&cropY2=1878"
                onMouseOver={e => (e.currentTarget.src = "https://media.giphy.com/media/BWQVFNGC8CXafwwvk8/giphy.gif")}
                onMouseOut={e => (e.currentTarget.src = "https://specials-images.forbesimg.com/imageserve/5b58aaaca7ea434a7978f524/416x416.jpg?background=000000&cropX1=142&cropX2=1814&cropY1=205&cropY2=1878")}
                onClick={this.showBallmerModal}
                />
                <p className="Guide">Steve Ballmer</p>
            </div>

            <div>
            <img id="narrator" alt="" src="http://thesource.com/wp-content/uploads/2014/05/630x.jpg"
              onMouseOver={e => (e.currentTarget.src = "https://media.giphy.com/media/tPvffUnHzxOfe/giphy.gif")}
              onMouseOut={e => (e.currentTarget.src = "http://thesource.com/wp-content/uploads/2014/05/630x.jpg")}                
              onClick={this.showBatModal}
  
            />    
            <p className="Guide">The Bat </p>
            </div>

            <div>
                <img id="narrator" alt="" src="https://media.gq.com/photos/57525db7194831767ce37b5a/master/w_3600/ali-obit-lede.jpg"
                onMouseOver={e => (e.currentTarget.src = "https://img.washingtonpost.com/pbox.php?url=https://www.washingtonpost.com/blogs/early-lead/files/2016/06/flexin.gif&op=noop")}
                onMouseOut={e => (e.currentTarget.src = "https://media.gq.com/photos/57525db7194831767ce37b5a/master/w_3600/ali-obit-lede.jpg")}                
                onClick={this.showAliModal}
                />
                <p className="Guide">Muhammad Ali </p>
                </div>

        </div>
      </div>
    );
  }
}

export default App;
