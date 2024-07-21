function myScope() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const people = [];

    function reciveEventForm (event) {
        event.preventDefault();

        const firstName = form.querySelector('.firstName');
        const lastName = form.querySelector('.lastName');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        
        people.push({
            firstName: firstName.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value
        });

        console.log(people);

        result.innerHTML += `<p>${firstName.value} ${lastName.value} ${weight.value} ${height.value}</p>`;
    }
    form.addEventListener('submit', reciveEventForm);
}
myScope();
