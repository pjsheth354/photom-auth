var databaseRef;

let dataRetrive = (path) => {
    if (databaseRef) {
        databaseRef.off();
    }

    var ref = (firebase.database().ref("/Plant/Dholera/" + path));
    ref.on('value', (snapshot) => {
        robot = snapshot.val();
        document.getElementById("BatteryVoltage").innerHTML = robot.BatteryVoltage + " V";
        document.getElementById("Current1").innerHTML = robot.Current1 + " A";
        document.getElementById("Current2").innerHTML = robot.Current2 + " A";
        document.getElementById("Current3").innerHTML = robot.Current3 + " A";
        document.getElementById("EncoderCount").innerHTML = robot.EncoderCount + " Sec";
        document.getElementById("OnOffTime").innerHTML = robot.OnOffTime + " Sec";
        document.getElementById("RobotName").innerHTML = robot.RobotName;
    });

    databaseRef = ref;
}