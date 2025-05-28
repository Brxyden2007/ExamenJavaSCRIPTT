class kanbanClass extends HTMLElement {
    constructor() {
        super();
    }
}

this.innerHTML; `
    <style>
        <div class="contenedor">
            <div class="card">
                <h1 class="title" style="font-size: 26px; margin-top: -30px; text-align: center;">Tabla de Pendientes</h1>
                <p style="text-align: center; font-size: 14px;">Aquí tienes tus tareas pendientes:</p>
                <button class="button" style="cursor: pointer; height: 30px; margin-left: 60px;">Eliminar tarea</button>
            </div>  
            <div class="card">
                <h1 class="title" style="font-size: 22px; margin-top: -30px; text-align: center;">Tabla de En progreso</h1>
                <p style="text-align: center; font-size: 14px;">Aquí tienes tus tareas en progreso:</p>
                <button class="button" style="cursor: pointer; height: 30px; margin-left: 60px;">Eliminar tarea</button>
            </div>
            <div class="card">
                <h1 class="title" style="font-size: 22px; margin-top: -30px; text-align: center;">Tabla de Completados</h1>
                <p style="text-align: center; font-size: 12.5px;">Aquí tienes tus tareas completadas:</p>
                <button class="button" style="cursor: pointer; height: 30px; margin-left: 60px;">Eliminar tarea</button>
            </div>
        </div>
    </style>
`;

customElements.define('kanban-class', kanbanClass);