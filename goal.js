function manchesterGoal() {
    var incrementgoal = document.getElementById('goal1');
    var value = incrementgoal.innerHTML;
    value++;
    document.getElementById('goal1').innerHTML = value;
}

function LiverGoal() {
    var incrementgoal = document.getElementById('goal2');
    var value = incrementgoal.innerHTML;
    value++;
    document.getElementById('goal2').innerHTML = value;
}

function manchesterFoul() {
    var incrementgoal = document.getElementById('foul1');
    var value = incrementgoal.innerHTML;
    value++;
    document.getElementById('foul1').innerHTML = value;
}

function LiverpoolFoul() {
    var incrementgoal = document.getElementById('foul2');
    var value = incrementgoal.innerHTML;
    value++;
    document.getElementById('foul2').innerHTML = value;
}

function resetGoals() {
    document.getElementById('foul1').innerHTML = '0';
    document.getElementById('foul2').innerHTML = '0';
    document.getElementById('goal1').innerHTML = '0';
    document.getElementById('goal2').innerHTML = '0';
}