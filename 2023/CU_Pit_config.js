var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Electrical Protection",
      "code": "electricalProt",
      "type": "radio",
      "choices": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "0",
      "tooltip": "how shielded are components and wires; are wires likely to get pulled"
    },
    { "name": "Electrical Organization",
      "code": "electricalOrg",
      "type": "radio",
      "choices": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "0"
    },
    { "name": "Electrical Tape?",
      "code": "elecTape",
      "type": "bool"
    },
    { "name": "Solder + Heat Shrink?",
      "code": "solder",
      "type": "bool"
    },
    { "name": "Pinch Connectors? (ie Anderson)",
      "code": "pinchConn",
      "type": "bool"
    },
    { "name": "Reversible Bumpers",
      "code": "bumpRev",
      "type": "bool"
    },
    { "name": "Bumper Attachment",
      "code": "bumper_attach",
      "type": "radio",
      "choices": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "0"
    },
    { "name": "Bumper Coverage",
      "code": "bumper_coverage",
      "type": "radio",
      "choices": {
        "1": "1 - Corners Only <br />",
        "2": "2 - Corners + U combo<br />",
        "3": "3<br />",
        "4": "4 - Full Coverage minus intake cutout<br />",
        "5": "5 - Full Coverage<br />"
      },
      "defaultValue": "0"
    },
    { "name": "Bumper Comments",
      "code": "bumper_comment",
      "type": "text"
    },
    { "name": "Comments",
      "code": "pitCom",
      "type": "text",
      "size": 30
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
