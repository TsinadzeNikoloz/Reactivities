import { useEffect, useState } from "react";
import type { Activity } from "./lib/types/index.d";
import { List, ListItemText, Typography } from "@mui/material";
import axios from "axios";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios
            .get<Activity[]>("https://localhost:6001/api/activities")
            .then((response) => setActivities(response.data));
    }, []);

    return (
        <>
            <Typography>Reactivities</Typography>
            <List>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <ListItemText>{activity.title}</ListItemText>
                    </li>
                ))}
            </List>
        </>
    );
}

export default App;
