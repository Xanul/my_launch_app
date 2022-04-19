const MissionCommander = require("../app/missionCommander");

MissionCommander

describe("Unit Tests for Mission Commander Class", () => {
    test('1. Create a Mission Commander Object', () => {
      const myMissionCommander = new MissionCommander("Woopa")
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  