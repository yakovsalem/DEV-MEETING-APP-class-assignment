import express, { Request, Response, NextFunction } from "express";
import MeetingModel from "../4-models/meeting-model";
import teamsLogic from "../5-logic/teams-logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/teams
router.get("/teams", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teams = await teamsLogic.getAllTeams();
        response.json(teams);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/meetings/:teamId
router.get("/meetings/:teamId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teamId = +request.params.teamId;
        const meetings = await teamsLogic.getAllMeetingsByTeam(teamId);
        response.json(meetings);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/meetings
router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body);
        const addedMeeting = await teamsLogic.addMeeting(meeting);
        response.status(201).json(addedMeeting);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;