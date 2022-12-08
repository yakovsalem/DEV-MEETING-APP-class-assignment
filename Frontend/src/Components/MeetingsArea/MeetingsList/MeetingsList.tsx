import { ChangeEvent, useEffect, useState } from "react";
import MeetingModel from "../../../Models/MeetingModel";
import TeamModel from "../../../Models/TeamModel";
import meetingsService from "../../../Services/MeetingsService";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./MeetingsList.css";

function MeetingsList(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        meetingsService.getAllTeams()
            .then(teams => setTeams(teams))
            .catch(err => alert(err.message));
    }, []);

    async function showMeetings(args: ChangeEvent<HTMLSelectElement>) {
        const value = +args.target.value;
        meetingsService.getAllMeetingsByTeam(value)
            .then(meetings => setMeetings(meetings))
            .catch(err => alert(err.message));
    }

    return (
        <div className="MeetingsList">
            <div className="TeamsSelect">
                {/* <label>Select Team: </label> */}
                <select defaultValue="" onChange={showMeetings}>
                    <option disabled value="">Select a Team...</option>
                    {teams.map(t =>
                        <option key={t.teamId} value={t.teamId}>
                            {t.teamName}
                        </option>
                    )}
                </select>
            </div>

            <div className="MeetingsArea">
                {meetings.map(m => <MeetingCard key={m.id} meeting={m}/>)}
            </div>

        </div>
    );
}

export default MeetingsList;
