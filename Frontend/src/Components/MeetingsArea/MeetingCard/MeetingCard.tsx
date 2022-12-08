import MeetingModel from "../../../Models/MeetingModel";
import "./MeetingCard.css";

interface MeetingCardProps {
    meeting: MeetingModel;
}

function MeetingCard(props: MeetingCardProps): JSX.Element {
    return (
        <div className="MeetingCard">
            <div className="Container">
                <h2>{props.meeting.teamName}</h2>
                <br />
                <div className="DetailsCard">
                    <span>{props.meeting.description}</span>
                    <br /> <br />
                    <span>Room: {props.meeting.room}</span>
                </div>
                <div className="TimeCard">
                    <span>Start: {props.meeting.startDateTime}</span>
                    <br/>
                    <span>End: {props.meeting.endDateTime}</span>
                </div>
            </div>
        </div>
    );
}

export default MeetingCard;
