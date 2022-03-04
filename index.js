// Code your solution in this file!


/* 
number - 42 = distToHQ
distToHQ * 264 = distToHQFeet */


function distanceFromHqInBlocks(dest) {
    let blocks;
   if (dest > 42) {
      return blocks = dest - 42;
   } else {
       return blocks = 42 -dest;
   }
}


function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) *264;

}

function distanceTravelledInFeet(start,destination) {
    return Math.abs(start - destination) * 264;

}

function calculatesFarePrice(start,destination) {
        const dist = distanceTravelledInFeet(start,destination);
        if (dist <= 400) {
            return 0;
        }
        else if (dist > 400 && dist <= 2000 ) {
            return (dist - 400) * 0.02;
        }
        else if (dist > 2000 && dist <=2500) {
            return 25;
        }
        else if (dist >2500) {
            return "cannot travel that far";
        }
}

