
// Método para guardar un elemento en localStorage
export function guardarEnLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Método para obtener un elemento de localStorage
export function obtenerDeLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export function obtenerDeLocalStorageByProperty(key, property) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item)[property] : null;
}

// Método para eliminar un elemento de localStorage
export function eliminarDeLocalStorage(key) {
    localStorage.removeItem(key);
}

// Método para limpiar todo el localStorage
export function limpiarLocalStorage() {
    localStorage.clear();
}
  