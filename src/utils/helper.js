
export function format(x){

if(x==true){
return true
}
else{
return false
}

}

export function format2(x){
return "$"+x
}

export function duplicated(x){
return "$"+x
}

export function ClearValues(x) {
    x.forEach(a => {
        if (a <= 0) {
            console.log("is 0 or less");
        } else if (a > 2 && a < 5) {
            console.log("between 2 and 5");
        } else if (a >= 5 && a <= 7) {
            console.log("between 5 and 7");
        }

        if (a < 10) {
            console.log("is minor 10");
        }
    });
}

export function read_value(Value) {
    
}

// TODO improve helper
// FIXME ugly code
