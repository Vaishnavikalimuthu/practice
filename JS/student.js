const mark=prompt()

if((mark>=90) && (mark<=100)){
    console.log("studet got A grade")
}
else if((mark>=70) && (mark<90)){
    console.log("studet got B grade") 
}
else if((mark>=50) && (mark<70)) {
    console.log("studet got C grade")
}
else if((mark>=35) && (mark<50)){
    console.log("studet got D grade")
}
else if((mark>=0) && (mark<35)){
    console.log("studet got fail")
}
else {
    console.log("Enter the valid input")
}
