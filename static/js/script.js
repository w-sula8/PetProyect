// Datos de ejemplo
const adoptionRequests = [
  {
    name: 'Juan Pérez',
    pet: 'Labrador Retriever',
    status: 'Pendiente'
  },
  {
    name: 'María Gómez',
    pet: 'Gato Persa',
    status: 'Pendiente'
  },
  {
    name: 'Miguel Hernández',
    pet: 'Husky Siberiano',
    status: 'Pendiente'
  }
];

// Función de búsqueda
function searchAdoptionRequests() {
  const searchInput = document.querySelector('.search-input');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredRequests = adoptionRequests.filter(request =>
    request.name.toLowerCase().includes(searchTerm)
  );

  renderAdoptionCards(filteredRequests);
}

// Agregar evento de búsqueda
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', searchAdoptionRequests);

// Función para crear y mostrar las tarjetas
function renderAdoptionCards(filteredRequests) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  filteredRequests.forEach(request => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const nameElement = document.createElement('h2');
    nameElement.textContent = request.name;

    const petElement = document.createElement('p');
    petElement.textContent = `Mascota: ${request.pet}`;

    const statusElement = document.createElement('p');
    statusElement.textContent = `Estado: ${request.status}`;

    cardHeader.appendChild(nameElement);
    cardHeader.appendChild(petElement);
    cardHeader.appendChild(statusElement);

    const cardActions = document.createElement('div');
    cardActions.classList.add('card-actions');

    if (request.status === 'Pendiente') {
      const approveButton = document.createElement('button');
      approveButton.textContent = 'Aprobar';
      approveButton.classList.add('approve');
      approveButton.addEventListener('click', () => approveRequest(request));
      cardActions.appendChild(approveButton);

      const rejectButton = document.createElement('button');
      rejectButton.textContent = 'Rechazar';
      rejectButton.classList.add('reject');
      rejectButton.addEventListener('click', () => rejectRequest(request));
      cardActions.appendChild(rejectButton);
    }

    card.appendChild(cardHeader);
    card.appendChild(cardActions);

    gridContainer.appendChild(card);
  });
}

// Funciones de aprobación y rechazo
function approveRequest(request) {
  request.status = 'Aprobada';
  renderAdoptionCards(adoptionRequests);
}

function rejectRequest(request) {
  request.status = 'Rechazada';
  renderAdoptionCards(adoptionRequests);
}

// Renderizar las tarjetas inicialmente
renderAdoptionCards(adoptionRequests);