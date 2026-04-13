// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "Juan perez"         // TODO: nombre del elemento (string)
const elementStatus = "Active"        // TODO: estado actual (string: "active", "inactive", etc.)
const elementValue =   7       // TODO: valor numérico para clasificar (ocupación, stock, puntaje…)
const elementType =  "paciente"       // TODO: tipo o categoría (string)
const elementInfo =  {age: 29,
  diagnosis: "ansiedad generalizada",
  lastSession: "2026-04-01",
  therapist: "Dr Esteban" };      // TODO: objeto con información adicional opcional (puede ser null)

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
// let classification;
// if (elementValue >= ...) {
//   classification = "...";
// } else if (elementValue >= ...) {
//   classification = "...";
// } else {
//   classification = "...";
// }

let classification = "Sin clasificar"; // TODO: implementar if/else if/else
    if (elementValue >= 8) {
  classification = "Progreso alto";          // paciente con gran avance
} else if (elementValue >= 5) {
  classification = "Progreso medio";         // paciente en proceso estable
} else {
  classification = "Progreso bajo";          // paciente necesita más apoyo
}

console.log("Clasificación del paciente:", classification);

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// SECCIÓN 3: Estado binario con operador ternario

const statusLabel = elementStatus === "active" ? "Activo en la plataforma" : "Inactivo en la plataforma";

console.log("Estado del paciente:", statusLabel);



// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

// SECCIÓN 4: Tipo con switch

let typeLabel = "Sin tipo";

switch (elementType) {
  case "paciente":
    typeLabel = "Usuario en tratamiento";
    break;
  case "terapeuta":
    typeLabel = "Profesional de la salud";
    break;
  case "sesión":
    typeLabel = "Sesión de terapia";
    break;
  case "recurso":
    typeLabel = "Material de apoyo";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

console.log("Tipo del elemento:", typeLabel);


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

// SECCIÓN 5: Valor por defecto con ??

const displayName = elementName ?? "Sin nombre";  
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

console.log("Nombre para mostrar:", displayName);
console.log("Detalle adicional:", infoDetail);


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

// SECCIÓN 6: Acceso seguro con ?.

const safeProperty = elementInfo?.diagnosis ?? "Diagnóstico no especificado";

console.log("Acceso seguro a propiedad:", safeProperty);


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
// TODO: console.log(`Nombre: ${displayName}`);
// TODO: console.log(`Estado: ${statusLabel}`);
// TODO: console.log(`Clasificación: ${classification}`);
// TODO: console.log(`Tipo: ${typeLabel}`);
// TODO: console.log(`Detalle: ${infoDetail}`);
// TODO: console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
