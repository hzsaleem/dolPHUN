import * as React from 'react';
import './App.css';
import Profile from "./Profile";
import Recommended from "./Recommended";


// import logo from './logo.svg';

/*interface EventItemData{
  event: string;
  date: string;
  time: string;
}

interface RecommendationState{
  items: Array<EventItemData>;
  newItemEvent: string;
  newItemDate: string;
  newItemTime: string;
}*/

interface InterfaceAppState{
  showRecommendation: boolean;
  showProfile: boolean;
  showAll: boolean;
}


class App extends React.Component <{}, InterfaceAppState> {
  constructor(p: any) {
    super(p);
    this.state = {showRecommendation: true, showProfile: false, showAll: false }
  }

    /*public onToggle = () => {
      this.setState({showRecommendation: !this.state.showRecommendation});
    }*/

    public onAll = () => {
        this.setState({showRecommendation: false, showProfile: false, showAll: true});
    }

    public onRecommended = () => {
      this.setState({showRecommendation: true, showProfile: false, showAll: false})
    }

    public onProfile = () => {
      this.setState({showRecommendation: false, showProfile: true, showAll: false});
    }


  public render() {

    return (
      <div className="App">
        <div>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-primary" onClick={this.onAll}>
              <span>All Events</span>
              <span className="fas fa-home"/></label>
              <label className="btn btn-primary" onClick={this.onRecommended}>
            <span>Recommended</span>
            <span className="fas fa-list-ol"/>
            </label>
            <label className="btn btn-primary" onClick={this.onProfile}>
            <span>Profile</span>
            <span className="fas fa-user"/>
            </label>
          </div>

          {this.state.showAll? <Recommended/> : (this.state.showRecommendation? <Recommended/>: <Profile/>)}
      </div>
    </div>
    );
  }
}

export default App;






      {/*}<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>*/}
      {// </div>}
    }
      {/*<div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className ="btn btn-primary" id="option1">
          <span>All Events </span>
          <span className ="fas fa-home"/></label>
          <label className="btn btn-primary active" id="option2">
        <span>Recommended </span>
        <span className="fas fa-list-ol"/>
        </label>
        <label className="btn btn-primary" id="option3">
        <span>Profile </span>
        <span className="fas fa-user"/>
        </label>
      </div>
    </div>
    );
  }
}

export default App;*/}
