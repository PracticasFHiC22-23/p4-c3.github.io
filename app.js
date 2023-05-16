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
            dietas: [
                {
                    nombre: "Vegetariana",
                    comidas: [
                        ["Lunes almuerzo: Ensalada de tomate, aguacate, queso feta, aceitunas y aderezo de aceite de oliva y limón"],
                        ["Martes almuerzo: Ensalada de remolacha, rúcula, queso de cabra, nueces y vinagreta de miel y mostaza"],
                        ["Miércoles almuerzo: Ensalada de aguacate, mango, rúcula y nueces con aderezo de aceite de oliva y limón"],
                        ["Jueves almuerzo: Ensalada de quinoa con vegetales asados (como calabaza, berenjenas, zanahorias), garbanzos y aderezo de yogur griego y eneldo"],
                        ["Viernes almuerzo: Ensalada de pasta integral con tomates cherry, rúcula, aceitunas negras, queso feta y aderezo de aceite de oliva y vinagre balsámico"],
                        ["Sábado almuerzo: Ensalada de garbanzos con pimientos asados, cebolla morada, tomate, pepino y aderezo de aceite de oliva y vinagre"],
                        ["Domingo almuerzo: Ensalada caprese con tomates, mozzarella fresca, hojas de albahaca y aderezo de aceite de oliva y vinagre balsámico"],
                        ["Lunes comida: Hamburguesa vegetariana con queso, lechuga, tomate y cebolla en un pan integral, acompañada de una porción de batatas fritas al horno"],
                        ["Martes comida: Curry de verduras (como zanahorias, calabacín, berenjenas, pimientos) con arroz basmati y pan naan"],
                        ["Miércoles comida: Quiche de espinacas y queso de cabra con una porción de ensalada verde"],
                        ["Jueves comida: Pizza vegetariana con tomate, mozzarella, pimiento, cebolla y champiñones"],
                        ["Viernes comida: Tacos vegetarianos con lechuga, tomate, cebolla, aguacate y salsa de yogur y cilantro"],
                        ["Sábado comida: Lasagna vegetariana con salsa de tomate, espinacas, queso ricotta y mozzarella"],
                        ["Domingo comida: Ratatouille con una porción de pan integral tostado y una ensalada verde"],
                        ["Lunes cena: Arroz integral con garbanzos, tomate, espinacas y especias"],
                        ["Martes cena: Fajitas vegetarianas con tiras de pimientos y cebolla, guacamole, salsa de tomate y frijoles negros"],
                        ["Miércoles cena: Chili vegetariano con arroz integral y nachos"],
                        ["Jueves cena: Sopa de lentejas con pan integral tostado y una porción de ensalada verde"],
                        ["Viernes cena: Falso risotto de quinoa con espárragos, champiñones y queso parmesano"],
                        ["Sábado cena: Brochetas de tofu a la parrilla con pimientos y cebolla, acompañadas de una porción de arroz integral"],
                        ["Domingo cena: Pasta integral con pesto de albahaca, tomates cherry y queso parmesano"]
                        ]
                },
                {
                    nombre: "Mediterránea",
                    comidas: [
                        ["Lunes almuerzo: Ensalada griega con lechuga, tomate, pepino, cebolla roja, aceitunas negras, queso feta y aderezo de aceite de oliva y limón"],
                        ["Martes almuerzo: Bruschetta de pan integral con tomate, albahaca, aceite de oliva y queso mozzarella."],
                        ["Miércoles almuerzo: Tortilla española con papas, cebolla y pimientos, acompañada de una ensalada verde"],
                        ["Jueves almuerzo: Ensalada de aguacate, queso de cabra, nueces y espinacas, aderezada con aceite de oliva y vinagre balsámico"],
                        ["Viernes almuerzo: Wrap de pollo a la parrilla con hummus, espinacas frescas y rodajas de pepino"],
                        ["Sábado almuerzo: Ensalada de quinoa con pollo a la plancha, pepino, tomate, aceitunas y aderezo de yogur griego y limón"],
                        ["Domingo almuerzo: Ensalada caprese con rodajas de tomate, mozzarella fresca, hojas de albahaca y aderezo de aceite de oliva y vinagre balsámico"],
                        ["Lunes comida: Pollo a la parrilla con limón y hierbas, acompañado de una porción de arroz integral y verduras salteadas"],
                        ["Martes comida: Lentejas estofadas con verduras (zanahorias, apio, cebolla) y especias, acompañadas de una porción de quinoa"],
                        ["Miércoles comida: Pescado a la plancha (como dorada o lubina) con rodajas de limón, servido con una porción de bulgur y verduras al vapor"],
                        ["Jueves comida: Pollo al horno con hierbas mediterráneas, acompañado de una porción de patatas al horno y brócoli al vapor"],
                        ["Viernes comida: Estofado de ternera con tomates, cebolla, zanahorias, patatas y especias, servido con una porción de pan integral"],
                        ["Sábado comida: Berenjenas rellenas de carne picada de ternera, cebolla, tomate y especias, horneadas con queso rallado"],
                        ["Domingo comida: Pescado al horno con tomates cherry, aceitunas, alcaparras y hierbas mediterráneas, acompañado de una ensalada mixta"],
                        ["Lunes cena: Ensalada de pasta integral con tomates cherry, espinacas, aceitunas negras, alcaparras, atún enlatado y aderezo de aceite de oliva y limón"],
                        ["Martes cena: Ensalada de garbanzos con pimientos asados, cebolla morada, tomate, pepino, aceitunas y aliño de aceite de oliva y vinagre"],
                        ["Miércoles cena: Ensalada de salmón ahumado con rúcula, aguacate, tomates secos, piñones y aderezo de yogur griego y eneldo"],
                        ["Jueves cena: Sopa de tomate casera con croutones de pan integral y una porción de ensalada verde"],
                        ["Viernes cena: Revuelto de champiñones y espárragos con huevos, servido con una porción de pan integral tostado"],
                        ["Sábado cena: Ensalada de pollo asado desmenuzado con lechuga, tomate, pepino, cebolla y aderezo de yogur y hierbas"],
                        ["Domingo cena: Ensalada mixta con queso feta, aceitunas, nueces y aderezo de aceite de oliva y vinagre balsámico"]
                    ]
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
        },
        dietasFiltradas() {
            if (this.busqueda === '') {
                return this.dietas
            } else {
                return this.dietas.filter(dietas => dietas.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
            }
        }
    }

})
app.mount('#app')