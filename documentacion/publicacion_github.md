# Guía de Publicación en GitHub y Despliegue con GitHub Pages

Esta guía explica paso a paso cómo hacer público tu repositorio en GitHub y desplegar el sitio web de **Bicicletas CYBY** de forma gratuita y accesible para cualquier persona a través de **GitHub Pages**.

---

## 📌 Opción 1: Cambiar el Repositorio Actual a Público

Si el repositorio actual (`https://github.com/tucuenta/Ciby`) ya existe y deseas hacerlo público:

1. **Ingresa a GitHub:**
   - Abre tu navegador e ingresa a [https://github.com/tucuenta/Ciby](https://github.com/tucuenta/Ciby).
2. **Accede a la Configuración:**
   - Haz clic en la pestaña **Settings** (⚙️) en la parte superior derecha del repositorio.
3. **Sección Danger Zone:**
   - Baja hasta el final de la página a la sección **"Danger Zone"**.
4. **Cambiar Visibilidad:**
   - En la opción **"Change repository visibility"**, haz clic en **"Change visibility"**.
   - Selecciona **"Make public"**.
   - Escribe el nombre del repositorio para confirmar y pulsa el botón de confirmación.

---

## 🚀 Opción 2: Publicar un Repositorio Nuevo desde Cero

Si prefieres publicar el proyecto en un nuevo repositorio público:

### 1. Crear el repositorio en GitHub
1. Ve a [https://github.com/new](https://github.com/new).
2. **Repository name:** Escribe el nombre (por ejemplo: `bicicletas-cyby` o `ciby-web`).
3. **Visibility:** Marca la opción **Public**.
4. **NO** marques las opciones de inicializar con README, .gitignore o licencia (ya los tenemos localmente).
5. Haz clic en **Create repository**.

### 2. Conectar y subir desde la terminal
Abre tu terminal en la carpeta del proyecto (`C:\Users\oscar\OneDrive\Desktop\as`) y ejecuta:

```bash
# 1. Asegurarse de tener todos los cambios guardados
git add .
git commit -m "Publicación inicial del sitio web"

# 2. Renombrar la rama a main (si no está ya en main)
git branch -M main

# 3. Vincular con la URL del nuevo repositorio público
git remote set-url origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 4. Subir el código a GitHub
git push -u origin main
```

---

## 🌐 Paso Crucial: Activar GitHub Pages (Sitio Web Online)

Para que el sitio web se pueda abrir como una página pública en internet (`.github.io`):

1. Dentro de tu repositorio en GitHub, ve a la pestaña **Settings** (⚙️).
2. En el menú lateral izquierdo, haz clic en **Pages** (dentro de la sección *Code and automation*).
3. En la sección **"Build and deployment"**:
   - **Source:** Selecciona `Deploy from a branch`.
   - **Branch:** Selecciona la rama **`main`** y la carpeta **`/(root)`**.
   - Haz clic en el botón **Save**.
4. **Espera 1 a 2 minutos:**
   - GitHub ejecutará una acción automática (*GitHub Actions*) para construir el sitio.
   - Al recargar la página de *Pages*, verás un mensaje verde con la URL oficial de tu sitio:
     ```text
     Your site is live at https://tucuenta.github.io/Ciby/
     ```

---

## ✅ Verificación del Despliegue

Una vez publicado en GitHub Pages:
- La página principal cargará directamente desde [index.html](index_html.md).
- Toda la navegación interna hacia el catálogo, novedades, quiénes somos, contacto y detalle de producto funcionará de forma nativa.
- El carrito de compras y la integración con WhatsApp (`+52 55 5532 9490`) funcionarán desde computadoras y teléfonos móviles sin necesidad de un backend o servidor de pago.

---

## 🔄 Cómo Actualizar el Sitio en el Futuro

Cada vez que realices cambios o agregues nuevos productos, solo necesitas ejecutar en tu terminal:

```bash
git add .
git commit -m "Descripción de los cambios realizados"
git push origin main
```

GitHub Pages detectará automáticamente la actualización y publicará la nueva versión en internet en cuestión de segundos.
