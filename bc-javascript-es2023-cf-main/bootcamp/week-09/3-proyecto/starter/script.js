// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================

"use strict";

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

const DOMAIN_NAME = "Restaurante";
const VALUE_LABEL = "platillos";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Pizza Margarita", price: 25, category: "Italiana", available: true, calories: 800, chef: "Carlos" },
  { id: 2, name: "Hamburguesa Clásica", price: 18, category: "Americana", available: true, calories: 950, chef: "María" },
  { id: 3, name: "Sushi Roll", price: 30, category: "Japonesa", available: false, calories: 400, chef: "Kenji", spicy: true },
  { id: 4, name: "Ensalada César", price: 15, category: "Saludable", available: true, calories: 350, chef: "Laura" },
  { id: 5, name: "Taco al Pastor", price: 12, category: "Mexicana", available: true, calories: 600, chef: "José" },
  { id: 6, name: "Paella Valenciana", price: 40, category: "Española", available: false, calories: 1200, chef: "Ana", seafood: true }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);
  const total = values.reduce((acc, v) => acc + v, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de "${numericKey}":`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(2)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: $${item.price} | Disponible: ${item.available ? "Sí" : "No"}`);
  if (Object.hasOwn(item, "spicy")) {
    console.log(`Picante: ${item.spicy ? "Sí" : "No"}`);
  }
  if (Object.hasOwn(item, "seafood")) {
    console.log(`Mariscos: ${item.seafood ? "Sí" : "No"}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => items.filter(item => item.available);

const findById = (id) => items.find(item => item.id === id);

const addCalculatedProp = () => items.map(item => ({
  ...item,
  priceWithTax: +(item.price * 1.19).toFixed(2)
}));

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total de ${VALUE_LABEL}: ${items.length}`);
  console.log(`Disponibles: ${getAvailable().length}`);

  calculateStats("price");

  console.log("\n📋 Listado ordenado por precio:");
  sortByNumericProp(true).forEach(item => console.log(`- ${item.name}: $${item.price}`));

  const maxItem = sortByNumericProp(false)[0];
  const minItem = sortByNumericProp(true)[0];
  console.log(`\nMás caro: ${maxItem.name} ($${maxItem.price})`);
  console.log(`Más barato: ${minItem.name} ($${minItem.price})`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("price");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

console.log("\n🔄 Ejemplo de actualización inmutable:");
console.log(updateItem(items[0], { price: 28, available: false }));

console.log("\n📋 Elementos disponibles:");
console.log(getAvailable());

console.log("\n🔍 Buscar por id:");
console.log(findById(3));
console.log(findById(99));

console.log("\n➕ Agregar propiedad calculada:");
console.log(addCalculatedProp());

console.log("\n📊 Ordenar por precio:");
console.log(sortByNumericProp());

buildReport();

