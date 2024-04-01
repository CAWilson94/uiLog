import { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

interface workLogItem {
  id: string;
  date: string;
  department: string;
  estimatedLengthOfTime: string;
  author: string;
  workType: string;
}

const GET_WORK_LOG_ITEM_BY_ID = gql`
  query MyQuery($id: ID!) {
    WorkItemLogById(id: $id) {
      id
      date
      department
      actualLengthOfTime
      author
      estimatedLengthOfTime
      workType
    }
  }
`;


  
  const WorkLogItem = () => {
    // Fetch data using the useQuery hook
    const { loading, error, data } = useQuery(GET_WORK_LOG_ITEM_BY_ID, {
      variables: {
        id: "01" // Replace "01" with the actual ID value
      }
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    if (data && data.WorkItemLogById) {
      const { id, date, department, estimatedLengthOfTime, workType } = data.WorkItemLogById;
      return (
        <div key={id}>
          <p> date: {date} time: {estimatedLengthOfTime} workType: {workType} department: {department} </p>
        </div>
      );
    } else {
      return <p>No data available</p>;
    }
  };
  

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <WorkLogItem />
    </div>
  );
}

export default App;
