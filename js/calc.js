const calc = () => {
    
    const formCalc = document.getElementById('form-calc');
    const result = document.querySelector('.calc__result');
    const x = document.getElementById('x');
    const y = document.getElementById('y');
    const plus = document.querySelector('.plus');
    // console.log(plus)
    const minus = document.querySelector('.minus');
    // console.log(minus)
    const multi = document.querySelector('.multi');
    // console.log(multi)
    const division = document.querySelector('.division');
    // console.log(division)

    plus.addEventListener('click', (event) => {
        const plusSum = (+x.value + +y.value).toFixed(2);
        result.innerHTML = plusSum;
    } )

    minus.addEventListener('click', (event) => {
        const minusSum = (+x.value - +y.value).toFixed(2);
        result.innerHTML = minusSum;
    } )

    multi.addEventListener('click', (event) => {
        const multiSum = (+x.value * +y.value).toFixed(2)
        result.innerHTML = multiSum;
    } )

    division.addEventListener('click', (event) => {
        const divisionSum = (+x.value / +y.value).toFixed(2);
        result.innerHTML = divisionSum;
    } )

};

export  {calc}