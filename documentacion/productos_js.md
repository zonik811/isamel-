# Documentación: `js/productos.js`

## 📌 Descripción General
`js/productos.js` funciona como la base de datos local y centralizada de la aplicación web. Expone un array global constante llamado `PRODUCTOS` que contiene los 47 productos oficiales del catálogo de **Bicicletas CYBY**, con sus identificadores únicos, imágenes, precios en pesos mexicanos (MXN), descripciones y especificaciones técnicas completas.

---

## 📊 Estructura de Datos de un Producto

Cada objeto del array `PRODUCTOS` cumple con el siguiente esquema de propiedades:

```javascript
{
  id: 10,                                  // Identificador numérico único
  nombre: "Manubrios Cross Pro",           // Nombre comercial del producto
  categoria: "manubrios",                  // Clave de categoría para filtrado
  categoriaTexto: "Manubrios",             // Nombre legible de la categoría
  precio: "$280 MXN",                      // Formato legible de precio
  imagen: "imgs/manubrio_cross01.png",     // Ruta relativa de la imagen
  descripcion: "Manubrio estilo Cross...", // Descripción detallada
  materiales: "Acero de alta resistencia", // Material de fabricación
  colores: "Negro mate, Cromo brillante",  // Variantes disponibles
  dimensiones: "700mm de ancho x 22.2mm",  // Medidas técnicas
  peso: "680g",                            // Peso aproximado
  destacado: true                          // Booleano para visualización en portada
}
```

---

## 🗂️ Categorías Disponibles en el Dataset

1. **`manubrios` (Manubrios):**
   - Cross Pro (`id: 10`)
   - Albatros (`id: 11`)
   - Ciudad Ergonómico (`id: 12`)
   - Downhill DH (`id: 13`)
   - Fixie Bullhorn (`id: 14`)
   - Gaviota Clásico (`id: 15`)
   - Marinero (`id: 16`)
   - Paloma (`id: 17`)
   - Plegable Quick (`id: 18`)
   - Semi Curvo Sport (`id: 19`)
   - Toro Pro (`id: 111`)
   - Turismera Retro (`id: 112`)
   - Vagabundo Vintage (`id: 113`)

2. **`punios` (Puños de Manubrio):**
   - Americanos Clásicos (`id: 20`)
   - Capri (`id: 21`)
   - Delfín Antideslizante (`id: 22`)
   - Delta Sport (`id: 23`)
   - Estrella Confort (`id: 24`)
   - Granada Ergonómico (`id: 25`)
   - Junior Infantil (`id: 26`)
   - Lugano Gel (`id: 27`)
   - Milanito Pro (`id: 28`)
   - Monte Blanco (`id: 29`)
   - Monte Casino (`id: 211`)
   - Monte Everest (`id: 212`)
   - Monte Negro (`id: 213`)
   - Murano Premium (`id: 214`)
   - Nápoles Cruiser (`id: 215`)
   - Picolino Compact (`id: 216`)
   - Powergrip MTB (`id: 217`)
   - Priova Confort (`id: 218`)
   - Turín Ergo (`id: 219`)
   - Venecia Gel (`id: 220`)

3. **`sillines` (Sillines y Asientos):**
   - Sillín Comfort Plus (`id: 30`)
   - Sillín Antiprostático Pro (`id: 31`)
   - Sillín Urbano Vintage Cuero (`id: 32`)
   - Sillín MTB Gel Pro (`id: 33`)
   - Sillín Infantil Acolchado (`id: 34`)

4. **`cuadros` (Cuadros de Bicicleta):**
   - Cuadro MTB Reforzado (`id: 40`)
   - Cuadro Urbano Fixie (`id: 41`)
   - Cuadro BMX Freestyle (`id: 42`)
   - Cuadro Ruta Aerodinámico (`id: 43`)

5. **`horquillas` (Horquillas y Tijeras):**
   - Horquilla Delantera MTB (`id: 50`)
   - Horquilla Aire Pro con Bloqueo (`id: 51`)
   - Tijera Rígida Urbana (`id: 70`)
   - Tijera Cromoly Ruta (`id: 71`)

6. **`accesorios` (Canastillas, Postes y Refacciones):**
   - Canastilla Frontal Metálica (`id: 60`)
   - Canastilla Trasera Carga Pesada (`id: 61`)
   - Poste de Asiento Recto (`id: 80`)
   - Poste de Asiento Curvo Ergo (`id: 81`)
   - Salpicadera Jumbo MTB (`id: 90`)

---

## 🔄 Integración con el Sistema
- Es cargado por todas las páginas antes de los scripts de consumo (`catalogo.js`, `producto.js`, `carrito.js`).
- Permite que el carrito y los filtros operen instantáneamente en el cliente sin requerir llamadas a APIs externas.
