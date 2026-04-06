// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Mi Inventario"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "elementos";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  { id: 1, name: "Pizza Margarita", price: 25, category: "Italiana", available: true, calories: 800, chef: "Carlos" },
  { id: 2, name: "Hamburguesa Clásica", price: 18, category: "Americana", available: true, calories: 950, chef: "María" },
  { id: 3, name: "Sushi Roll", price: 30, category: "Japonesa", available: false, calories: 400, chef: "Kenji" },
  { id: 4, name: "Ensalada César", price: 15, category: "Saludable", available: true, calories: 350, chef: "Laura" },
  { id: 5, name: "Taco al Pastor", price: 12, category: "Mexicana", available: true, calories: 600, chef: "José" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  const removed = items.pop();
  if (removed) {
    console.log(`Eliminado: ${removed.name}`);
  }
  return removed;
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  const removed = items.splice(index, 1)[0];
  if (removed) {
    console.log(`Eliminado por índice: ${removed.name}`);
  }
  return removed;
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  return items.filter(item => item.available === true);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  return items.find(item => item.name === name);
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${VALUE_LABEL}: ${item.price ?? item.value} — Disponible: ${item.available ? "Sí" : "No"}`;
};


// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Crear un nuevo elemento y agregarlo
addItem({ id: 6, name: "Nuevo Platillo", price: 20, category: "Especial", available: true, calories: 500, chef: "Invitado" });

// Agregar un elemento prioritario
addPriorityItem({ id: 0, name: "Platillo VIP", price: 50, category: "Premium", available: true, calories: 700, chef: "Chef Estrella" });

// Eliminar un elemento del medio (ejemplo índice 2)
removeByIndex(2);

// Eliminar el último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar un elemento por nombre
const buscado = findByName("Pizza Margarita");
console.log(buscado ? `Encontrado: ${formatItem(buscado)}` : "No encontrado");

// Mostrar cuántos están activos
const activos = getActiveItems();
console.log(`Activos: ${activos.length} / ${items.length}`);

console.log("\n--- Snapshot inmutable ---\n");
const snapshot = [...items, { id: 99, name: "Extra Snapshot", price: 10, category: "Test", available: true }];
console.log("Snapshot creado sin modificar items originales:");
snapshot.forEach((item) => console.log(`  ${formatItem(item)}`));

console.log("\n--- Transformación con map ---\n");

// Array de nombres
const nombres = items.map(item => item.name);
console.log("Nombres:", nombres);

// Precios con descuento del 10%
const preciosConDescuento = items.map(item => +(item.price * 0.9).toFixed(2));
console.log("Precios con descuento:", preciosConDescuento);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
