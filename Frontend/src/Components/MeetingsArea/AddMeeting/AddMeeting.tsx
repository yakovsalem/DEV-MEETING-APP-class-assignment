import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MeetingModel from "../../../Models/MeetingModel";
import TeamModel from "../../../Models/TeamModel";
import meetingsService from "../../../Services/MeetingsService";
import "./AddMeeting.css";

function AddMeeting(): JSX.Element {

    const navigate = useNavigate();

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const { register, handleSubmit } = useForm<MeetingModel>();

    useEffect(() => {
        meetingsService.getAllTeams()
            .then(teams => setTeams(teams))
            .catch(err => alert(err.message));
    }, []);

    async function send(meeting: MeetingModel) {
        try {
            await meetingsService.addMeeting(meeting);
            alert("Meeting successfully added");
            navigate("/meetings");
        } catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddMeeting">

            <form onSubmit={handleSubmit(send)}>
                <h3>Add new Meeting:</h3>

                <select defaultValue="" {...register("teamId")} required autoFocus>
                    <option disabled value="">Select Team</option>
                    {teams.map(t =>
                        <option key={t.teamId} value={t.teamId}>
                            {t.teamName}
                        </option>
                    )}
                </select>

                <input type="text" placeholder="Meeting Description:"
                {...register("description")} required minLength={3} maxLength={50} />

                <label>Select Start time:</label>
                <input type="datetime-local" placeholder="Start time:" 
                {...register("startDateTime")} required />

                <label>Select End time:</label>
                <input type="datetime-local" placeholder="End time:"
                {...register("endDateTime")} required />

                <input type="text" placeholder="Insert Meeting Room:"
                {...register("room")} required minLength={3} maxLength={50}/>

                <button>Add</button>

            </form>
        </div>
    );
}

export default AddMeeting;
