// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

const SESSION_PRICE = 50000;
const MAX_DAILY_SESSIONS = 8;
const MONTHLY_SUBSCRIPTION = 120000;
const EMERGENCY_SESSION = 30000; 

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);

// Cantidad de sesiones reservadas
const bookedSessions = 5;

// Ingresos por sesiones psicológicas
const totalSessionIncome = SESSION_PRICE * bookedSessions;
console.log("Ingresos por sesiones:", totalSessionIncome);

// Sesiones disponibles hoy
const remainingSessions = MAX_DAILY_SESSIONS - bookedSessions;
console.log("Sesiones disponibles hoy:", remainingSessions);

// Usuarios con suscripción mensual
const subscribedUsers = 10;
const subscriptionIncome = MONTHLY_SUBSCRIPTION * subscribedUsers;
console.log("Ingresos por suscripción:", subscriptionIncome);

// Atención urgente solicitada
const emergencyUsers = 2;
const emergencyIncome = EMERGENCY_SESSION * emergencyUsers;
console.log("Costo atención urgente:", emergencyIncome);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);


// Ingreso acumulado de la plataforma
let totalIncome = 0;

console.log("Ingreso inicial:", totalIncome);

// Se agregan ingresos por sesiones psicológicas
totalIncome += SESSION_PRICE * 3;
console.log("Después de agregar sesiones:", totalIncome);

// Se agregan suscripciones mensuales
totalIncome += MONTHLY_SUBSCRIPTION * 2;
console.log("Después de agregar suscripciones:", totalIncome);

// Se resta un reembolso de una sesión
totalIncome -= SESSION_PRICE;
console.log("Después de reembolso:", totalIncome);

// Se aplica aumento del 10%
totalIncome *= 1.10;
console.log("Después del aumento del 10%:", totalIncome);

// Se divide entre dos áreas del sistema
totalIncome /= 2;
console.log("Ingreso dividido entre áreas:", totalIncome);

console.log("");

const isStandardSubscription = MONTHLY_SUBSCRIPTION === 120000;
console.log("¿La suscripción es estándar?", isStandardSubscription);

console.log("");


// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);


// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Número de sesiones que quiere reservar un usuario
const requestedSessions = 3;

// Validar si las sesiones solicitadas son exactamente el máximo permitido
const isMaxSessions = requestedSessions === MAX_DAILY_SESSIONS;
console.log("¿Solicitó el máximo de sesiones?", isMaxSessions);

// Validar si todavía hay sesiones disponibles
const sessionsAvailable = requestedSessions < MAX_DAILY_SESSIONS;
console.log("¿Hay sesiones disponibles?", sessionsAvailable);

// Validar si el precio de la sesión es mayor a 40000
const isSessionHighCost = SESSION_PRICE > 40000;
console.log("¿La sesión cuesta más de 40000?", isSessionHighCost);

console.log("=== Condiciones lógicas ===");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);


// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Usuario quiere reservar sesiones

// Usuario tiene suscripción
const hasSubscription = true;

// Validar si puede reservar sesiones (tiene suscripción Y hay sesiones disponibles)
const canBookSession = hasSubscription && requestedSessions <= MAX_DAILY_SESSIONS;
console.log("¿Puede reservar sesión?", canBookSession);

// Validar si puede usar atención urgente (suscripción O paga sesión urgente)
const needsEmergencyHelp = hasSubscription || EMERGENCY_SESSION > 0;
console.log("¿Puede acceder a atención urgente?", needsEmergencyHelp);

// Validar si el usuario NO tiene suscripción
const noSubscription = !hasSubscription;
console.log("¿El usuario no tiene suscripción?", noSubscription);

console.log(""); 

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("=== Resumen ===");

// Resumen de ingresos
console.log("Ingresos totales por sesión (3 sesiones):", SESSION_PRICE * 3);
console.log("Ingresos totales por suscripciones (2 usuarios):", MONTHLY_SUBSCRIPTION * 2);
console.log("Costo de atención urgente (2 usuarios):", EMERGENCY_SESSION * 2);

// Total acumulado de la plataforma (de la Sección 3)
console.log("Ingreso acumulado total:", totalIncome);

// Estado de la suscripción
console.log("¿La suscripción es estándar?", isStandardSubscription);

// Disponibilidad de sesiones
console.log("Máximo de sesiones diarias:", MAX_DAILY_SESSIONS);
console.log("Sesiones solicitadas por un usuario:", requestedSessions);
console.log("¿Solicitó el máximo de sesiones?", requestedSessions === MAX_DAILY_SESSIONS);

// Validaciones lógicas
console.log("¿Puede reservar sesión?", hasSubscription && requestedSessions <= MAX_DAILY_SESSIONS);
console.log("¿Puede acceder a atención urgente?", hasSubscription || EMERGENCY_SESSION > 0);
console.log("¿El usuario no tiene suscripción?", !hasSubscription);

console.log("=== Fin del resumen ===");  