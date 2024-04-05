import { useQuery } from "@apollo/client";
import { getAllWorkItems } from "../queries/workLogItems.queries";
import { WorkLogItemList } from "./WorkLogItemList";

export const AllWorkItemLogs = () => {
  const { loading, error, data } = useQuery(getAllWorkItems);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <WorkLogItemList workItemList={data.AllWorkItemLogs} />
    </>
  );
};
