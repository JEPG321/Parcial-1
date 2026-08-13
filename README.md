# ByteMarket

Tienda frontend de hardware y componentes de computadora construida con `Next.js`, `React` y `TypeScript`, siguiendo una Arquitectura en Capas limpia para separar presentacion, logica de negocio y acceso a datos.

## Estado del proyecto

La aplicacion ya cumple con los requerimientos principales del parcial:

- Catalogo dinamico de productos con imagen, nombre, descripcion y precio.
- Filtros por categoria.
- Ordenamiento por precio.
- Carrito lateral deslizante en la esquina derecha.
- Incremento y decremento de cantidades.
- Eliminacion automatica cuando la cantidad llega a cero.
- Total dinamico.
- Diseno responsivo.
- Datos simulados con base local.

## Stack

- `Next.js` App Router
- `React`
- `TypeScript`
- `Tailwind CSS v4`
- `Context + useReducer`

## Arquitectura en capas

### Presentacion

Componentes visuales y paginas:

- `src/app`
- `src/components`

### Aplicacion

Casos de uso del sistema:

- `src/application/use-cases`

### Dominio

Entidades y reglas:

- `src/domain/entities`

### Infraestructura

Acceso al origen de datos:

- `src/infrastructure/repositories`
- `src/data`

## Estructura actual

```bash
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  application/
    use-cases/
      addToCart.ts
      calculateCartTotal.ts
      filterProducts.ts
      getProducts.ts
      removeFromCart.ts
      sortProducts.ts
      updateCartItemQuantity.ts
  components/
    cart/
      CartDrawer.tsx
      CartItemCard.tsx
      CartSummary.tsx
    layout/
      Footer.tsx
      Header.tsx
      Hero.tsx
    products/
      FilterBar.tsx
      ProductCard.tsx
      ProductGrid.tsx
    store/
      Storefront.tsx
    ui/
      Icons.tsx
  context/
    CartContext.tsx
  data/
    db.ts
  domain/
    entities/
      CartItem.ts
      Product.ts
  infrastructure/
    repositories/
      productRepository.ts
public/
  products/
```

## Funcionalidades implementadas

### Catalogo

- 8 productos iniciales del rubro hardware
- Imagen local por producto
- Tarjetas con informacion clave

### Filtros

- Categoria:
  - Todos
  - Componentes
  - Monitores
  - Perifericos
  - Almacenamiento
- Orden:
  - Destacados
  - Menor a mayor
  - Mayor a menor

### Carrito

- Drawer lateral derecho
- Apertura automatica al agregar producto
- Persistencia en `localStorage`
- Suma de cantidad si el producto ya existe
- Botones `+` y `-`
- Eliminacion individual
- Total recalculado en tiempo real

## Como ejecutar

Instalar dependencias:

```bash
npm install
```

Levantar en desarrollo:

```bash
npm run dev
```

Abrir en navegador:

```bash
http://localhost:3000
```

## Verificacion tecnica

Comandos validados:

```bash
npm run lint
npm run build
```

## Checklist del parcial

- [x] Proyecto en `Next.js`
- [x] Arquitectura en capas
- [x] Catalogo dinamico
- [x] Imagen, nombre, descripcion y precio por tarjeta
- [x] Filtro por categoria
- [x] Ordenamiento por precio
- [x] Actualizacion en tiempo real
- [x] Boton para agregar al carrito
- [x] No duplicar productos en carrito
- [x] Incrementar cantidad si ya existe
- [x] Editar cantidades
- [x] Eliminar productos
- [x] Total dinamico
- [x] Responsivo

## Evidencias para el PDF

El documento final debe llevar este orden:

1. Enlace al repositorio publico.
2. Captura del arbol de carpetas.
3. Captura de la pagina principal.
4. Capturas aplicando filtros.
5. Secuencia del carrito:
   - Agregar producto
   - Editar cantidades
   - Mostrar recalculo del total

## Nota

Las imagenes de producto estan incluidas localmente dentro de `public/products` para que el proyecto pueda ejecutarse sin depender de servicios externos.
