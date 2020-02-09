function proofOfSkill() {
    console.log("proofOfSkill()");


    var proofOfSkill = document.getElementById("proofOfSkill");
    var skillsInspection = document.getElementById("skillsInspection");

    var proofOfSkillBtn = document.getElementById("proofSkill-left-btn");
    var skillsInspectionBtn = document.getElementById("skillInspection-right-btn");

    if (skillsInspection.style.display === "block") {
        skillsInspection.style.display = "none";
        skillsInspectionBtn.style.setProperty("background-color", "white", "important");
        skillsInspectionBtn.style.setProperty("color", "black", "important");

        proofOfSkill.style.display = "block";
        proofOfSkillBtn.style.setProperty("background-color", "#afa939", "important");
        proofOfSkillBtn.style.setProperty("color", "white", "important");

    } else {
        
    }

}

function skillsInspection() {
    console.log("skillsInspection()");


    var proofOfSkill = document.getElementById("proofOfSkill");
    var skillsInspection = document.getElementById("skillsInspection");

    var proofOfSkillBtn = document.getElementById("proofSkill-left-btn");
    var skillsInspectionBtn = document.getElementById("skillInspection-right-btn");

    if (proofOfSkill.style.display === "block") {
        proofOfSkill.style.display = "none";
        proofOfSkillBtn.style.setProperty("background-color", "white", "important");
        proofOfSkillBtn.style.setProperty("color", "black", "important");

        skillsInspection.style.display = "block";
        skillsInspectionBtn.style.setProperty("background-color", "#afa939", "important");
        skillsInspectionBtn.style.setProperty("color", "white", "important");

    } else {

    }
}