const AjouterEmploye = document.getElementById('AjouterEmploye');
const formAjout = document.getElementById('formAjout');
const btnA = document.getElementById('btnA');
const btnV = document.getElementById('btnV');
const nam = document.getElementById('nam');
const rols = document.getElementById('rols');
const img = document.getElementById('img');
const email = document.getElementById('email');
const tele = document.getElementById('tele');
const toutPreso = document.getElementById('toutPreso');
const addExp = document.getElementById('addExp');
const expers = document.getElementById('exper');
const Experince = document.getElementById('Experince');
const Sconference = document.querySelector('.Sconference');
const per = document.querySelector('.per');
const addSAlle = document.getElementById('addSAlle');
const addSelect = document.getElementById('addSelect');

let Employes = [];

AjouterEmploye.addEventListener('click', () => {
    formAjout.style.display = 'flex';
});

btnA.addEventListener('click', () => {
    formAjout.style.display = 'none';
});

btnV.addEventListener('click', () => {
    if (nam.value) {
        let personnes = {
            noms: nam.value,
            rolss: rols.value,
            imgs: img.value,
            emails: email.value,
            teles: tele.value,
            Experinces: Experince.textContent
        };

        Employes.push(personnes);

        const personne = document.createElement('div');
        personne.className = 'per';
        personne.innerHTML = `
            <div>
                <h3>${personnes.noms}</h3>
                <p>${personnes.rolss}</p>
            </div>
            <button id="deletPersonne">✖</button>
        `;

        personne.style.backgroundColor = "beige";
        personne.style.borderRadius = "0.4rem";
        personne.style.padding = "0.5rem";
        personne.style.gap = "0.2rem";
        personne.style.display = "flex";
        personne.style.justifyContent = "space-between";

        toutPreso.appendChild(personne);

        personne.addEventListener('click', () => {
            afficherCarte(personnes);
        });

        updateSelect();
        
        nam.value = '';
        rols.value = '';
        img.value = '';
        email.value = '';
        tele.value = '';
        Experince.innerHTML = '';
        formAjout.style.display = 'none';
    }
});

toutPreso.addEventListener('click', (e) => {
    if (e.target.id === 'deletPersonne') {
        e.stopPropagation();
        const card = e.target.parentElement;
        const employeeName = card.querySelector('h3').textContent;
        const employeeRole = card.querySelector('p').textContent;
        
        const employeeIndex = Employes.findIndex(emp => 
            emp.noms === employeeName && emp.rolss === employeeRole
        );
        
        if (employeeIndex !== -1) {
            Employes.splice(employeeIndex, 1);
        }
        
        card.remove();
        updateSelect();
        
        const carteEmploye = document.querySelector('.carteEmploye');
        if (carteEmploye) {
            carteEmploye.remove();
        }
    }
});

addExp.addEventListener('click', () => {
    if (expers.value) {
        const experies = document.createElement('h4');
        experies.innerText = `${expers.value}`;
        Experince.appendChild(experies);
        expers.value = '';
    }
});

function afficherCarte(personne) {
    const card = document.createElement('div');
    card.className = "carteEmploye";

    card.innerHTML = `
        <div class="card-content">
            <img src="${personne.imgs || ''}" style="width:120px; height:120px; border-radius:50%; object-fit:cover;">
            <h2>${personne.noms}</h2>
            <p><strong>Rôle :</strong> ${personne.rolss}</p>
            <p><strong>Email :</strong> ${personne.emails}</p>
            <p><strong>Téléphone :</strong> ${personne.teles}</p>
            <p><strong>Expérience :</strong> ${personne.Experinces}</p>
            <button id="closeCard">✖</button>
        </div>
    `;

    card.style.position = "fixed";
    card.style.top = "50%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)";
    card.style.background = "white";
    card.style.padding = "20px";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 0 50px orange";
    card.style.zIndex = "1000";

    document.body.appendChild(card);

    card.querySelector("#closeCard").onclick = () => {
        card.remove();
    };
}

function updateSelect() {
    addSelect.innerHTML = '';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "employes";
    addSelect.appendChild(defaultOption);
    
    Employes.forEach((employee, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${employee.noms} - ${employee.rolss}`;
        addSelect.appendChild(opt);
    });
}

updateSelect();