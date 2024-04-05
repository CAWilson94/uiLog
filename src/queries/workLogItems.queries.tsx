import { gql } from "@apollo/client";


export const getWorkItemsById = gql`
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


export const getAllWorkItems = gql`
  query MyQuery {
    AllWorkItemLogs {
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