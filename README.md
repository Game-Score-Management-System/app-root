# Sistema de Gestión de Puntuaciones de Juegos

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
docker-compose up -d
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
docker-compose build
docker-compose up
```

Para más información detallada, consulta la documentación individual de cada microservicio.
