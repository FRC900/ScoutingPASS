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
      "defaultValue": "2024isde1",  
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
    { "name": "Auto Speaker Scored",
      "code": "auto_spk_score",
      "type": "counter"
    },
    { "name": "Auto Speaker Missed",
      "code": "auto_spk_miss",
      "type": "counter"
    },
    { "name": "Did they leave the STARTING ZONE?",
      "code": "auto_move",
      "type": "bool"
    },
    { "name": "NOTES Picked Up",
      "code": "auto_notes",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "shape": "circle 12 black red true",
    },
    { "name": "Did they cross  ZONE?",
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
    { "name": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Missed Pieces",
      "code": "tmg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "toggleClick": "false",
      "showFlip": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Links Scored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Hindrance",
      "code": "hind",
      "type": "bool"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "lnk",
      "type": "bool",
      "defaultValue":"1"
    },
    { "name": "Floor Pickup",
      "code": "tfpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Single Substation Pickup",
      "code": "ssp",
      "type": "bool"
    },
    { "name": "Double Substation Pickup",
      "code": "dsp",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Docking Order",
      "code": "fo",
      "type":"radio",
      "choices": {
        "f": "First",
        "s": "Seconds",
        "t": "Third",
        "x": "Did not dock"
      },
      "defaultValue": "x"
    },
    { "name": "Detrimental Dock",
      "code": "dd",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Fouls",
      "code": "foul",
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
