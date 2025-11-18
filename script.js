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
const role = document.getElementById('role');
const from = document.getElementById('from');
const to = document.getElementById('to');
const Experince = document.getElementById('Experince');
const Sconference = document.querySelector('.Sconference');
const per = document.querySelector('.per');
const addSelects = document.querySelectorAll('#addSelect');
const btnSAlles = document.querySelectorAll('#addSAlle')
const selectAdd = document.querySelectorAll('#selectAdd');
const btnAdd = document.querySelectorAll('#btnAdd');
const annulerBtnSelect = document.querySelectorAll('#AnnulerSelect');

let Employes = [];
let employeeCards = {};

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

        const employeeKey = `${personnes.noms}-${personnes.rolss}`;
        employeeCards[employeeKey] = personne;

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
        
        const employeeKey = `${employeeName}-${employeeRole}`;
        delete employeeCards[employeeKey];
        
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
        experies.innerText = ` company : ${expers.value} 
        role :${role.value}
        from : ${from.value}
        to :${to.value}`;
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
    addSelects.forEach((addSelect) => {
        addSelect.innerHTML = '';
        
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "employes";
        addSelect.appendChild(defaultOption);
        
        Employes.forEach((employee, index) => {
            const employeeKey = `${employee.noms}-${employee.rolss}`;
            
            if (employeeCards[employeeKey] && employeeCards[employeeKey].style.display !== 'none') {
                const opt = document.createElement('option');
                opt.value = index;
                opt.textContent = `${employee.noms} - ${employee.rolss}`;
                addSelect.appendChild(opt);
            }
        });
    });
}

btnAdd.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const room = e.target.closest('[id="rooms"]');
        if (room) {
            const selectInThisRoom = room.querySelector('#selectAdd');
            if (selectInThisRoom) {
                selectInThisRoom.style.display='flex';
            }
        }
    });
});

annulerBtnSelect.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const selectAdd = e.target.closest('#selectAdd');
        if (selectAdd) {
            selectAdd.style.display = 'none';
        }
    });
});

addSelects.forEach((select) => {
    select.addEventListener('change', (e) => {
        const selectedIndex = e.target.value;
        
        if (selectedIndex !== "") {
            const employee = Employes[selectedIndex];
            const room = e.target.closest('[id="rooms"]');
            
            if (room) {
                const roomContent = room.querySelector('.room');
                const employeeKey = `${employee.noms}-${employee.rolss}`;
                
                if (employeeCards[employeeKey]) {
                    employeeCards[employeeKey].style.display = 'none';
                }
                
                const employeeCard = document.createElement('div');
                employeeCard.className = 'per';
                employeeCard.innerHTML = `
                    <div>
                        <h3>${employee.noms}</h3>
                        <p>${employee.rolss}</p>
                    </div>
                    <button class="deletFromRoom">✖</button>
                `;

                employeeCard.style.backgroundColor = "beige";
                employeeCard.style.borderRadius = "0.4rem";
                employeeCard.style.padding = "0.5rem";
                employeeCard.style.gap = "0.2rem";
                employeeCard.style.display = "flex";
                employeeCard.style.justifyContent = "space-between";

                employeeCard.setAttribute('data-employee-key', employeeKey);

                roomContent.appendChild(employeeCard);

                const selectAdd = e.target.closest('#selectAdd');
                if (selectAdd) {
                    selectAdd.style.display = 'none';
                }
                e.target.value = "";
                
                updateSelect();
            }
        }
    });
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('deletFromRoom')) {
        e.stopPropagation();
        const employeeCard = e.target.parentElement;
        const employeeKey = employeeCard.getAttribute('data-employee-key');
        
        employeeCard.remove();
        
        if (employeeCards[employeeKey]) {
            employeeCards[employeeKey].style.display = 'flex';
        }
        
        updateSelect();
    }
});

updateSelect();