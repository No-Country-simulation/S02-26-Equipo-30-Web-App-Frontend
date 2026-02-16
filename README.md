# Horsetrust - Web App Frontend

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Architecture](https://img.shields.io/badge/Architecture-Screaming%20%2F%20FSD-success)

Horsetrust es una plataforma moderna para la gestión y mercado de caballos, construida con React y Vite, diseñada para ser escalable, mantenible y performante.

## 🚀 Tecnologías Principales

- **React 19**: Biblioteca para la interfaz de usuario.
- **Vite 7**: Herramienta de construcción ultrarrápida.
- **ESLint**: Mantenedor de la calidad y estilo del código.

## 🏗️ Arquitectura

El proyecto sigue una **Screaming Architecture** basada en los principios de **Feature-Sliced Design (FSD)**. La estructura del código "grita" las funcionalidades de negocio en lugar de los detalles técnicos.

### Estructura de Carpetas

- `src/app/`: Configuración global, estilos base y proveedores.
- `src/features/`: Módulos de negocio independientes (auth, horse, marketplace, etc.).
- `src/shared/`: Componentes, hooks y utilidades reutilizables en toda la app.

## 🛠️ Instalación y Uso

### Requisitos Previos

- [Node.js](https://nodejs.org/) (versión recomendada LTS)
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <URL-del-repositorio>
   cd S02-26-Equipo-30-Web-App-Frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🧹 Calidad de Código

Para ejecutar el linter y asegurar que se sigan las reglas establecidas:
```bash
npm run lint
```
