# Sistema de Citas Gubernamentales

Un sistema completo para la gestión de citas en instituciones gubernamentales dominicanas, desarrollado con Next.js y MySQL.

## 🚀 Características

- ✅ **Sistema de autenticación** completo (registro y login)
- ✅ **Gestión de citas** con estados y validaciones
- ✅ **Base de datos MySQL** completamente funcional
- ✅ **APIs REST** para todas las operaciones
- ✅ **Instituciones y servicios** dinámicos desde BD
- ✅ **Puntos GOB** con geolocalización
- ✅ **Sistema de soporte** con tickets
- ✅ **Perfiles de usuario** con historial de citas
- ✅ **Panel administrativo** (en desarrollo)
- ✅ **Diseño responsive** preservado del original

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Backend**: Next.js API Routes
- **Base de Datos**: MySQL (XAMPP)
- **Autenticación**: JWT + bcrypt
- **UI Components**: PrimeReact, Material-UI
- **Validaciones**: Custom validators
- **Estado**: React Hooks personalizados

## 📋 Requisitos Previos

- Node.js 18+ 
- XAMPP con MySQL
- phpMyAdmin (incluido en XAMPP)

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone [url-del-repositorio]
cd s-gob-2025
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar XAMPP
1. Inicia XAMPP Control Panel
2. Activa **Apache** y **MySQL**
3. Abre phpMyAdmin: http://localhost/phpmyadmin

### 4. Crear la base de datos
1. En phpMyAdmin, crea una nueva base de datos llamada `citas_gob`
2. Importa el archivo `citas_gob_schema.sql` que está en la raíz del proyecto
3. O ejecuta el SQL completo en la pestaña SQL

### 5. Configurar variables de entorno
El archivo `.env.local` ya está configurado con los valores por defecto de XAMPP:

```env
# Configuración de Base de Datos MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=citas_gob

# JWT Secret (cámbialo en producción)
JWT_SECRET=tu_jwt_secret_super_seguro_aqui_cambialo
```

### 6. Verificar conexión
```bash
npm run db:check
```

### 7. Inicializar datos de ejemplo
```bash
npm run setup
```

O visita: http://localhost:3000/setup

### 8. Ejecutar el proyecto
```bash
npm run dev
```

El proyecto estará disponible en: http://localhost:3000

## 🎯 Usuarios de Prueba

Después de ejecutar `npm run setup`, tendrás acceso a:

### Administrador del Sistema
- **Email**: admin@citas.gob.do
- **Contraseña**: admin123

### Usuario Regular
- **Email**: juan.perez@email.com
- **Cédula**: 402-1234567-8
- **Contraseña**: usuario123

## 📱 Funcionalidades Principales

### Para Ciudadanos
- ✅ Registro de cuenta con validación de cédula dominicana
- ✅ Login con email o cédula
- ✅ Búsqueda de servicios por institución
- ✅ Agendamiento de citas con validación de horarios
- ✅ Ver historial de citas
- ✅ Cancelar citas activas
- ✅ Calificar servicios recibidos
- ✅ Sistema de tickets de soporte

### Para Administradores
- ✅ Gestión completa de instituciones
- ✅ Administración de servicios
- ✅ Control de puntos GOB
- ✅ Manejo de tickets de soporte
- ✅ Reportes y estadísticas (próximamente)

## 🗂️ Estructura de la Base de Datos

### Tablas Principales
- `usuarios` - Ciudadanos registrados
- `instituciones` - Organismos gubernamentales  
- `servicios` - Trámites disponibles
- `puntos_gob` - Ubicaciones físicas
- `citas` - Agendamientos
- `tickets_soporte` - Sistema de ayuda
- `administradores` - Personal del sistema

### Relaciones Clave
- Una **institución** puede operar en múltiples **puntos GOB**
- Un **punto GOB** puede albergar múltiples **instituciones**
- Cada **servicio** pertenece a una **institución**
- Las **citas** relacionan usuarios, servicios y puntos GOB

## 📡 APIs Disponibles

### Autenticación
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar usuario

### Citas
- `GET /api/citas` - Obtener citas del usuario
- `POST /api/citas` - Crear nueva cita
- `PUT /api/citas/[id]` - Cancelar o calificar cita

### Datos del Sistema
- `GET /api/instituciones` - Listar instituciones
- `GET /api/servicios` - Listar servicios (filtrable)
- `GET /api/puntos-gob` - Listar puntos GOB

### Soporte
- `GET /api/soporte` - Tickets del usuario
- `POST /api/soporte` - Crear ticket

### Setup
- `GET /api/setup` - Verificar estado de la BD
- `POST /api/setup` - Inicializar datos

## 🔒 Seguridad Implementada

- ✅ **Autenticación JWT** con tokens seguros
- ✅ **Hash de contraseñas** con bcrypt
- ✅ **Validación de datos** en frontend y backend
- ✅ **Sanitización de entradas** contra XSS
- ✅ **Verificación de permisos** por endpoint
- ✅ **Validación de horarios** y conflictos
- ✅ **Limits de citas** por usuario

## 🎨 Diseño UI/UX

El diseño original ha sido **completamente preservado**:
- ✅ Todas las pantallas mantienen su apariencia
- ✅ Componentes y estilos originales intactos
- ✅ Responsividad preservada
- ✅ Colores y tipografías originales
- ✅ Animaciones y transiciones mantenidas

## 📊 Datos Incluidos

El sistema viene pre-cargado con:

### Instituciones
- Junta Central Electoral (JCE)
- Dirección General de Pasaportes
- Ministerio de Salud Pública
- Procuraduría General de la República

### Puntos GOB
- Punto GOB Sambil (Santo Domingo)
- Punto GOB Megacentro (Santo Domingo)  
- Punto GOB Santiago

### Servicios
- Renovación de Cédula
- Primera Cédula
- Pasaporte Ordinario
- Renovación de Pasaporte
- Certificado de Salud

## 🛠️ Comandos Útiles

```bash
# Verificar conexión a BD
npm run db:check

# Inicializar datos de ejemplo
npm run setup

# Modo desarrollo
npm run dev

# Construcción para producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint
```

## 📝 Próximas Características

- 🔄 Panel administrativo completo
- 🔄 Notificaciones por email
- 🔄 Reportes y dashboards
- 🔄 App móvil
- 🔄 Integración con APIs gubernamentales
- 🔄 Sistema de pagos en línea
- 🔄 Recordatorios automáticos

## 🐛 Resolución de Problemas

### Error de conexión a MySQL
1. Verifica que XAMPP esté ejecutándose
2. Confirma que MySQL esté activo en XAMPP
3. Revisa las credenciales en `.env.local`
4. Asegúrate de que la BD `citas_gob` existe

### Error de tablas faltantes
1. Importa `citas_gob_schema.sql` en phpMyAdmin
2. Ejecuta el script completo desde la pestaña SQL

### Error de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de permisos JWT
1. Cambia el `JWT_SECRET` en `.env.local`
2. Reinicia el servidor de desarrollo

## 📞 Soporte

Para reportar problemas o solicitar ayuda:
1. Usa el sistema de tickets interno
2. Crea un issue en el repositorio
3. Contacta al equipo de desarrollo

---

**Desarrollado para el Gobierno Dominicano**  
Sistema moderno, seguro y eficiente para la gestión de citas gubernamentales.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
