class MeetingModel {

    public id: number;
    public teamId: number;
    public startDateTime: string;
    public endDateTime: string;
    public description: string;
    public room: string;

    public constructor(meeting: MeetingModel) {
        this.id = meeting.id,
        this.teamId = meeting.teamId,
        this.startDateTime = meeting.startDateTime,
        this.endDateTime = meeting.endDateTime,
        this.description = meeting.description,
        this.room = meeting.room
    }

}

export default MeetingModel;