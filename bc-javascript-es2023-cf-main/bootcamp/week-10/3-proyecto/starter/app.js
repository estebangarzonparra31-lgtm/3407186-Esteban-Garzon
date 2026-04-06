// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "Salud mental";
const VALUE_LABEL = "medicamentos";

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// TODO: Definir el array con MÍNIMO 6 objetos
// Requisitos:
// - Mínimo 5 propiedades por objeto (tipos mixtos)
// - Al menos 1 propiedad numérica (para calcular estadísticas)
// - Al menos 1 propiedad booleana (para filtrar activos/inactivos)
// - Al menos 1 propiedad OPCIONAL (no todos los objetos la tienen)
//
// Nota para el aprendiz — Adaptaciones por dominio:
// - Biblioteca:    { id, title, author, year, pages, available, notes? }
// - Farmacia:      { id, name, price, stock, laboratory, active, prescription? }
// - Gimnasio:      { id, name, memberType, fee, joinDate, active, plan? }
// - Restaurante:   { id, name, category, price, calories, available, allergens? }
// - Banco:         { id, owner, type, balance, rate, active, creditLimit? }

const items = [
  {
    id: 1,
    name: "Juan Pérez",
    age: 32,
    progressLevel: 7,          // numérica
    active: true,              // booleana
    category: "paciente",
    therapist: "Dr. Esteban",  // extra
  },
  {
    id: 2,
    name: "María López",
    age: 28,
    progressLevel: 4,
    active: true,
    category: "paciente",
    therapist: "Dra. Torres",
    notes: "Ansiedad leve",    // opcional
  },
  {
    id: 3,
    name: "Carlos Gómez",
    age: 40,
    progressLevel: 9,
    active: false,
    category: "paciente",
    therapist: "Dr. Esteban",
  },
  {
    id: 4,
    name: "Ana Torres",
    age: 35,
    progressLevel: 6,
    active: true,
    category: "paciente",
    therapist: "Dra. Ramírez",
  },
  {
    id: 5,
    name: "Luis Ramírez",
    age: 30,
    progressLevel: 3,
    active: false,
    category: "paciente",
    therapist: "Dr. Esteban",
    notes: "En seguimiento",   // opcional
  },
  {
    id: 6,
    name: "Sofía Martínez",
    age: 27,
    progressLevel: 8,
    active: true,
    category: "paciente",
    therapist: "Dra. Torres",
  }
];
  // TODO: Agregar al menos 3 objetos más (mínimo 6 en total)

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log(`❌ No se pueden agregar más de ${MAX_ITEMS} ${VALUE_LABEL}.`);
    return;
  }
  items.push(item);
  console.log(`✅ Agregado: [${item.id}] ${item.name}`);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  return items.filter(item => item.active);
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};


// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
  const values = items.map(i => i[field]).filter(v => typeof v === "number");

  const total = values.reduce((acc, v) => acc + v, 0);
  const avg = total / values.length;
  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max, avg, total };
};


// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  // Usamos template literals y padEnd para alinear columnas
  // Usamos ?? para propiedades opcionales
  return `[${String(item.id).padEnd(2)}] ${item.name.padEnd(15)} | Edad: ${String(item.age).padEnd(2)} | Progreso: ${item.progressLevel} | Activo: ${item.active ? "Sí" : "No"} | Terapeuta: ${item.therapist ?? "N/A"} ${item.notes ? "| Nota: " + item.notes : ""}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */
const buildReport = () => {
  console.log(`\n📊 Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(40));

  // 1. Listado completo
  console.log("\n📋 Listado de pacientes:");
  items.forEach(item => console.log(formatItem(item)));

  // 2. Activos vs inactivos
  const activeItems = getActive();
  console.log(`\n✅ Activos: ${activeItems.length} | ❌ Inactivos: ${items.length - activeItems.length}`);

  // 3. Estadísticas de progreso
  const stats = calculateStats("progressLevel");
  console.log(`\n📈 Estadísticas de progreso:`);
  console.log(`Min: ${stats.min}, Max: ${stats.max}, Promedio: ${stats.avg.toFixed(2)}, Total: ${stats.total}`);

  // 4. Propiedades del primer elemento
  console.log("\n🔍 Propiedades del primer paciente:");
  Object.entries(items[0]).forEach(([key, val]) => {
    console.log(`${key.padEnd(12)}: ${val}`);
  });

  // 5. Pie de reporte
  console.log("\nTotal de pacientes:", items.length);
  console.log("=".repeat(40));
};


// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado");
console.log("");

// Paso 2: Listar activos
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3: Filtrar por campo (ejemplo: pacientes atendidos por Dr. Esteban)
const filtered = filterByField("therapist", "Dr. Esteban");
console.log(`Filtro therapist=Dr. Esteban: ${filtered.length} resultados`);
filtered.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 4: Actualizar con spread (ejemplo: progreso del paciente id=2)
const updated = updateItem(2, { progressLevel: 6 });
console.log(`Actualizado id=2: progreso=${updated.find(i => i.id === 2)?.progressLevel}`);
console.log("");

// Paso 5: Estadísticas (ejemplo: sobre progressLevel)
const stats = calculateStats("progressLevel");
console.log(`Estadísticas (progressLevel): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)} total=${stats.total}`);
console.log("");

// Paso 6: Reporte completo
buildReport();

// Paso 7: Agregar un nuevo paciente