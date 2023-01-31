const template = document.createElement('template');
template.innerHTML = `
<style>
.user-card{
    
    font-family:'Arial',sans-serif;
    background:#f4f4f4;
    width: 98%;
    display:grid;
    grid-template-columns:1fr 8fr;
    grid-gap: 10px;
    margin-bottom:15px;
   
     border-top: blue 5px solid;
 
    margin-top:3%;
    margin-left:1%;
}
 

h3{
    color:blue;
    text-transform:uppercase ;
}

.user-card img{
          width:100%;
        
}

.user-card button{
    cursor: pointer;
    background:blue;
    color:#fff;
    border: 0;
    border-radius: 5px;
    padding:5px 10px;
}

</style>
<div class ="user-card">
<img />
<div>
<h3></h3>
<div class="info">
    <p><slot name="info"></p>
    <p><slot name="info"></p>
</div>
<button id="toggle-info">Show Info</button>
</div>
</div>
`;
class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = false;

        // Crea un Shadow Root
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Asignar valores a los atributos de la tarjeta de usuario
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        // Asignar estilo "display: none" al elemento "info"
        this.shadowRoot.querySelector('.info').style.display = 'none';
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        // Seleccionar el elemento de información y el botón de alternancia en el Shadow Root
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        // Alternar la visibilidad de la información y actualizar el texto del botón
        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }

    connectedCallback() {
        // Agregar un controlador de eventos al botón de alternancia
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        // Eliminar el controlador de eventos del botón de alternancia
        this.shadowRoot.querySelector('#toggle-info').removeEventListener;
    }
}

// Registrar la tarjeta de usuario personalizada
window.customElements.define('user-card', UserCard);