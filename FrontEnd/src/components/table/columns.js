
import { Button } from 'bootstrap'

import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ColumnFilter } from './ColumnFilter';


export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },

  {


    Header: 'ownername',
    Footer: 'ownername',
    disableFilters: true,

  },
  {
    Header: 'cost',
    Footer: 'cost',
    // filter:"includes",
    Filter: ColumnFilter,
  },
  {
    Header: 'type',
    accessor:'show.type',
    Footer: 'type',


  },
  {
    Header:'furnishtype',
    Footer:'furnishtype',
  },
  {
    Header:'ptype',
    Footer:'ptype',
      },

  
 
  {
    Header: 'Area_code',
    Footer: 'Area_code',
    accessor: 'area_code'

  },
  {
    Header: 'City',
    Footer: 'City',
    accessor: 'city',
  },
  {
    Header: 'contact',
    Footer: 'contact',
  },
  
  //view button 
  // {
  //   Header: 'View Details',
  //   Footer: 'View Details',
  //   accessor: 'view_details',
  //  // disableFilters: true,
  //   Cell: ({ row }) => (
  //     <Button onClick={() => alert("Editing: " + row.values.price)}>
  //     Edit
  //   </Button>
  // ),
  {
    Header:'Property Details',
    Footer:'Property Details',

    //for view details
    // Cell: ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>View Details</button>)
   // Cell: ({ row }) => (<Link to="/Show_Properties" id="1"className="btn btn-primary">View Details</Link>
    //)

  }

  
]






//grouped columns
// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       // {
//       //   Header: 'Date of Birth',
//       //   Footer: 'Date of Birth',
//       //   accessor: 'date_of_birth'
//       // },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
// ]







