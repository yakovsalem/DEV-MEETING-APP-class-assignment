import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { ResourceNotFoundErrorModel } from "../4-models/error-models";
import MeetingModel from "../4-models/meeting-model";
import TeamModel from "../4-models/team-model";

async function getAllTeams(): Promise<TeamModel[]> {
    const sql = `SELECT * FROM teams;`;
    const teams = await dal.execute(sql);
    return teams;
}

async function getAllMeetingsByTeam(teamId: number): Promise<MeetingModel[]> {
    const sql = `
        SELECT 
            M.id,
            M.teamId,
            DATE_FORMAT(M.startDateTime, '%d/%m/%Y %h:%i') AS startDateTime,
            DATE_FORMAT(M.endDateTime, '%d/%m/%Y %h:%i') AS endDateTime,
            M.description,
            M.room,
            T.teamName
        FROM meetings AS M JOIN teams AS T
        ON M.teamId = T.teamId
        WHERE M.teamId = ?;`;

    const meetings = await dal.execute(sql, [teamId]);

    if(!meetings[0]) throw new ResourceNotFoundErrorModel(teamId);

    return meetings;
}

async function addMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    const sql = `
        INSERT INTO meetings VALUES(
            DEFAULT, ?, ?, ?, ?, ?)`;

    const info: OkPacket = await dal.execute(sql, [meeting.teamId, meeting.startDateTime, meeting.endDateTime, meeting.description, meeting.room]);

    meeting.id = info.insertId;

    return meeting;
}


export default {
    getAllTeams,
    getAllMeetingsByTeam,
    addMeeting
};
