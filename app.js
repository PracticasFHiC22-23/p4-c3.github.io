const app = Vue.createApp({
    data() {
        return {
            recetas: [
                {
                    nombre: "Ensalada César",
                    imagen: "./imatges/ensalada_cesar.jpg",
                    ingredientes: ["Lechuga", "Pollo", "Queso parmesano", "Pan tostado", "Salsa César"],
                    tiempo: "15 minutos",
                    url: "./receta1.html"
               },

                {
                    nombre: "Pasta con salsa de tomate",
                    imagen: "./imatges/pasta_tomate.jpg",
                    ingredientes: ["Pasta", "Tomates", "Cebolla", "Ajo", "Aceite de oliva", "Sal"],
                    tiempo: "30 minutos",
                    url: "./receta2.html"
               },
                {
                    nombre: "Hamburguesa con queso",
                    imagen: "./imatges/hamburguesa.jpg",
                    ingredientes: ["Carne picada", "Pan de hamburguesa", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Ketchup", "Mostaza"],
                    tiempo: "20 minutos",
                    url: "./receta3.html"
                },
                {
                    nombre: "Pizza Margarita",
                    imagen: "./imatges/pizza_margarita.jpg",
                    ingredientes: ["Masa de pizza", "Salsa de tomate", "Mozzarella", "Albahaca"],
                    tiempo: "45 minutos",
                    url: "./receta4.html"
                },
                {
                    nombre: "Tacos de carne",
                    imagen: "./imatges/tacos.jpg",
                    ingredientes: ["Carne de res", "Tortillas de maíz", "Cebolla", "Cilantro", "Limón", "Sal", "Aceite de oliva"],
                    tiempo: "40 minutos",
                    url: "./receta5.html"
                },
                {
                    nombre: "Pollo al Curry",
                    imagen: "./imatges/pollo_curry.jpg",
                    ingredientes: ["Pechuga de pollo", "Cebolla", "Ajo", "Jengibre", "Leche de coco", "Curry en polvo", "Aceite de oliva", "Sal"],
                    tiempo: "40 minutos",
                    url: "./receta6.html"
                }


            ],
            busqueda: ''
        }
    },
    computed: {
        recetasFiltradas() {
            if (this.busqueda === '') {
                return this.recetas
            } else {
                return this.recetas.filter(receta => receta.nombre.toLowerCase().includes(this.busqueda.toLowerCase()))
            }
        }
    }
})
app.mount('#app')