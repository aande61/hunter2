function goLeft2 () {
    for (let index = 0; index < 8; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 150)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 150)
    }
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
}
function Targeted () {
    if (x > 157 && x < 163) {
        if (w > 100) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        }
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
}
function goRight () {
    for (let index = 0; index < 1; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 150)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 0)
    }
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
}
function goLeft () {
    for (let index = 0; index < 1; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 150)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 0)
    }
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
}
function goRight2 () {
    for (let index = 0; index < 8; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 150)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 150)
    }
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
}
let x = 0
let w = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
w = 0
x = 0
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            x = huskylens.readeBox(1, Content1.xCenter)
            w = huskylens.readeBox(1, Content1.width)
            Targeted()
            if (x < 155 && x > 120) {
                goLeft()
            }
            if (x <= 120) {
                goLeft2()
            }
            if (x > 165 && x < 200) {
                goRight()
            }
            if (x >= 200) {
                goRight2()
            }
            if (x > 154 && x < 166) {
                if (w < 200) {
                    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
                }
            }
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        }
    }
})
