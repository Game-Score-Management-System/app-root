# Sistema de Gestión de Puntuaciones de Juegos 🎮

Game Score Manager es una plataforma web desarrollada en una arquitectura **fullstack** para gestionar las puntuaciones de jugadores de un videojuego en línea. Permite que los jugadores se registren, inicien sesión, y visualicen sus puntuaciones y clasificaciones globales en tiempo real. Los administradores pueden gestionar usuarios y puntuaciones a través de un panel dedicado.

![image](https://github.com/user-attachments/assets/71c7303b-5957-40fd-95fe-2aa458bc483d)
![image](https://github.com/user-attachments/assets/7a4553c1-5254-49aa-90a4-47f861fbfad3)
![image](https://github.com/user-attachments/assets/631c171f-2bc7-4435-bf96-95fdb4abfa93)
![image](https://github.com/user-attachments/assets/9650fb8d-863a-4e53-a9c7-a4c6b76e478b)
![image](https://github.com/user-attachments/assets/cf64ffb6-7f4c-47ab-b528-794489d6aeb9)

## 📝 Descripción

Esta aplicación está construida con un enfoque de microservicios para maximizar la escalabilidad y el rendimiento. Utiliza **Next.js 14** en el frontend para aprovechar su SSR y funcionalidades de última generación, y **NestJS** en el backend junto con **gRPC** para comunicaciones rápidas y seguras entre servicios.

El backend almacena las puntuaciones en **MongoDB** para una gestión rápida de datos no relacionales, y los datos de los usuarios en **PostgreSQL** gestionados con **Prisma** ORM, proporcionando consistencia y seguridad en los datos de autenticación y perfil.

## 🚀 Características Principales

### Para Jugadores:

- Registro y autenticación con JWT y OAuth2 (Google, GitHub).
- Visualización de sus puntuaciones y ranking global.
- Perfil de usuario editable con estadísticas de juego.

### Para Administradores:

- Panel de administración para gestionar usuarios y puntuaciones.
- Opciones para eliminar o bloquear usuarios y puntuaciones erróneas.

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - [Next.js 14](https://nextjs.org/): Framework de React para renderizado del lado del servidor.
  - [Tailwind CSS](https://tailwindcss.com/) y [Next UI](https://nextui.org/): Diseño de UI y estilización responsiva.
- **Backend**:
  - [NestJS](https://nestjs.com/): Framework para Node.js orientado a microservicios.
  - **gRPC** y **Nest Microservices**: Para comunicación eficiente entre servicios.
  - **MongoDB** y **Mongoose**: Base de datos NoSQL para puntuaciones.
  - **PostgreSQL** y [Prisma ORM](https://www.prisma.io/): Base de datos SQL para datos de usuarios.
  - **Docker**: Contenerización de servicios para facilitar despliegue y escalabilidad.

## Instrucciones de Submódulos

### Clonando el Repositorio con Submódulos

Para clonar el repositorio junto con sus submódulos, utiliza el siguiente comando:

```sh
git clone --recurse-submodules <repository_url>
```

### Inicializando y Actualizando Submódulos

Si ya has clonado el repositorio sin submódulos, puedes inicializarlos y actualizarlos con:

```sh
git submodule update --init --recursive
```

### Obteniendo Actualizaciones para Submódulos

Para obtener actualizaciones de los submódulos, utiliza:

```sh
git submodule update --remote --merge
```

## Ejecutando Microservicios

### Prerrequisitos

Asegúrate de tener Docker y Docker Compose instalados en tu máquina.

### Iniciando Microservicios

Para iniciar todos los microservicios, navega al directorio raíz y ejecuta:

```sh
docker-compose up -d --build
```

### Deteniendo Microservicios

Para detener los microservicios en ejecución, utiliza:

```sh
docker-compose down -v
```

### Actualizando Microservicios

Para actualizar los microservicios, obtén los últimos cambios del repositorio y reconstruye las imágenes de Docker:

```sh
git pull
git submodule update --remote --merge
docker-compose up -d --build
```

Para más información detallada, consulta la documentación individual de cada microservicio.
