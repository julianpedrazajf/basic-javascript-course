function solution(car){
    if(car.licensePlate){
        car.drivingLicense = true;
    } else {
        car.drivingLicense = false;
    }
    return car;
}

// Prueba 1
console.log(solution({
    color: 'red',
    brand: 'Kia',
}));
/* {
    color: 'red',
    brand: 'Kia',
    drivingLicense: false,
}*/
  
// Prueba 2
console.log(solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
}));
/*{
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
    drivingLicense: true,
}*/

// Prueba 3
console.log(solution({ licensePlate: 'RGB255'  }))
/*{
    licensePlate: 'RGB255',
    drivingLicense: true,
}*/