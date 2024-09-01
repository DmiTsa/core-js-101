const points = [
    { country: 'Belarus', city: 'Brest' },
    { country: 'Russia', city: 'Omsk' },
    { country: 'Russia', city: 'Samara' },
    { country: 'Belarus', city: 'Grodno' },
    { country: 'Belarus', city: 'Minsk' },
    { country: 'Poland', city: 'Lodz' }
]


// Map {
//  "Belarus" => ["Brest", "Grodno", "Minsk"],
//  "Russia" => ["Omsk", "Samara"],
//  "Poland" => ["Lodz"]
// }

function group(array, keySelector, valueSelector) {
    const rez = new Map();

    array.map((el) => {

        if (rez.has(keySelector(el))) {
            let current = rez.get(keySelector(el))
            current.push(valueSelector(el))
            rez.set(keySelector(el), current);
        } else {
            rez.set(keySelector(el), [valueSelector(el)]);
        }

    })

    return rez
}

console.log(group(points, item => item.country, item => item.city));
