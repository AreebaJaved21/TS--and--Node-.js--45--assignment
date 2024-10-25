// Assignment 45
// // 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

function createCar(manufacturer: string, model: string, ...optional: [string, any][]): Car {
    const optionalObj: Record<string, any> = {};
    optional.forEach(([key, value]) => {
        optionalObj[key] = value;
    });

    return {
        manufacturer,
        model,
        ...optionalObj
    };
}

const myCar: Car = createCar("HONDA", "BR-V", ["color", "grey"], ["year", "2024"]);

// Print each property on a separate line
for (const key in myCar) {
    console.log(`${key}: ${myCar[key]}`);
}
