# ita-game
Plataforma de gamificación para alumnos de una academia de código

## Application structure


### Atomic Design

Atomic design is not used by the following reasons (following the recommendations of the react web page):

- Simplicity: A smaller project may not require the level of organization that atomic design provides. By avoiding the use of atomic design, the project structure is simplified and make it easier to understand.
- Avoiding excessive nesting: Atomic design often involves creating multiple folders for atoms, molecules, organisms, and templates, which can lead to a deeply nested file structure.
- Avoid overthinking: When starting a small project, it can be tempting to overthink the structure and try to plan for every possible scenario. However, this can lead to over-engineering and make the project harder to develop.

Therefore, the design consists of two main building blocks: components and pages.

### Components
Components are the smallest and most reusable elements of the interface. They are responsible for rendering individual panels or UI elements of the app.

### Pages
Pages are composed of components and are responsible for rendering the different sections or screens of the app. They provide context and meaning to the components they contain.

By following this simplified atomic design, the application is made up of modular and reusable components, making it easier to maintain and scale in the future.

## Styles structure

The CSS for this project is organized by following the principle of grouping similar types of files together. All CSS files are stored in the same folder grouped into components and pages, naming each css file after the component or page they reference. 
