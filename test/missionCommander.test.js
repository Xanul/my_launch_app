const MissionCommander = require("../app/missionCommander");

describe("Unit Tests for Mission Commander Class", () => {
  test("1. Create a Mission Commander Object", () => {
    const myMissionCommander = new MissionCommander("Woopa", 33, "Backend");
    expect(myMissionCommander.name).toBe("Woopa");
    expect(myMissionCommander.age).toBe(33)
    expect(myMissionCommander.mission).toBe("Backend")
  });
});


