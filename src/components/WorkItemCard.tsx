import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { WorkItemCardI } from "../types/types";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const WorkItemCard = ({
  title,
  description,
  meeting,
  department,
  time,
}: WorkItemCardI) => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Typography variant="body2">{meeting}</Typography>
        <Typography variant="body2">{department}</Typography>
      </Box>
      <CardContent>
        <Typography variant="h5" align="left" style={{ lineHeight: '1.2' }}>
          Test example here
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" style={{ lineHeight: '1.2', marginLeft: '4px'  }}>
        Test example subtitle here
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Typography variant="body2">{time}</Typography>
      </Box>
    </Card>
  );
};

export default WorkItemCard;
