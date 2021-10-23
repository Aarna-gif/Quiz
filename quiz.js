let questions =[

    {
    id : 1,
    question : "What's the name of Black Panther's Kingdom?",
    answer : "Wakanda",
    options : ["Makanda","Wakanda","Lambina","Waklanda"]
    },
    
    {
    id : 2,
    question : "Who is Thanos the son off?",
    answer : "A'lars",
    options : ["Karen","A'lras","En sabaah Nur","Joe"]
    },
    
    {
    id : 3,
    question : "What is the name of Thor's mother?",
    answer : "Frigga",
    options : ["Karen", "Frigga","Ageir","Alfdis"]
    },
    
    {
    id : 4,
    question : "What was Cpatain America's height before he transformed into super-solider?",
    answer : "5'4",
    options : ["4'11","5'1","5'9","5'4"]
    },
    
    {
    id : 5,
    question : "What was name of dwarf of Nidavellir?",
    answer : "Eitri",
    options : ["Steve", "Walsh","Eitri","Erik"]
    },
    
    {
    id :6,
    question : "Finish this line from Cpatain America : And Hulk ____________",
    answer : "Smash",
    options:["Smash","Kick Ass","Do it","Good Luck"]
    },
    ]
    
    let value = JSON.stringify(questions)
    
    localStorage.setItem("question",value)
    
    //identify questions
    let question_count =0,point=0;
    
    //function display ques & ans
    window.onload = function(){
    show(question_count)
    }
    
    function show(count){
    let question = document.getElementById("questions")
    let[first,second,third,fourth] = questions[count].options
    
    
    //directly modify iside ur html
    
    question.innerHTML =`
    <h2>${questions[count].question}</h2>
    
    <ul class="option_group">
    <li class ="option">${first}</li>
    <li class ="option">${second}</li>
    <li class ="option">${third}</li>
    <li class ="option">${fourth}</li>
    </ul>
    `
    toggleActive();
    }
    
    function next(){
    //check last ques or not
    if(question.length-1){
    location.href="./end.html"
    }
    
    let user_answer = document.querySelector("li.options.active").innerHTML
    if(user_answer==questions[question_count].answer){
    point+=1;
    sessionStorage.setItem("points",points)
    }
    else{
    point+=0;
    sessionStorage.setItem("points",points)
    }
    question_count++
    show(question_count)
    }
    
    function toggleActive(){
    let option = document.querySelectorAll("li.option")
    for(let i=0;option.length;i++){
    option[i].onclick=function(){
    for(let i=0;option.length;i++){
    if(option[i].classList.contains("active")){
    Option[i].classList.remove("active")
    }
    }
    Option[i].classList.add("active")
    }
    }
}
               