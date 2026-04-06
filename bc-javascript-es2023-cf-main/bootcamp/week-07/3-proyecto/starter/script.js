// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Tu dominio asignado]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
// Ejemplo: const TAX_RATE = 0.19;
//          const CURRENCY = "USD";
//          const DOMAIN_NAME = "Mi Dominio";
const DOMAIN_NAME = "Plataforma de Salud Mental";
const VALUE_LABEL = "nivel de progreso"; // escala 1–10 // Ej: "precio", "cantidad", "duración"

// TODO: Define un array con al menos 5 elementos de tu dominio.
// Cada elemento debe ser un objeto con propiedades relevantes.
// Ejemplo (Biblioteca):
// const items = [
//   { id: 1, name: "El Quijote",  category: "clásico",    value: 15,  active: true },
//   { id: 2, name: "1984",        category: "distopía",   value: 12,  active: true },
//   ...
// ];
 //Array de pacientes:
const patients = [
  { id: 1, name: "Juan Pérez", category: "paciente", value: 7, active: true, therapist: "Dr. Esteban" },
  { id: 2, name: "María López", category: "paciente", value: 4, active: true, therapist: "Dra. Torres" },
  { id: 3, name: "Carlos Gómez", category: "paciente", value: 9, active: false, therapist: "Dr. Esteban" },
  { id: 4, name: "Ana Torres", category: "paciente", value: 6, active: true, therapist: "Dra. Ramírez" },
  { id: 5, name: "Luis Ramírez", category: "paciente", value: 3, active: false, therapist: "Dr. Esteban" }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// TODO: Implementa una arrow function que reciba un elemento
// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

const formatItem = (patient) => {
  return `🧑‍⚕️ ${patient.name} [${patient.category}] — ${VALUE_LABEL}: ${patient.value} — Activo: ${patient.active ? "Sí" : "No"}`;
};
  // TODO: Implementar usando template literals
  // 1. Incluir el nombre del elemento
  // 2. Incluir la categoría o tipo
  // 3. Incluir el valor numérico relevante
  // TODO: Expandir este template


// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// TODO: Implementa una función pura que calcule algún valor relevante
// del dominio a partir de parámetros numéricos.
// Debe ser una función pura: mismo input → siempre mismo output.
//
// Ejemplo (Biblioteca): calcular multa por días de retraso
// const calculateValue = (baseValue, factor) => baseValue * factor;
//
// Ejemplo (Farmacia): calcular total de compra con descuento
// const calculateValue = (price, quantity, discountPct = 0) =>
//   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

const calculateValue = (progressLevel, effortFactor = 1) => {
  // Función pura: mismo input → mismo output
  // Calcula un índice ajustado de progreso
  return +(progressLevel * effortFactor).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

const isValid = (patient) => {
  return patient.active === true;
}; 
// Ejemplos de uso:
console.log(isValid({ name: "Juan", active: true }));   // true
console.log(isValid({ name: "María", active: false })); // false

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// TODO: Implementa una función que use al menos un parámetro
// por defecto significativo para tu dominio.
//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;

const formatWithDefault = (value, label = VALUE_LABEL, currency = "USD") => {
  return currency
    ? `${label}: ${currency} ${value}`
    : `${label}: ${value}`;
};

// Ejemplos de uso:
console.log(formatWithDefault(100)); 
// 👉 "nivel de progreso: USD 100"

console.log(formatWithDefault(250, "Costo", "COP")); 
// 👉 "Costo: COP 250"

console.log(formatWithDefault(75, "Puntaje")); 
// 👉 "Puntaje: USD 75"

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

// TODO: Reemplaza este código de ejemplo con la implementación real

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    // TODO: Usa formatItem(item) para mostrar cada elemento
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    // TODO: Usa isValid(item) para contar los válidos
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    // TODO: Usa calculateValue() con las propiedades de tu item
    totalValue += calculateValue(item.value ?? 0);
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);
