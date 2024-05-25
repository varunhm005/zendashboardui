import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchData } from '../../api/api'
import withAuthCheck from '../Auth/withAuthCheck';



function DataTable() {

  const columns = [
    { field: 'round', headerName: 'Mock Interview Round', width: 150 },
    { field: 'interviewDate', headerName: 'Interview Date', width: 130 },
    { field: 'overallScore', headerName: 'Overall Score', width: 130 },
    { field: 'recordingUrl', headerName: 'Recording URL', width: 200 },
    { field: 'comments', headerName: 'Comments', width: 130 },
    { field: 'Action', headerName: 'Action', width: 130 },
  
  ];
  
  const [data, setData] = useState([]);

  useEffect(() => {
      // Function to fetch data from the API
      const getQuery = async () => {
        try {
          const result = await fetchData('/interview');
          if(result.code === 200){
              setData(result.data);
            }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  
      // Call the fetch data function when the component mounts
      getQuery();

  
      // Clean-up function (optional)
      return () => {
        // You can do any clean-up here if necessary
      };
    }, []); 


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

export default withAuthCheck(DataTable);
