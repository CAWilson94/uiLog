import { useQuery } from "@apollo/client";
import { getWorkItemsById } from "../queries/workLogItems.queries";
import { workLogItemI } from "../types/types";
import WorkItemCard from "./WorkItemCard";

export const WorkLogItem = () => {
  // Fetch data using the useQuery hook
  const { loading, error, data } = useQuery(getWorkItemsById, {
    variables: {
      id: "01", // Replace "01" with the actual ID value
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const workItem: workLogItemI = {
    id: data?.WorkItemLogById?.id,
    date: data?.WorkItemLogById?.date,
    estimatedLengthOfTime: data?.WorkItemLogById?.estimatedLengthOfTime,
    workType: data?.WorkItemLogById?.workType,
    department: data?.WorkItemLogById?.department,
    author: data?.WorkItemLogById?.author,
  };

  return (
    <div key={workItem.id}>
      <WorkItemCard
        title={workItem.workType}
        description={workItem.department}
        meeting={workItem.workType}
        department={workItem.department}
        time={"30 mins"}
      />
    </div>
  );
};
