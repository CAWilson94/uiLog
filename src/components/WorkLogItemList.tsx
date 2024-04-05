/**
 * For a list of items pass in data here and show a card
 */

import { workLogItemI } from "../types/types";
import WorkItemCard from "./WorkItemCard";
import './App.css';

export const WorkLogItemList = ({
  workItemList,
}: {
  workItemList: workLogItemI[];
}) => {
  const workItemCards = workItemList.map((workItem) => (
    <WorkItemCard
      title={workItem.workType}
      description={workItem.department}
      meeting={workItem.workType}
      department={workItem.department}
      time={workItem.estimatedLengthOfTime}
    ></WorkItemCard>
  ));
  return <ul className="work-item-list">
    {workItemCards}
  </ul>
};
