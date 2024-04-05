export interface workLogItemI {
    id: string;
    date: string;
    department: string;
    estimatedLengthOfTime: string;
    author: string;
    workType: string;
  }
  
  export interface WorkItemCardI { 
    title: string;
    description: string;
    meeting: string; // TODO: we change to type later
    department: string; 
    time: string;
  }