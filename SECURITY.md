# Política de Seguridad

## 🔒 Versiones Soportadas

Este proyecto educativo está en desarrollo activo. Mantenemos las siguientes versiones:

| Versión | Soportada          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| develop | :white_check_mark: |
| < 1.0   | :x:                |

---

## 🐛 Reportar una Vulnerabilidad

La seguridad de nuestros estudiantes y contribuidores es nuestra prioridad. Si descubres una vulnerabilidad de seguridad en el bootcamp, por favor repórtala de manera responsable.

### ¿Qué es una Vulnerabilidad de Seguridad?

En el contexto de este bootcamp educativo, consideramos vulnerabilidades:

#### 🚨 Críticas

- Exposición de credenciales o claves API en el código
- Inyección de código (XSS, SQL injection) en ejemplos
- Configuraciones inseguras que puedan ser copiadas por estudiantes
- Enlaces maliciosos o recursos comprometidos
- Dependencias con vulnerabilidades conocidas

#### ⚠️ Moderadas

- Prácticas de código inseguras en ejemplos
- Falta de validación de inputs en proyectos de ejemplo
- Uso de APIs o servicios sin HTTPS
- Almacenamiento inseguro de datos sensibles

#### ℹ️ Informativas

- Mejoras en la enseñanza de seguridad
- Sugerencias de mejores prácticas
- Actualizaciones de documentación de seguridad

---

## 📧 Cómo Reportar

### Opción 1: Email Privado (Preferido para vulnerabilidades críticas)

Envía un email a: **[security@ejemplo.com](mailto:security@ejemplo.com)**

**Incluye:**
- Descripción de la vulnerabilidad
- Pasos para reproducirla
- Impacto potencial
- Ubicación en el código (archivo, línea)
- Tu sugerencia de solución (opcional)

### Opción 2: GitHub Security Advisory (Para vulnerabilidades moderadas)

1. Ve a la pestaña "Security" del repositorio
2. Click en "Report a vulnerability"
3. Completa el formulario

### Opción 3: Issue Privado

Para problemas de seguridad menores:
- Crea un issue con la etiqueta `security`
- **NO incluyas detalles sensibles** en el título
- Menciona `@mantenedores` para atención inmediata

---

## ⏱️ Tiempo de Respuesta

| Severidad | Tiempo de Respuesta | Tiempo de Resolución |
| --------- | ------------------- | -------------------- |
| Crítica   | 24 horas            | 48-72 horas          |
| Moderada  | 48 horas            | 1-2 semanas          |
| Baja      | 1 semana            | Próximo release      |

---

## 🔄 Proceso de Manejo

1. **Acuse de Recibo**
   - Confirmaremos la recepción en el tiempo establecido
   - Asignaremos un identificador de seguimiento

2. **Evaluación**
   - Verificaremos y reproduciremos la vulnerabilidad
   - Evaluaremos el impacto y severidad

3. **Desarrollo de Fix**
   - Crearemos un fix en una rama privada
   - Probaremos la solución

4. **Divulgación**
   - Coordinaremos la divulgación contigo
   - Publicaremos un Security Advisory
   - Actualizaremos el código

5. **Reconocimiento**
   - Te acreditaremos en el CHANGELOG (si lo deseas)
   - Incluiremos tu nombre en el Security Advisory

---

## 🏆 Programa de Reconocimiento

Aunque este es un proyecto educativo sin recompensas monetarias, reconocemos públicamente a quienes reportan vulnerabilidades:

### Hall of Fame

Los contribuidores de seguridad serán listados en:
- `SECURITY_HALL_OF_FAME.md`
- Release notes
- README principal

### Niveles de Reconocimiento

- 🥇 **Gold**: Vulnerabilidades críticas
- 🥈 **Silver**: Vulnerabilidades moderadas
- 🥉 **Bronze**: Vulnerabilidades menores o mejoras

---

## 🛡️ Mejores Prácticas de Seguridad para Estudiantes

### Al Trabajar con el Bootcamp

1. **Variables de Entorno**
   ```javascript
   // ❌ NUNCA hagas esto
   const API_KEY = 'mi-clave-secreta-123';

   // ✅ Usa variables de entorno
   const API_KEY = process.env.API_KEY;
   ```

2. **No Commitear Secretos**
   - Usa `.env` para credenciales
   - Verifica `.gitignore` incluya `.env`
   - Proporciona `.env.example` sin valores reales

3. **Validación de Inputs**
   ```javascript
   // ❌ Vulnerable a XSS
   element.innerHTML = userInput;

   // ✅ Escapar contenido del usuario
   element.textContent = userInput;
   ```

4. **HTTPS Siempre**
   ```javascript
   // ❌ Conexión insegura
   fetch('http://api.example.com/data');

   // ✅ Conexión segura
   fetch('https://api.example.com/data');
   ```

5. **Sanitizar Datos**
   ```javascript
   // ✅ Validar antes de usar
   const isValidEmail = (email) => {
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
   };
   ```

---

## 📚 Recursos de Seguridad

### Para Aprender

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [JavaScript Security Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)

### Herramientas

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Auditar dependencias
- [Snyk](https://snyk.io/) - Escaneo de vulnerabilidades
- [ESLint Security Plugin](https://github.com/nodesecurity/eslint-plugin-security)

---

## 🔐 Dependencias

Mantenemos actualizadas las dependencias del proyecto:

```bash
# Auditar dependencias (usar pnpm o yarn)
pnpm audit
yarn audit

# Actualizar dependencias con vulnerabilidades
pnpm update
yarn upgrade
```

**Frecuencia de Revisión**: Mensual o cuando se descubra una vulnerabilidad crítica

---

## ⚖️ Divulgación Responsable

Solicitamos:

- **No divulgar públicamente** la vulnerabilidad hasta que hayamos publicado un fix
- **Dar tiempo razonable** para resolver el problema
- **No explotar** la vulnerabilidad más allá de lo necesario para demostrarla

Nos comprometemos a:

- **Responder rápidamente** a tu reporte
- **Mantener comunicación** sobre el progreso
- **Acreditar tu descubrimiento** (si lo deseas)
- **Publicar un fix** en el tiempo acordado

---

## 📞 Contacto de Seguridad

- **Email Principal**: [security@ejemplo.com](mailto:security@ejemplo.com)
- **Email Alternativo**: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- **PGP Key**: [Disponible aquí](link-to-pgp-key) (opcional)

---

## 📋 Checklist para Reportar

Antes de enviar tu reporte, asegúrate de incluir:

- [ ] Descripción clara de la vulnerabilidad
- [ ] Pasos detallados para reproducirla
- [ ] Impacto potencial
- [ ] Versión afectada
- [ ] Archivos/líneas específicas
- [ ] Captura de pantalla o video (si aplica)
- [ ] Sugerencia de fix (opcional)
- [ ] Tu información de contacto

---

## 🙏 Agradecimientos

Agradecemos a todos los investigadores de seguridad y contribuidores que nos ayudan a mantener este proyecto seguro para nuestra comunidad de estudiantes.

---

*Última actualización: Diciembre 2025*
*Versión: 1.0*

**Para consultas urgentes de seguridad, contacta: [security@ejemplo.com](mailto:security@ejemplo.com)**
