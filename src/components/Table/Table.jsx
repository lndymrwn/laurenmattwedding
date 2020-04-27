import React from "react";
import ReactTable from "react-table";
import axios from 'axios';
import 'react-table/react-table.css';


class Table extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      guestList: [],
    }
  }

  componentDidMount(){
    axios.get(`https://us-central1-laurenmattwedding-c519f.cloudfunctions.net/api/guestList`)
      .then(res => {
        this.setState({ guestList: res.data });
      })
  }

  refreshData = () => {
    axios.get(`https://us-central1-laurenmattwedding-c519f.cloudfunctions.net/api/guestList`)
      .then(res => {
        this.setState({ guestList: res.data });
      })
  }



  render() {
    const {
      guestList,
    } = this.state;

    const columns = [
      {
          Header: () => (
            <span className="text-center headerStyle">
                  Name
            </span>
          ),
          accessor: 'name',
          style: { 'whiteSpace': 'unset' }
      },
      {
        Header: () => (
          <span className="text-center headerStyle">
                Email
          </span>
        ),
        accessor: 'email',
        style: { 'whiteSpace': 'unset' }
      },
      {
        Header: () => (
          <span className="text-center headerStyle">
                RSVP Wedding
          </span>
        ),
        accessor: 'rsvpWedding',
        style: { 'whiteSpace': 'unset' }
      },
      {
        Header: () => (
          <span className="text-center headerStyle">
                RSVP Welcome Party
          </span>
        ),
        accessor: 'rsvpWelcomeParty',
        style: { 'whiteSpace': 'unset' }
    },
    {
      Header: () => (
        <span className="text-center headerStyle">
              Food Restriction
        </span>
      ),
      accessor: 'foodRestriction',
      style: { 'whiteSpace': 'unset' }
  },
  {
    Header: () => (
      <span className="text-center headerStyle">
            Song Request
      </span>
    ),
    accessor: 'songRequest',
    style: { 'whiteSpace': 'unset' }
},
{
  Header: () => (
    <span className="text-center headerStyle">
          Family Id
    </span>
  ),
  accessor: 'familyId',
  style: { 'whiteSpace': 'unset' }
},
  ]


  if(!guestList.length) {
    return <div>Loading...</div>
  }

  const formattedGuestList = guestList.map((element) => {
    return (
      {
        email: element.email === "null" ? '' : element.email,
        foodRestriction: element.foodRestriction === "null" ? '' : element.foodRestriction,
        name: element.name,
        rsvpWedding: element.rsvpWedding === "F" ? 'NO' : 'YES',
        rsvpWelcomeParty: element.rsvpWelcomeParty === "F" ? 'NO' : 'YES',
        songRequest: element.songRequest === "null" ? '' : element.songRequest,
        familyId: element.familyId,
      }
    )
  });

    return (
      <ReactTable
                className="-striped -highlight text-center rowStyle"
                data={formattedGuestList}
                columns={columns}
                defaultPageSize={20}
                previousText='Back'
                nextText='Next'
                loadingText='Loading...'
                noDataText='No data'
                pageText='Page'
                ofText='of'
                rowsText='rows'
                sortable={true}
                resizable={true}
                showPagination={true}
                filterable
            />
    );
  }
}

export default Table;
