import * as React from 'react';
import './App.css';

// import logo from './logo.svg';

/*interface EventItemData{
  event: string;
  date: string;
  time: string;
}
*/
interface ProfileData{
  event: string;
  date: string;
  time: string;
}

interface ProfileProps{
  list: Array<ProfileData>;

}


class Profile extends React.Component<ProfileProps> {
  constructor(props: ProfileProps){
    super(props);
  }

  TableRow = (row: ProfileData) => (
    <tr>
      <td key={row.event}>{row.event}</td>
      <td key={row.date}>{row.date}</td>
      <td key={row.time}>{row.time}</td>
    </tr>
)

  public render() {
    var data = this.props.list;
    return (
      <div className="container">
        <div>
          <image className="img-rounded float-left" />
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
          <table className="table table-hover table-center">

              <thead>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
              </thead>
              {data.map(row =>
                this.TableRow(row)
              )}
            </table>


        </div>
      </div>
    );
  }
}

export default Profile;
