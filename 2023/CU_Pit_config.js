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
    { "name": "Type of Wire Connectors",
      "code": "electricalConn",
      "type": "radio",
      "choices": {
        "e": "Electrical Tape",
        "s": "Solder & Heat Shrink",
        "p": "Pinch Connectors (ie Anderson)"
      },
      "defaultValue": "x"
    },
    { "name": "Bumpers",
      "code": "bumpers",
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
    { "name": "Reversible Bumpers",
      "code": "bumpRev",
      "type": "bool"
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
