import React from 'react';

// Crear el contexto MealsContext
const MealsContext = React.createContext();

// Lista de comidas del día (estado inicial)
const todaysMeals = ["Tajá' con huevo","Bandeja Paisa","Pastelito del Ara"];

// Componente MealsProvider que envuelve los componentes hijos y proporciona el contexto
const MealsProvider = ({children}) => {

    // Crear un estado para las comidas, inicializado con todaysMeals
    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        // Proveedor del contexto, pasa el valor de meals a los componentes hijos
        <MealsContext.Provider value = {{meals}}>
            {children} {/* Renderiza los componentes hijos (MealsList y Counter en este caso) */}
        </MealsContext.Provider>
    )
}

// Hook personalizado para acceder al contexto más fácilmente
export const useMealsListContext = () => React.useContext(MealsContext);

// Exportar el proveedor para usarlo en App.js
export default MealsProvider;


/*App.js

  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );

*/