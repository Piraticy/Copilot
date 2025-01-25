function createVisaHtml() {
    const form = document.createElement('form');
    form.setAttribute('id', 'visaForm');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    form.appendChild(nameInput);

    form.appendChild(document.createElement('br'));

    const passportLabel = document.createElement('label');
    passportLabel.setAttribute('for', 'passport');
    passportLabel.textContent = 'Passport Number:';
    form.appendChild(passportLabel);

    const passportInput = document.createElement('input');
    passportInput.setAttribute('type', 'text');
    passportInput.setAttribute('id', 'passport');
    passportInput.setAttribute('name', 'passport');
    form.appendChild(passportInput);

    form.appendChild(document.createElement('br'));

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    document.body.appendChild(form);
}