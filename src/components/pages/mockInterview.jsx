import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchData } from '../../api/api'



export default function DataTable() {

  const columns = [
    { field: 'round', headerName: 'Mock Interview Round', width: 150 },
    { field: 'interviewDate', headerName: 'Interview Date', width: 130 },
    { field: 'overallScore', headerName: 'Overall Score', width: 130 },
    { field: 'recordingUrl', headerName: 'Recording URL', width: 200 },
    { field: 'comments', headerName: 'Comments', width: 130 },
    { field: 'Action', headerName: 'Action', width: 130 },
  
  ];
  
  const rows = [
    { id: 1, MockInterviewRound: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
      // Function to fetch data from the API
      const getQuery = async () => {
        try {
          const result = await fetchData('/interview');
          console.log("result",result.data)
          if(result.code === 200){
              setData(result.data);
            }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      console.log("data",data)
  
      // Call the fetch data function when the component mounts
      getQuery();

  
      // Clean-up function (optional)
      return () => {
        // You can do any clean-up here if necessary
      };
    }, []); 

    // console.log("rows",rows)


  return (
    <div style={{ height: 400, width: '100%', margin: '120px 0px 10px 0px', }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}