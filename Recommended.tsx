import * as React from 'react';
import './App.css';

class Recommended extends React.Component {
  public render() {
    return (
<div className ="container t2">
<div className="table-responsive">
<table className="table table-hover table-outline">
  <thead>
    <th>Event Name</th>
    <th>Date</th>
    <th>Time</th>
    <th>More Info</th>
    <th/>
  </thead>
  <tr>
    <td>
      <span className="fas fa-music"/>
    <span> REO Speedwagon Concert</span>
    </td>
    <td>July 31st</td>
    <td>7:00 pm</td>
    <td>
      <button type="button" className="btn btn-default">More Info</button>
    </td>
    <td>
      <button type="button" className="btn btn-default">RSVP</button>
    </td>
  </tr>
  <tr>
    <td>
      <span className="fas fa-suitcase"/>
      <span> Tulip Festival</span>
    </td>
    <td>Aug 1st</td>
    <td>6:00 pm</td>
    <td>
      <button type="button" className="btn btn-default">More Info</button>
    </td>
    <td>
      <button type="button" className="btn btn-default">RSVP</button>
    </td>
  </tr>
  <tr>
    <td>
      <span className="fas fa-book-open"/>
      <span> Monthly Book Club</span>
    </td>
    <td>Aug 2nd</td>
    <td>8:00 pm</td>
    <td>
      <button type="button" className="btn btn-default">More Info</button>
    </td>
    <td>
      <button type="button" className="btn btn-default">RSVP</button>
    </td>
  </tr>
</table>
</div>

</div>

);
}
}
export default Recommended;
