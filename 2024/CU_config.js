var config_data = `
{
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023mrcmp",  
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Auto Amp Scored",
      "code": "auto_amp_score",
      "type": "counter"
    },
    { "name": "Auto Amp Missed",
      "code": "auto_amp_miss",
      "type": "counter"
    },
    {
      "type": "break"
    },
    { "name": "Auto Speaker Scored",
      "code": "auto_spk_score",
      "type": "counter"
    },
    { "name": "Auto Speaker Missed",
      "code": "auto_spk_miss",
      "type": "counter"
    },
    {
      "type": "break"
    },
    { "name": "Missed NOTES Pickup",
      "code": "auto_notes_miss",
      "type": "counter"
    },
    { "name": "NOTES Picked Up",
      "code": "auto_notes_path",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "toggleClick": "true",
      "showFlip": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Did they leave the STARTING ZONE?",
      "code": "auto_move",
      "type": "bool"
    },
    { "name": "Did they cross into opponents WING?",
      "code": "auto_opponent_wing",
      "type": "bool"
    },
    { "name": "Did they recieve a foul in Auto",
      "code": "auto_foul",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Speaker Scored",
      "code": "t_skr_score",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Speaker Missed",
      "code": "t_skr_miss",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Speaker Shooting Location",
      "code": "tSkrLocation",
      "type":"radio",
      "choices": {
        "p": "Touching Subwolfer<br>",
        "o": "One Spot<br>",
        "m": "Many Spots<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    {
      "type": "break"
    },
    { "name": "Amp Scored",
      "code": "t_amp_score",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Amp Missed",
      "code": "t_amp_miss",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Amp Shooting Location",
      "code": "tAmpLocation",
      "type":"radio",
      "choices": {
        "f": "Right in Front<br>",
        "d": "Distanced<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    {
      "type": "break"
    },
    { "name": "Trap Score",
      "code": "t_trap",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Trap Miss",
      "code": "t_trap_miss",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Climb Timer",
      "code": "t_climb_time",
      "type": "cycle"
    },
    { "name": "Climb Final State",
      "code": "climb",
      "type":"radio",
      "choices": {
        "p": "Successful Climb with Others<br>",
        "1": "Climbed Alone<br>",
        "f": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Fouls",
      "code": "foul",
      "type": "counter"
    },
    { "name": "Tech Fouls",
      "code": "tech_foul",
      "type": "counter"
    },
    { "name": "Yellow Cards",
      "code": "yc",
      "type": "counter"
    },    
    { "name": "No Show?",
      "code": "ns",
      "type": "bool"
    },
    { "name": "Broken?",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tipped?",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
