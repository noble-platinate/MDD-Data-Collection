let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, aa = 0, bb = 0, cc = 0;

let flag = 0;
let ans_count = 0, counter = 0;
let result = "";
let order = [];
let time = [];
document.addEventListener('DOMContentLoaded', function () {
    var startTime = new Date().getTime();

    document.querySelector('button').onclick = function () {
        var endTime = new Date().getTime();
        time.push((endTime - startTime)/1000);
        var answer = document.querySelector('#answer').value;
        document.querySelector('#answer').value = '';

        if (answer == "yes") {
            order.push("yes");
        }
        else {
            order.push("no");
        }
        
        if (counter == 0) {
            if (answer == "no") {
                a = 0;
                document.querySelector('#question').innerHTML = "How about feeling sad, empty, or hopeless, most of the day, nearly every day?";
            }
            else {
                a = 1;
                document.querySelector('#question').innerHTML = "What has it been like? How long has it lasted? (As long as 2 weeks?)";
            }
        }
        if (counter == 1) {
            if (a == 0) {
                if (answer == "yes") {
                    b = 0;
                    document.querySelector('#question').innerHTML = "What has it been like? How long has it lasted? (As long as 2 weeks?)";
                }
                else if (ans_count == 1) {
                    b = 1;
                    document.querySelector('#question').innerHTML = "During that time, did you have less interest or pleasure in things you usually enjoyed? (What has that been like?)";
                }
                else {
                    b = 1;
                    document.querySelector('#question').innerHTML = "What about a time since (ONE MONTH AGO) when you lost interest or pleasure in things you usually enjoyed? (What has that been like?)";
                }
            }
            else {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count == 1) {
                    b = 1;
                    document.querySelector('#question').innerHTML = "During that time, did you have less interest or pleasure in things you usually enjoyed? (What has that been like?)";
                }
                else {
                    b = 1;
                    document.querySelector('#question').innerHTML = "What about a time since (ONE MONTH AGO) when you lost interest or pleasure in things you usually enjoyed? (What has that been like?)";
                }
            }
        }
        if (counter == 2) {
            if (b == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count == 1) {
                    c = 0;
                    document.querySelector('#question').innerHTML = "During that time, did you have less interest or pleasure in things you usually enjoyed? (What has that been like?)";
                }
                else {
                    c = 0;
                    document.querySelector('#question').innerHTML = "What about a time since (ONE MONTH AGO) when you lost interest or pleasure in things you usually enjoyed? (What has that been like?)";
                }
            }
            else {
                if (answer == "yes") {
                    c = 1;
                    document.querySelector('#question').innerHTML = "Has it been nearly every day? How long has it lasted? (As long as 2 weeks?)";
                }
                else {
                    if (ans_count == 0) {
                        result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                                                        
       
                    }
                    else {
                        c = 2;
                        document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how has your appetite been? (What about compared to your usual appetite? Have you had to force yourself to eat? Eat [less/more] than usual? Has that been nearly every day? Have you lost or gained any weight?)";
                    }
                }
            }
        }

        if (counter == 3) {
            if (c == 0) {
                if (answer == "yes") {
                    d = 0;
                    document.querySelector('#question').innerHTML = "Has it been nearly every day? How long has it lasted? (As long as 2 weeks?)";
                }
                else {
                    if (ans_count == 0) {
                        result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });

                            
   
                    }
                    else {
                        d = 1;
                        document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how has your appetite been? (What about compared to your usual appetite? Have you had to force yourself to eat? Eat [less/more] than usual? Has that been nearly every day? Have you lost or gained any weight?)";
                    }
                }
            }
            else if (c == 1) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count == 0) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                                  
                      
                }
                else {
                    d = 1;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how has your appetite been? (What about compared to your usual appetite? Have you had to force yourself to eat? Eat [less/more] than usual? Has that been nearly every day? Have you lost or gained any weight?)";
                }
            }
            else {
                if (answer == "yes") {
                    d = 2;
                    document.querySelector('#question').innerHTML = "How much? (Had you been trying to [lose/gain] weight?)";
                }
                else {
                    d = 3;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how have you been sleeping? (Trouble falling asleep, waking frequently, trouble staying asleep, waking too early, OR sleeping too much?)";
                }
            }
        }

        if (counter == 4) {
            if (d == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count == 0) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    e = 0;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how has your appetite been? (What about compared to your usual appetite? Have you had to force yourself to eat? Eat [less/more] than usual? Has that been nearly every day? Have you lost or gained any weight?)";
                }
            }
            else if (d == 1) {
                if (answer == "yes") {
                    e = 1;
                    document.querySelector('#question').innerHTML = "How much? (Had you been trying to [lose/gain] weight?)";
                }
                else {
                    e = 2;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how have you been sleeping? (Trouble falling asleep, waking frequently, trouble staying asleep, waking too early, OR sleeping too much?)";
                }
            }
            else if (d == 2) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                e = 2;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how have you been sleeping? (Trouble falling asleep, waking frequently, trouble staying asleep, waking too early, OR sleeping too much?)";
            }
            else {
                if (answer == "yes") {
                    e = 3;
                    document.querySelector('#question').innerHTML = "How many hours of sleep(including naps) have you been getting ? How many hours of sleep did you typically get before you got(depressed / OWN WORDS) ? Has it been nearly every night ?";
                }
                else {
                    e = 4;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
                }
            }
        }
        if (counter == 5) {
            if (e == 0) {
                if (answer == "yes") {
                    f = 0;
                    document.querySelector('#question').innerHTML = "How much? (Had you been trying to [lose/gain] weight?)";
                }
                else {
                    f = 1;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how have you been sleeping? (Trouble falling asleep, waking frequently, trouble staying asleep, waking too early, OR sleeping too much?)";
                }
            }
            else if (e == 1) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                f = 1;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how have you been sleeping? (Trouble falling asleep, waking frequently, trouble staying asleep, waking too early, OR sleeping too much?)";
            }
            else if (e == 2) {
                if (answer == "yes") {
                    f = 2;
                    document.querySelector('#question').innerHTML = "How many hours of sleep(including naps) have you been getting ? How many hours of sleep did you typically get before you got(depressed / OWN WORDS) ? Has it been nearly every night ?";
                }
                else {
                    f = 3;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
                }
            }
            else if (e == 3) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                f = 3;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
            }
            else {
                if (answer == "yes") {
                    flag = 1;
                }
                f = 4;
                document.querySelector('#question').innerHTML = "What about the opposite - talking more slowly, or moving more slowly than is normal for you, as if you're moving through molasses or mud?";
            }
        }

        if (counter == 6) {
            if (f == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                g = 0;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) how have you been sleeping? (Trouble falling asleep, waking frequently, trouble staying asleep, waking too early, OR sleeping too much?)";
            }
            else if (f == 1) {
                if (answer == "yes") {
                    g = 1;
                    document.querySelector('#question').innerHTML = "How many hours of sleep(including naps) have you been getting ? How many hours of sleep did you typically get before you got(depressed / OWN WORDS) ? Has it been nearly every night ?";
                }
                else {
                    g = 2;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
                }
            }
            else if (f == 2) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                g = 2;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
            }
            else if (f == 3) {
                if (answer == "yes") {
                    flag = 1;
                }
                g = 3;
                document.querySelector('#question').innerHTML = "What about the opposite - talking more slowly, or moving more slowly than is normal for you, as if you're moving through molasses or mud?";
            }
            else if (f == 4) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    g = 4;
                    document.querySelector('#question').innerHTML = "In either instance, has it been so bad that other people have noticed it? What have they noticed? Has that been nearly every day?";
                }
                else {
                    g = 5;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
                } 
            }
        }
        if (counter == 7) {
            if (g == 0) {
                if (answer == "yes") {
                    h = 0;
                    document.querySelector('#question').innerHTML = "How many hours of sleep(including naps) have you been getting ? How many hours of sleep did you typically get before you got(depressed / OWN WORDS) ? Has it been nearly every night ?";
                }
                else {
                    h = 1;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
                }
            }
            else if (g == 1) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                h = 1;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
            }
            else if (g == 2) {
                if (answer == "yes") {
                    flag = 1;
                }
                h = 2;
                document.querySelector('#question').innerHTML = "What about the opposite - talking more slowly, or moving more slowly than is normal for you, as if you're moving through molasses or mud?";
            }
            else if (g == 3) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    h = 3;
                    document.querySelector('#question').innerHTML = "In either instance, has it been so bad that other people have noticed it? What have they noticed? Has that been nearly every day?";
                }
                else {
                    h = 4;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
                }
            }
            else if (g == 4) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                h = 4;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
            }
            else if (g == 5) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                h = 5;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been feeling worthless?";
            }
        }
        if (counter == 8) {
            if (h == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                i = 0;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been so fidgety or restless that you were unable to sit still?";
            }
            else if (h == 1) {
                if (answer == "yes") {
                    flag = 1;
                }
                i = 1;
                document.querySelector('#question').innerHTML = "What about the opposite - talking more slowly, or moving more slowly than is normal for you, as if you're moving through molasses or mud?";
            }
            else if (h == 2) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    i = 2;
                    document.querySelector('#question').innerHTML = "In either instance, has it been so bad that other people have noticed it? What have they noticed? Has that been nearly every day?";
                }
                else {
                    i = 3;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
                }
            }
            else if (h == 3) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                i = 3;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
            }
            else if (h == 4) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                i = 4;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been feeling worthless?";
            }
            else if (h == 5) {
                if (answer == "yes") {
                    flag = 1;
                }
                i = 5;
                document.querySelector('#question').innerHTML = "What about feeling guilty about things you have done or not done?";
            }
        }
        
        if (counter == 9) {
            if (i == 0) {
                if (answer == "yes") {
                    flag = 1;
                }
                j = 0;
                document.querySelector('#question').innerHTML = "What about the opposite - talking more slowly, or moving more slowly than is normal for you, as if you're moving through molasses or mud?";
            }
            else if (i == 1) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    j = 1;
                    document.querySelector('#question').innerHTML = "In either instance, has it been so bad that other people have noticed it? What have they noticed? Has that been nearly every day?";
                }
                else {
                    j = 2;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
                }
            }
            else if (i == 2) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                j = 2;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
            }
            else if (i == 3) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                j = 3;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been feeling worthless?";
            }
            else if (i == 4) {
                if (answer == "yes") {
                    flag = 1;
                }
                j = 4;
                document.querySelector('#question').innerHTML = "What about feeling guilty about things you have done or not done?";
            }
            else if (i == 5) {
                if (answer == "yes") {
                    j = 5;
                    document.querySelector('#question').innerHTML = "What kinds of things? (Is this only because you can't take care of things since you have been sick?)";
                }
                else if (flag == 1) {
                    flag = 0;
                    j = 6;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    j = 7;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
        }

        if (counter == 10) {
            if (j == 0) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    k = 0;
                    document.querySelector('#question').innerHTML = "In either instance, has it been so bad that other people have noticed it? What have they noticed? Has that been nearly every day?";
                }
                else {
                    k = 1;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
                }
            }
            else if (j == 1) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                k = 1;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
            }
            else if (j == 2) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                k = 2;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been feeling worthless?";
            }
            else if (j == 3) {
                if (answer == "yes") {
                    flag = 1;
                }
                k = 3;
                document.querySelector('#question').innerHTML = "What about feeling guilty about things you have done or not done?";
            }
            else if (j == 4) {
                if (answer == "yes") {
                    k = 4;
                    document.querySelector('#question').innerHTML = "What kinds of things? (Is this only because you can't take care of things since you have been sick?)";
                }
                else if (flag == 1) {
                    flag = 0;
                    k = 5;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    k = 6;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (j == 5) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    k = 5;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    k = 6;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (j == 6) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                k = 6;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (j == 7) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                k = 7;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
        }
        if (counter == 11) {
            if (k == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                l = 0;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) what was your energy like? (Tired all the time? Nearly every day?)";
            }
            else if (k == 1) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                l = 1;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been feeling worthless?";
            }
            else if (k == 2) {
                if (answer == "yes") {
                    flag = 1;
                }
                l = 2;
                document.querySelector('#question').innerHTML = "What about feeling guilty about things you have done or not done?";
            }
            else if (k == 3) {
                if (answer == "yes") {
                    l = 3;
                    document.querySelector('#question').innerHTML = "What kinds of things? (Is this only because you can't take care of things since you have been sick?)";
                }
                else if (flag == 1) {
                    flag = 0;
                    l = 4;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    l = 5;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (k == 4) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                l = 5;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (k == 5) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                l = 6;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (k == 6) {
                if (answer == "yes") {
                    l = 7;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    l = 8;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (k == 7) {
                if (answer == "yes") {
                    l = 7;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    l = 8;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
        }        
        if (counter == 12) {
            if (l == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                m = 0;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you been feeling worthless?";
            }
            else if (l == 1) {
                if (answer == "yes") {
                    flag = 1;
                }
                m = 1;
                document.querySelector('#question').innerHTML = "What about feeling guilty about things you have done or not done?";
            }
            else if (l == 2) {
                if (answer == "yes") {
                    m = 2;
                    document.querySelector('#question').innerHTML = "What kinds of things? (Is this only because you can't take care of things since you have been sick?)";
                }
                else if (flag == 1) {
                    flag = 0;
                    m = 3;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    m = 4;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (l == 3) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    m = 3;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    m = 4;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (l == 4) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                m = 4;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (l == 5) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                m = 5;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (l == 6) {
                if (answer == "yes") {
                    m = 6;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    m = 7;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (l == 7) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    m = 7;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (l == 8) {
                if (answer == "no") {
                    m = 8;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    m = 9;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
        }
        if (counter == 13) {
            if (m == 0) {
                if (answer == "yes") {
                    flag = 1;
                }
                n = 0;
                document.querySelector('#question').innerHTML = "What about feeling guilty about things you have done or not done?";
            }
            else if (m == 1) {
                if (answer == "yes") {
                    n = 1;
                    document.querySelector('#question').innerHTML = "What kinds of things? (Is this only because you can't take care of things since you have been sick?)";
                }
                else if (flag == 1) {
                    flag = 0;
                    n = 2;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    n = 3;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (m == 2) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    n = 2;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    n = 3;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (m == 3) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                n = 3;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (m == 4) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                n = 4;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (m == 5) {
                if (answer == "yes") {
                    n = 5;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    n = 6;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (m == 6) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    n = 6;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (m == 7) {
                if (answer == "no") {
                    n = 7;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    n = 8;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (m == 8) {
                if (answer == "no") {
                    n = 9;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    n = 8;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (m == 9) {
                if (answer == "yes") {
                    n = 10;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    n = 11;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
        }
        if (counter == 14) {
            if (n == 0) {
                if (answer == "yes") {
                    o = 0;
                    document.querySelector('#question').innerHTML = "What kinds of things? (Is this only because you can't take care of things since you have been sick?)";
                }
                else if (flag == 1) {
                    flag = 0;
                    o = 1;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    o = 2;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (n == 1) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    o = 1;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    o = 2;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (n == 2) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                o = 2;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (n == 3) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                o = 3;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (n == 4) {
                if (answer == "yes") {
                    o = 4;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    o = 5;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (n == 5) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    o = 5;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (n == 6) {
                if (answer == "no") {
                    o = 6;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    o = 7;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (n == 7) {
                if (answer == "no") {
                    o = 8;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    o = 7;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (n == 8) {
                if (answer == "yes") {
                    o = 9;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    o = 10;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (n == 9) {
                if (answer == "no") {
                    o = 11;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    o = 7;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (n == 10) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                }
                else {
                    o = 10;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (n == 11) {
                if (answer == "yes") {
                    o = 12;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 15) {
            if (o == 0) {
                if (answer == "yes") {
                    flag = 1;
                }
                if (flag == 1) {
                    flag = 0;
                    p = 0;
                    document.querySelector('#question').innerHTML = "Nearly every day?";
                }
                else {
                    p = 1;
                    document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
                }
            }
            else if (o == 1) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                p = 1;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (o == 2) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                p = 2;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (o == 3) {
                if (answer == "yes") {
                    p = 3;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    p = 4;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (o == 4) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    p = 4;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (o == 5) {
                if (answer == "no") {
                    p = 5;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    p = 6;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (o == 6) {
                if (answer == "no") {
                    p = 7;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    p = 6;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (o == 7) {
                if (answer == "yes") {
                    p = 8;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    p = 9;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (o == 8) {
                if (answer == "no") {
                    p = 10;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    p = 6;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (o == 9) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    p = 9;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (o == 10) {
                if (answer == "yes") {
                    p = 11;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (o == 11) {
                if (answer == "no") {
                    p = 12;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (o == 12) {
                if (answer == "yes") {
                    p = 13;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 16) {
            if (p == 0) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                q = 0;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have you had trouble thinking or concentrating? Has it been hard to make decisions about everyday things? (What kinds of things has it been interfering with? Nearly every day?)";
            }
            else if (p == 1) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                q = 1;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (p == 2) {
                if (answer == "yes") {
                    q = 2;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    q = 3;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (p == 3) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    q = 3;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (p == 4) {
                if (answer == "no") {
                    q = 4;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    q = 5;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (p == 5) {
                if (answer == "no") {
                    q = 6;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    q = 5;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (p == 6) {
                if (answer == "yes") {
                    q = 7;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    q = 8;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (p == 7) {
                if (answer == "no") {
                    q = 9;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    q = 5;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (p == 8) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    q = 8;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (p == 9) {
                if (answer == "yes") {
                    q = 10;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (p == 10) {
                if (answer == "no") {
                    q = 11;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    q = 5;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (p == 11) {
                if (answer == "yes") {
                    q = 12;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (p == 12) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    q = 5;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (p == 13) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 17) {
            if (q == 0) {
                if (answer == "yes") {
                    ans_count = ans_count = 1;
                }
                r = 0;
                document.querySelector('#question').innerHTML = "During (THE WORST 2-WEEK PERIOD OF THE PAST MONTH) have things been so bad that you thought a lot about death or that you would be better off dead? Have you thought about taking your own life?";
            }
            else if (q == 1) {
                if (answer == "yes") {
                    r = 1;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    r = 2;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (q == 2) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    r = 2;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (q == 3) {
                if (answer == "no") {
                    r = 3;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    r = 4;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (q == 4) {
                if (answer == "no") {
                    r = 5;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    r = 4;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (q == 5) {
                if (answer == "yes") {
                    r = 6;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    r = 7;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (q == 6) {
                if (answer == "no") {
                    r = 8;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    r = 4;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (q == 7) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    r = 7;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (q == 8) {
                if (answer == "yes") {
                    r = 9;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (q == 9) {
                if (answer == "no") {
                    r = 10;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    r = 4;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (q == 10) {
                if (answer == "yes") {
                    r = 11;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (q == 11) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    r = 4;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (q == 12) {
                if (answer == "yes") {
                                
                       
                       
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 18) {
            if (r == 0) {
                if (answer == "yes") {
                    s = 0;
                    document.querySelector('#question').innerHTML = "Have you done something about it? (What have you done? Have you made a specific plan? Have you taken any action to prepare for it? Have you actually made a suicide attempt?)";
                }
                else if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                              
                       
                }
                else {
                    s = 1;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (r == 1) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                              
                       
                }
                else {
                    s = 1;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (r == 2) {
                if (answer == "no") {
                    s = 2;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    s = 3;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (r == 3) {
                if (answer == "no") {
                    s = 4;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    s = 3;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (r == 4) {
                if (answer == "yes") {
                    s = 5;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    s = 6;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (r == 5) {
                if (answer == "no") {
                    s = 7;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    s = 3;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (r == 6) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    s = 6;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (r == 7) {
                if (answer == "yes") {
                    s = 8;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (r == 8) {
                if (answer == "no") {
                    s = 9;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    s = 3;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (r == 9) {
                if (answer == "yes") {
                    s = 10;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (r == 10) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    s = 3;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (r == 11) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 19) {
            if (s == 0) {
                if (answer == "yes") {
                    ans_count = ans_count + 1;
                }
                if (ans_count < 5) {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    t = 0;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your relationship or your interactions with other people? (Have [DEPRESSIVE SXS] caused you any problems in your relationships with your family, romantic partner, or friends?)";
                }
            }
            else if (s == 1) {
                if (answer == "no") {
                    t = 1;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    t = 2;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (s == 2) {
                if (answer == "no") {
                    t = 3;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    t = 2;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (s == 3) {
                if (answer == "yes") {
                    t = 4;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    t = 5;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (s == 4) {
                if (answer == "no") {
                    t = 6;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    t = 2;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (s == 5) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    t = 5;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (s == 6) {
                if (answer == "yes") {
                    t = 7;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (s == 7) {
                if (answer == "no") {
                    t = 8;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    t = 2;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (s == 8) {
                if (answer == "yes") {
                    t = 9;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (s == 9) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    t = 2;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (s == 10) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 20) {
            if (t == 0) {
                if (answer == "no") {
                    u = 0;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your work/school? (How about your attendance at work/school? Have [DEPRESSIVE SXS] made it more difficult to do your work/schoolwork? Have [DEPRESSIVE SXS] affected the quality of your work/schoolwork?)";
                }
                else {
                    u = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (t == 1) {
                if (answer == "no") {
                    u = 2;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    u = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (t == 2) {
                if (answer == "yes") {
                    u = 3;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    u = 4;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (t == 3) {
                if (answer == "no") {
                    u = 5;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    u = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (t == 4) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    u = 4;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (t == 5) {
                if (answer == "yes") {
                    u = 6;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (t == 6) {
                if (answer == "no") {
                    u = 7;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    u = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (t == 7) {
                if (answer == "yes") {
                    u = 8;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (t == 8) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    u = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (t == 9) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 21) {
            if (u == 0) {
                if (answer == "no") {
                    v = 0;
                    document.querySelector('#question').innerHTML = "How have (DEPRESSIVE SXS) affected your ability to take care of things at home? How about doing simple everyday things, like getting dressed, bathing, or brushing your teeth? What about doing other things that are important to you, like religious activities, physical exercise, or hobbies? Have you avoided doing anything because you felt like you weren't up to it?";
                }
                else {
                    v = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (u == 1) {
                if (answer == "yes") {
                    v = 2;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    v = 3;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (u == 2) {
                if (answer == "no") {
                    v = 4;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    v = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (u == 3) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    v = 3;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (u == 4) {
                if (answer == "yes") {
                    v = 5;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (u == 5) {
                if (answer == "no") {
                    v = 6;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    v = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (u == 6) {
                if (answer == "yes") {
                    v = 7;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (u == 7) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    v = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (u == 8) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 22) {
            if (v == 0) {
                if (answer == "no") {
                    w = 0;
                    document.querySelector('#question').innerHTML = "Have (DEPRESSED SXS) affected any other important part of your life?";
                }
                else {
                    w = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (v == 1) {
                if (answer == "yes") {
                    w = 2;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    w = 3;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (v == 2) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    w = 3;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (v == 3) {
                if (answer == "yes") {
                    w = 4;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (v == 4) {
                if (answer == "no") {
                    w = 5;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    w = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (v == 5) {
                if (answer == "yes") {
                    w = 6;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (v == 6) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    w = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (v == 7) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 23) {
            if (w == 0) {
                if (answer == "no") {
                    x = 0;
                    document.querySelector('#question').innerHTML = "How much have you been bothered or upset by having (DEPRESSIVE SXS)? A lot?";
                }
                else {
                    x = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (w == 1) {
                if (answer == "yes") {
                    x = 2;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    x = 3;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (w == 2) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    x = 3;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (w == 3) {
                if (answer == "yes") {
                    x = 4;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (w == 4) {
                if (answer == "yes") {
                    x = 5;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (w == 5) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    x = 1;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (v == 6) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 24) {
            if (x == 0) {
                if (answer == "no") {
                    result = 'Not diagnosed with Major Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                            
                      
                }
                else {
                    y = 0;
                    document.querySelector('#question').innerHTML = "Just before this period of depression began, were you physically ill?";
                }
            }
            else if (x == 1) {
                if (answer == "yes") {
                    y = 1;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    y = 2;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (x == 2) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    y = 2;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (x == 3) {
                if (answer == "yes") {
                    y = 3;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (x == 4) {
                if (answer == "yes") {
                    y = 4;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (x == 5) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 25) {
            if (y == 0) {
                if (answer == "yes") {
                    z = 0;
                    document.querySelector('#question').innerHTML = "Were you suffering from one or more of the following conditions: stroke, Huntington's disease, Parkinson's disease, traumatic brain injury, Cushing's disease, hypothyroidism, multiple sclerosis, systemic lupus erythematosus?";
                }
                else {
                    z = 1;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (y == 1) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    z = 1;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (y == 2) {
                if (answer == "yes") {
                    z = 2;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (y == 3) {
                if (answer == "yes") {
                    z = 3;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (y == 4) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 26) {
            if (z == 0) {
                if (answer == "yes") {
                    result = 'Diagnose: Depressive Disorder Due to AMC!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                    
                           
                      
                }
                else {
                    aa = 0;
                    document.querySelector('#question').innerHTML = "Just before this began, were you taking any medications or drinking or using any street drugs?";
                }
            }
            else if (z == 1) {
                if (answer == "yes") {
                    aa = 1;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (z == 2) {
                if (answer == "yes") {
                    aa = 2;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  

   
                       
                }
            }
            else if (z == 3) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 27) {
            if (aa == 0) {
                if (answer == "yes") {
                    bb = 0;
                    document.querySelector('#question').innerHTML = "Were you taking any one or more of the following: alcohol(I/W); phencyclidine (I); hallucinogens (I); inhalants (I); opiods (I/W); sedatives, hypnotics, or anxiolytics (I/W); amphetamine and other stimulants (I/W); cocaine (I/W); antiviral agents (efavirenz); cardiovascular agents (clonidine, guanethidine, methyldopa, reserpine); antidepressants; anticonvulsants; antimigrane agents (triptans); antipsychotics; hormonal agents (corticosteroids, oral contraceptives, gonadotropin-releasing hormone agonists, tamoxifen); smoking cessation agents (varenicline); immunological agents (interferon) ?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (aa == 1) {
                if (answer == "yes") {
                    bb = 1;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (aa == 2) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 28) {
            if (bb == 0) {
                if (answer == "yes") {
                    cc = 0;
                    document.querySelector('#question').innerHTML = "Any change in the amount you were taking?";
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
            else if (bb == 1) {
                if (answer == "yes") {
                    result = 'Diagnose: Substance-Induced Depressive Disorder!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                           
                      
                }
                else {
                    result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                }
            }
        }
        if (counter == 29) {
            if (answer == "yes") {
                            
                 
                   
            }
            else {
                result = 'Diagnose: CURRENT MAJOR DEPRESSIVE EPISODE!!!';
             const formData = new FormData();

                //console.log(name);
                formData.append('result', result);
                formData.append('answer', answer);
                formData.append('email', email);
                formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
                console.log(formData);
                fetch('{% url "questionaire" %}', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

                .catch(error => {
                    console.error('Error:', error);
                });
                
                                                  
                 
                   
            }
        }
        counter++;
    };
});
    