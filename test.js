const squares = document.querySelectorAll(".Square");

window.addEventListener("scroll",() => {
    squares.forEach((sq,i) => {
        const rect = sq.getBoundingClientRect();
        if (rect.top < window.innerHeight/* && rect.bottom > 0*/){
            setTimeout(() => {
                sq.classList.add("show");
            }, i*50);
        }
        else if(rect.top > window.innerHeight-50|| rect.bottom < 0){
            sq.classList.remove("show");
        }
    });
});

const reasons = document.querySelectorAll(".Reason")

window.addEventListener("scroll",() => {
    reasons.forEach((Rs,i) => {
        const rect2 = Rs.getBoundingClientRect();
            if (rect2.top < window.innerHeight /*&& rect2.bottom > 0*/){
            setTimeout(() => {
                Rs.classList.add("show2");
            }, i*50);
        }
        else if(rect2.top > window.innerHeight || rect2.bottom < 0){
            Rs.classList.remove("show2");
        }
    })
})


const Objectives = document.querySelectorAll(".Objective");

window.addEventListener("scroll",() =>{
    Objectives.forEach((Os,i) => {
        const rect3 = Os.getBoundingClientRect();
        if(rect3.top < window.innerHeight - 100 /* && rect3.bottom > 0*/){
        setTimeout(() => {
            Os.classList.add("show3");
        }, i*50);
        }
        else if(rect3.top > window.innerHeight || rect3.bottom <0){

            Os.classList.remove("show3");
        }
    });
});

const Skills = document.querySelector(".SkillStars");

window.addEventListener("scroll",() => {
    /*Skills.forEach((Ss,i) => {*/
        const rect4 = Skills.getBoundingClientRect();
        if(rect4.top < window.innerHeight - 200){
        /*setTimeout(() => {*/
            Skills.classList.add("show4");
        /*}, i*50);*/
        }
        else if(rect4.top > window.innerHeight || rect4.bottom <0){
            Skills.classList.remove("show4");
        }
    /*});*/

});


const Works = document.querySelectorAll(".Work1, .Work2, .Work3");
const Contents = document.querySelectorAll(".Content1, .Content2, .Content3");

Works.forEach(ws =>{
    ws.addEventListener("click",() =>{
    const target = ws.dataset.target;
    
    Contents.forEach(Cs =>{
        Cs.classList.remove("active");
    });
    
    document.getElementById(target).classList.add("active");

    
});
    });

