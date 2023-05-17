const app = Vue.createApp({
    data() {
        return {
            recetas: [
                {
                    nombre: "Ensalada César",
                    imagen: "./imatges/ensalada_cesar.jpg",
                    ingredientes: [
                        {nombre: "Lechuga", precio: 1.5},
                        {nombre: "Pollo", precio: 4.5},
                        {nombre: "Queso parmesano", precio: 7.5},
                        {nombre: "Pan tostado", precio: 1.5},
                        {nombre: "Salsa César", precio: 4.5},
                        // agregar los precios restantes de los ingredientes...
                    ],
                    tiempo: 15,
                    url: "./receta1.html"
                },

                {
                    nombre: "Pasta con salsa de tomate",
                    imagen: "./imatges/pasta_tomate.jpg",
                    ingredientes: [
                        {nombre: "Pasta", precio: 1.5},
                        {nombre: "Tomates", precio: 4.5},
                        {nombre: "Cebolla", precio: 7.5},
                        {nombre: "Ajo", precio: 1.5},
                        {nombre: "Aceite de oliva", precio: 4.5},
                        {nombre: "Sal", precio: 4.5},
                        // agregar los precios restantes de los ingredientes...
                    ],
                    tiempo: 30,
                    url: "./receta2.html"
                },

                {
                    nombre: "Hamburguesa con queso",
                    imagen: "./imatges/hamburguesa.jpg",
                    ingredientes: [
                        {nombre: "Carne picada", precio: 1.5},
                        {nombre: "Pan de hamburguesa", precio: 4.5},
                        {nombre: "Queso cheddar", precio: 7.5},
                        {nombre: "Lechuga", precio: 1.5},
                        {nombre: "Tomate", precio: 4.5},
                        {nombre: "Cebolla", precio: 4.5},
                        {nombre: "Ketchup", precio: 4.5},
                        {nombre: "Mostaza", precio: 4.5},
                        // agregar los precios restantes de los ingredientes...
                    ],
                    tiempo: 20,
                    url: "./receta3.html"
                },

                {
                    nombre: "Pizza Margarita",
                    imagen: "./imatges/pizza_margarita.jpg",
                    ingredientes: [
                        {nombre: "Masa de pizza", precio: 1.5},
                        {nombre: "Salsa de tomate", precio: 4.5},
                        {nombre: "Mozzarella", precio: 7.5},
                        {nombre: "Albahaca", precio: 1.5},
                        // agregar los precios restantes de los ingredientes...
                    ],
                    tiempo: 45,
                    url: "./receta4.html"
                },

                {
                    nombre: "Tacos de carne",
                    imagen: "./imatges/tacos.jpg",
                    ingredientes: [
                        {nombre: "Carne de res", precio: 1.5},
                        {nombre: "Tortillas de maíz", precio: 4.5},
                        {nombre: "Cebolla", precio: 7.5},
                        {nombre: "Cilantro", precio: 1.5},
                        {nombre: "Limón", precio: 7.5},
                        {nombre: "Sal", precio: 1.5},
                        {nombre: "Aceite de oliva", precio: 7.5},
                        // agregar los precios restantes de los ingredientes...
                    ],
                    tiempo: 40,
                    url: "./receta5.html"
                },

                {
                    nombre: "Pollo al Curry",
                    imagen: "./imatges/pollo_curry.jpg",
                    ingredientes: [
                        {nombre: "Pechugas de pollo", precio: 1.5},
                        {nombre: "Cebolla", precio: 4.5},
                        {nombre: "Ajo", precio: 7.5},
                        {nombre: "Jengibre", precio: 1.5},
                        {nombre: "Leche de coco", precio: 7.5},
                        {nombre: "Curry en polvo", precio: 1.5},
                        {nombre: "Aceite de oliva", precio: 7.5},
                        {nombre: "SaL", precio: 7.5},
                        // agregar los precios restantes de los ingredientes...
                    ],
                    tiempo: 40,
                    url: "./receta6.html"
                }
            ],
            //...resto de la data
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
                },
                {
                    nombre: "Hierro y proteinas",
                    comidas: [
                    "Lunes desayuno: Tortilla de claras de huevo con espinacas y champiñones, una rebanada de pan integral, un vaso de jugo de naranja.",
                    "Martes desayuno: Batido de proteínas hecho con leche de almendras, plátano y mantequilla de maní, una porción de avena con nueces.",
                    "Miércoles desayuno: Tazón de yogur griego bajo en grasa con bayas y granola sin azúcar.",
                    "Jueves desayuno: Tostada de aguacate y huevo pochado, una porción de frutas frescas.",
                    "Viernes desayuno: Omelette de claras de huevo con espinacas, tomate y queso bajo en grasa, una rebanada de pan integral.",
                    "Sábado desayuno: Batido de proteínas hecho con leche de almendras, espinacas, plátano y mantequilla de maní, una porción de avena con nueces.",
                    "Domingo desayuno: Omelette de claras de huevo con espinacas, champiñones y queso bajo en grasa, una rebanada de pan integral.",
                    "Lunes comida: Ensalada de espinacas con pollo a la parrilla, una porción de lentejas cocidas, una porción de arroz integral, una manzana como postre.",
                    "Martes comida: Pollo al horno con brócoli, una porción de garbanzos, una ensalada de vegetales mixtos, una naranja como postre.",
                    "Miércoles comida: Filete de ternera a la plancha, espinacas salteadas, una porción de puré de patatas, una pera como postre.",
                    "Jueves comida: Filete de salmón al horno, una porción de quinoa, espárragos asados, una manzana como postre.",
                    "Viernes comida: Pechuga de pollo a la parrilla, una porción de lentejas cocidas, ensalada de vegetales mixtos, una naranja como postre.",
                    "Sábado comida: Pollo al horno con brócoli, una porción de garbanzos, una ensalada de vegetales mixtos, una pera como postre.",
                    "Domingo comida: Tacos de pescado a la plancha con tortillas de maíz, repollo rallado, salsa de yogur y lima, una porción de quinoa cocida.",
                    "Lunes cena: Salmón a la parrilla, una porción de quinoa, espárragos asados, un yogur griego bajo en grasa.",
                    "Martes cena: Hamburguesa de pavo con pan integral, rodajas de tomate y aguacate, ensalada verde, una porción de quinoa cocida.",
                    "Miércoles cena: Chili vegetariano con arroz integral y nachos.",
                    "Jueves cena: Ensalada de atún con espinacas, tomate, pepino y aceite de oliva, una porción de arroz integral.",
                    "Viernes cena: Ensalada de pollo con espinacas, fresas, nueces y vinagreta balsámica, una porción de arroz integral.",
                    "Sábado cena: Hamburguesa de pavo con pan integral, rodajas de tomate y aguacate, ensalada verde, una porción de quinoa cocida.",
                    "Domingo cena: Chili vegetariano con arroz integral y nachos."
                ]
                }
                ],
            busqueda: '',
            busquedaRecetas: '',
            busquedDiestas: '',
            tiempoFiltrado: 60,
            cesta: [],
            cestaAbierta: false,
        }
    },
    methods: {
        agregarALaCesta(ingredientes) {
            ingredientes.forEach(ingrediente => {
                let found = this.cesta.find(item => item.nombre === ingrediente.nombre);
                if(found){
                    found.cantidad += 1;
                }else{
                    this.cesta.push({
                        nombre: ingrediente.nombre,
                        precio: ingrediente.precio,
                        cantidad: 1
                    });
                }
            });
        },
    },
    computed: {
        //...resto de computed properties
        recetasFiltradas() {
            return this.recetas.filter(receta => {
                let matchesSearch = receta.nombre.toLowerCase().includes(this.busquedaRecetas.toLowerCase());
                let withinTimeLimit = receta.tiempo <= this.tiempoFiltrado;
                return matchesSearch && withinTimeLimit;
            });
        },
        dietasFiltradas() {
            if (this.busqueda === '') {
                return this.dietas
            } else {
                return this.dietas.filter(dietas => dietas.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
            }
        },
        precioTotal() {
            return this.cesta.reduce((total, ingrediente) => {
                return total + (ingrediente.precio * ingrediente.cantidad);
            }, 0);
        },
        toggleCesta() {
            this.cestaAbierta = !this.cestaAbierta;
        }
    }
})
app.mount('#app')
