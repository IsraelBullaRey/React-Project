# Juego de Triqui Traqui con React y Next.js  ❌⭕ 

## Presentado por:
#### 1152358-Israel Bulla Rey

Este proyecto es un sencillo juego de **Tres en Raya** construido con **React** y **Next.js**, aplicando estilos con **TailwindCSS**.  

A continuación se responden algunas preguntas clave sobre las tecnologías utilizadas en el desarrollo:

## Preguntas y Respuestas  

### 1. ¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para interfaces web?
React permite crear **interfaces dinámicas y reactivas** de manera más sencilla gracias a su sistema de componentes reutilizables, el manejo eficiente del state y el DOM, que mejora el rendimiento al actualizar solo lo necesario. Con JavaScript puro tendríamos que manipular el DOM manualmente, lo cual es más propenso a errores.  

---

### 2. ¿Qué beneficios ofrece Next.js al trabajar sobre React?
Next.js es como una mejora sobre React. Trae cosas listas para usar como el ruteo automático, renderizado en servidor, optimización de imágenes y fuentes, y facilita el despliegue en producción. En resumen, ahorra mucho trabajo que normalmente habría que configurar a mano.

---

### 3. ¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?
El **App Router** es el nuevo sistema de enrutamiento de Next.js que introduce una forma más moderna y flexible de organizar las páginas y componentes. Usando la carpeta `/app` en lugar de `/pages`, crear layouts compartidos, rutas anidadas y estados de carga mucho más fácil y un mejor manejo de la UI. Se recomienda porque aprovecha los componentes del servidor, optimizando la carga y facilitando la escalabilidad del proyecto.  

---

### 4. ¿Qué diferencia hay entre client components y server components en Next.js?
- Los **client components** son los que se ejecutan en el navegador y permiten usar directivas como `useState` o `useEffect`, además de manejar interactividad.  
- Los **server components** se renderizan en el servidor antes de enviarse al cliente, lo que reduce el peso del JavaScript en el navegador y mejora el rendimiento.  

En un proyecto real, lo más común es combinar ambos según la necesidad.  

---

### 5. ¿Por qué crees que en desarrollo profesional se usan repositorios públicos o privados en GitHub en lugar de solo trabajar en carpetas locales?
Porque un repositorio en GitHub permite trabajar en equipo, tener un historial de cambios, manejar ramas, hacer pruebas y tener el proyecto respaldado en la nube. Además, en proyectos privados se asegura que solo el equipo tenga acceso al código. En definitiva, es una forma más organizada y segura de trabajar que tener todo en una sola carpeta local.  

---

## Tecnologías utilizadas
- [React](https://react.dev/)  
- [Next.js](https://nextjs.org/)  
- [TailwindCSS](https://tailwindcss.com/)  

---

## Cómo ejecutar el proyecto
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev