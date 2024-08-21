var contacts = {
    "1": { name: "Matheus Silva", phone: "(98) 35698-9875", email: "silvamatheus@gmail.com", photo: "https://via.placeholder.com/150" },
    "2": { name: "Maria Silveira", phone: "(94) 98963-5788", email: "mariasilveira@gmail.com", photo: "https://via.placeholder.com/150" },
    "3": { name: "Solange Mendes", phone: "(94) 98963-5788", email: "solangemendes@gmail.com", photo: "https://via.placeholder.com/150" }
};

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function viewContact() {
    var id = document.getElementById('viewId').value;
    var contactDetails = document.getElementById('contactDetails');
    
    if (contacts[id]) {
        var contact = contacts[id];
        contactDetails.innerHTML = `
            <img src="${contact.photo}" alt="${contact.name}">
            <p><strong>Nome:</strong> ${contact.name}</p>
            <p><strong>Telefone:</strong> ${contact.phone}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
        `;
    } else {
        contactDetails.innerHTML = '<p>Contato não encontrado.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});
