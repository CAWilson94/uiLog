// bad juju find a way to change
export const QueryResultWrapper = ({ loading, error, data }: any) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>Nothing to show...</p>;

  if(data){ 
    const nestedData: any  = data.WorkItemLogById;
    if(nestedData){ 
      return nestedData;
    }
  };
};
