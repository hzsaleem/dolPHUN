import * as React from 'react';
import './App.css';

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



class Profile extends React.Component {
  public render() {
    return (
      <div>
      <div>
      <image className="img-rounded float-left"/>
      <span> <h3>Ada Blossom</h3></span>
      <span><button type="button" className="btn btn-primary">Edit</button></span>
      <p>ada.blossom@parivedasolutions.com</p>
      <p>555-555-5555</p>
      <p>Mentor: John Doe</p>
      <p>Mentee: Sarah Seaweed</p>
      <p>Los Angeles</p>
      <p>Interests: Music, Books, Travel </p>

    </div>
    <div className="personal-calendar">
      <h3>Attending</h3>
      <table className="table table-responsive">
        <thead>
          <th>Event Name</th>
          <th>Date</th>
          <th>Time</th>
        </thead>
        <tr>
          <td>REO Speedwagon Concert</td>
          <td>July 31st</td>
          <td>7:00 pm</td>
        </tr>
        <tr>
          <td>REO Speedwagon Concert</td>
          <td>July 31st</td>
          <td>7:00 pm</td>
        </tr>
        <tr>
          <td>REO Speedwagon Concert</td>
          <td>July 31st</td>
          <td>7:00 pm</td>
        </tr>


      </table>
    </div>



    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-primary">

        <span>All Events</span>
        <span className="fas fa-home"/></label>
        <label className="btn btn-primary">

      <span>Recommended</span>
      <span className="fas fa-list-ol"/>
      </label>
      <label className="btn btn-primary active">
      <span>Profile</span>
      <span className="fas fa-user"/>
      </label>
    </div>
  </div>
    );
  }
}

export default Profile;
