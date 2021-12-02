def goLeft2():
    for index in range(8):
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 150)
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 150)
    DFRobotMaqueenPlus.motot_stop(Motors.ALL)
def Targeted():
    if x > 157 and x < 163:
        if w > 100:
            DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.RED)
    else:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
def goRight():
    for index2 in range(1):
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 150)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 0)
    DFRobotMaqueenPlus.motot_stop(Motors.ALL)
def goLeft():
    for index3 in range(1):
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 150)
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 0)
    DFRobotMaqueenPlus.motot_stop(Motors.ALL)
def goRight2():
    for index4 in range(8):
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 150)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 150)
    DFRobotMaqueenPlus.motot_stop(Motors.ALL)
x = 0
w = 0
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
w = 0
x = 0

def on_forever():
    global x, w
    huskylens.request()
    if huskylens.is_learned(1):
        if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
            x = huskylens.reade_box(1, Content1.X_CENTER)
            w = huskylens.reade_box(1, Content1.WIDTH)
            Targeted()
            if x < 155 and x > 120:
                goLeft()
            if x <= 120:
                goLeft2()
            if x > 165 and x < 200:
                goRight()
            if x >= 200:
                goRight2()
            if x > 154 and x < 166:
                if w < 200:
                    DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 50)
        else:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 30)
basic.forever(on_forever)
