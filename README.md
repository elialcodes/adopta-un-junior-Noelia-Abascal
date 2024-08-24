# Adopta un Junior - Rol: Front-end

Proyecto para el proceso de selección de "Adopta un Junior" (2º edición), donde explico mis motivos para formar parte de los grupos de trabajo.

## Motivación
Mi nombre es Noelia Abascal, soy de Santander, tengo 46 años y... ¡he apostado por un cambio profesional!

Me licencié en Geografía allá por el año 2000 y, tras haber trabajado unos años de ello, cambié de sector y estuve más de 20 años trabajando en atención al cliente.
Considero estos años muy importantes porque me han dado una trayectoria profesional y personal muy valiosa, he tenido la SUERTE de conocer y trabajar con muchos clientes y tengo compañeros que se han hecho verdaderos amigos.
Peeeeeeero... necesitaba un cambio.

Soy madre de 2 adolescentes de 14 y 16 años y hace un año noté que tenía más tiempo para mi, así que era el momento para intentar cambiar de profesión. Como me gusta aprender, empecé a estudiar programación de forma autodidacta. Me gustó y me decidí a hacer un bootcamp de programación con Adalab, una empresa que ayuda a mujeres a cambiarse al sector Tech. 
Ahí aprendí los conocimientos que me faltaban y me acostumbré a trabajar en grupo. Compartir ideas, logros y también frustraciones me pareció de lo mejor del bootcamp.

Por eso me he inscrito a este proceso de selección, porque he venido a quedarme en el mundo de la programción pero estoy al principio del camino, y este se hace mejor si se comparte, por eso estos grupos de trabajo me parecen una inicitiva genial.


## Funcionalidades

Mi proyecto consiste en una explicación, a modo de cards, de los motivos por los que me encantaría formar parte de estos grupos de trabajo y por qué creo que soy buena candidata.
- El usuario puede dar "like" en las cards si comparte o le gustan mis motivos.
- Al hacer click en el botón "Valoración final", el usuario es conducido a otra página donde se devuelve un mensaje que valora mi candidatura en función del número total de "likes" recibidos.

En proyecto he trabajado con varias ramas según la funcionalidad y he hecho del deploy con Vercel.


## Colaboraciones

En mi componente CardList.tsx (que renderiza el listado de cards) quería rendizar la prop "totalLikes" junto al link de "Valoración final".
Esta prop refleja el número total de likes (o corazones) que el usuario me da en la lista de motivos. La idea era mostrar algo así: "Likes: 3 Me gusta". 

Así que creé una issue con un título que describía lo que deseaba hacer ("Renderizado de la props totalLikes"), pedí colaboración a un amigo programador y le indiqué los pasos a seguir:

- Crear una nueva rama para resolver la issue.
- Ubicación de la issue: src => components => CardList.tsx,
- La prop se deberá renderizar en un h4 y antes del Link.
- No hay que preocuparse por los estilos, ya están diseñados para que el responsive quede bien.

Cuando hizo su trabajo, él creó una pull request, la revisé y, como estaba todo perfecto y no había problemas de fusión, la mergee a mi rama main.


## Tecnologías

Vite, Node, React, TypeScrit, Prettier y ESLint.

## Implementación del proyecto

Es necesario tener instalado:
- Node.js.
- Prettier y EsLint (extensiones de Visual Studio Code): en las dependencias de desarrollo del proyecto están Prettier y ESLint, muy útiles para trabajar en grupo y mantener unas reglas en común de formato y de código. Pero necesitan de sus correspondientes extensiones en VSC.

Clona el repositorio: 

```bash
  git clone https://github.com/elialcodes/adopta-un-junior-Noelia-Abascal.git
```

Ve al directorio en concreto e instala las dependencias (carpeta node modules):

```bash
  npm install
```

Lanza el proyecto en local:

```bash
  npm run dev
```

## Link

🔗 https://adopta-un-junior-noelia-abascal.vercel.app/
