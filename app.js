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
                }
            ]
        }
    }
})

app.mount('#app')
