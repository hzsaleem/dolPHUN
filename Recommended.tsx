import * as React from 'react';
// import ReactHtmlParser from 'react-html-parser';
import './App.css';


interface RecData{
  event: string;
  date: string;
  time: string;
  info: string;
  interest: string;
}

interface RecProps{
  list: Array<RecData>;
}


  class Recommended extends React.Component <RecProps>{
    constructor(props: RecProps) {
      super(props)
    };

    /*TableRow = (row: RecData) => (
      <tr>
        <td key={row.event}>{row.event}</td>
        <td key={row.date}>{row.date}</td>
        <td key={row.time}>{row.time}</td>
        <td key={row.info}>{ReactHtmlParser(row.info)}</td>
        <td><button type="button" className="btn">RSVP</button></td>
      </tr>
  )*/

    public render() {
      // var data = this.props.list;
      return (
        <div className="container t2">
          {/*}<table className="table table-hover table-center">

              <thead>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>More Info</th>
                <th/>
              </thead>
              {data.map(row =>
                this.TableRow(row)
              )}
            </table>*/}





          <div className="table-responsive">
            <table className="table table-hover table-center table-outline">
              <thead>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>More Info</th>
                <th />
              </thead>
              <tr>
                <td>
                  <span className="fas fa-music" />
                  <span> REO Speedwagon Concert</span>
                </td>
                <td>July 31st</td>
                <td>7:00 pm</td>
                <td>
                  <a href="#" data-featherlight="#mylightbox1"><button type="button" className="btn btn-default">More Info</button></a>
                  <div id="mylightbox1" className="hide-div">


                    <h3>REO Speedwagon Concert</h3>
                    <button type="button" className="btn btn-primary" >RSVP</button>

                    <br/>
                    <p><b>Date:</b> July 31st</p>
                    <p><b>Time:</b> 7:00 pm</p>
                    <p><b>Location:</b> House of Blues - Dallas, TX</p>
                    <p><b>More Info:</b> If you also love cheesy 80s music, meet us at the
                  House of Blues for the REO speedwagon concert. Tickets are $35 per person. We
                are planning on meeting for dinner/drinks beforehand. Contact for details.</p>
                    <p><b>Interest:</b> Music</p>

                    <p><b>Contact:</b> 555-555-5555 or johnathan.snow@parivedasolutions.com</p>


                  </div>

                </td>
                <td>
                  <button type="button" className="btn btn-default">RSVP</button>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="fas fa-suitcase" />
                  <span> Tulip Festival</span>
                </td>
                <td>Aug 1st</td>
                <td>6:00 pm</td>
                <td>
                  <a href="#" data-featherlight="#mylightbox2"><button type="button" className="btn btn-default">More Info</button></a>
                  <div id="mylightbox2" className="hide-div">


                    <h3>Tulip Festival</h3>
                    <button type="button" className="btn btn-primary">RSVP</button>

                    <br />
                    <p><b>Date:</b> Aug 1st</p>
                    <p><b>Time:</b> 6:00 pm</p>
                    <p><b>Location:</b> Carrolton, TX</p>
                    <p><b>More Info:</b> A group will be attending the yearly tulip festival in Carrolton.
                    Entrance fee is $15 dollars. There will be beautiful flower displays and plenty of drinks
                    and food trucks.</p>
                    <p><b>Interest:</b> Travel</p>
                    <p><b>Contact:</b> 555-555-5555 or kvothe.red@parivedasolutions.com</p>


                  </div>


                </td>
                <td>
                  <button type="button" className="btn btn-default">RSVP</button>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="fas fa-book-open" />
                  <span> Monthly Book Club</span>
                </td>
                <td>Aug 2nd</td>
                <td>8:00 pm</td>
                <td>
                  <a href="#" data-featherlight="#mylightbox3"><button type="button" className="btn btn-default">More Info</button></a>
                  <div id="mylightbox3" className="hide-div">


                    <h3>Monthly Book Club</h3>
                    <button type="button" className="btn btn-primary">RSVP</button>

                    <br />
                    <p><b>Date:</b> Aug 2nd</p>
                    <p><b>Time:</b> 8:00 pm</p>
                    <p><b>Location:</b> Amelia Pane's Apartment</p>
                    <p><b>More Info:</b> This month we will be meeting at Amelia's apartment to discuss
                    'Jane Eyre'. Please feel free to bring snacks/drinks. Anyone is welcome, even
                      if you have not read the book. We look forward to seeing you.</p>
                    <p><b>Interest:</b> Books</p>
                    <p><b>Contact:</b> 555-555-5555 or amelia.pane@parivedasolutions.com</p>

                  </div>

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
