let mark = prompt("enter mark between 0 and 100")
if (mark > 0 && mark < 100){

        if(mark > 79){
            console.log("A")
        }else if(mark>59 && mark < 80){
            console.log ("B");
        }else if(mark > 48 && mark < 60){
            console.log("C")
        }else if(mark > 39 && mark < 49){
            console.log('D')
        }else {
        console.log ('E');
        }

}
else{
    console.log("mark should be between 0 and 100")
}