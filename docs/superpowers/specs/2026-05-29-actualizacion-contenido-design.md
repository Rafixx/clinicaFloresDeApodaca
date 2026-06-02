# Diseño: Actualización de contenido — Clínica Flores de Apodaca

**Fecha:** 2026-05-29  
**Enfoque:** Actualización in-place de componentes existentes (Approach A). Sin cambios arquitecturales.

---

## Alcance

12 bloques de cambios agrupados en 3 categorías:

| Categoría | Puntos del spec |
|-----------|----------------|
| Nuevos idiomas (nl, ru) | 3 |
| Actualización de contenido | 1, 2, 4, 5, 6, 8, 9, 10 |
| Marcas y assets | 11, 12 (carousel) |

Puntos sin cambios: 7 (Medicina integrativa), 12 (Reserva y ubicación).

---

## 1. Nuevos idiomas: Holandés (nl) y Ruso (ru)

### Archivos afectados
- `astro.config.mjs` — añadir `'nl'` y `'ru'` a `locales`; fallback a `'es'`
- `src/i18n/ui.ts` — añadir bloques completos `nl` y `ru` con todas las claves (nav, common, secciones)
- `src/components/Layout/LanguagePicker.astro` — añadir `nl: '🇳🇱'` y `ru: '🇷🇺'` al mapa `languages`
- `src/pages/nl/` — 13 nuevas páginas (copia de estructura `en/`)
- `src/pages/ru/` — 13 nuevas páginas (copia de estructura `en/`)

### Páginas a crear (×2 locales = 26 archivos)
```
index.astro
clinica.astro
reservas.astro
info-legal.astro
ginecologiaEstetica.astro
tratamientos/tratamientos.astro
tratamientos/medicinaEsteticaFacial.astro
tratamientos/medicinaEsteticaCorporal.astro
tratamientos/medicinaEsteticaCapilar.astro
tratamientos/consultaMedicinaIntegrativa.astro
tratamientos/unidadMedicinaRegenerativa.astro
tratamientos/tratamientosEstetica.astro
tratamientos/productos.astro
```

Las traducciones serán coherentes con el registro médico/estético del resto del sitio.

---

## 2. Hero principal (`Jumbotron.astro` + `src/i18n/ui.ts`)

- `jumbotron.title` → "Salud y envejecimiento saludable" (6 idiomas)
- Añadir `jumbotron.subtitle2` → "Belleza natural, cuidado profesional" (6 idiomas)  
  *(el componente usará `t("jumbotron.title")` + `t("jumbotron.subtitle2")` en dos líneas)*
- `jumbotron.subtitle` → reforzar con mensaje antienvejecimiento (6 idiomas)

### Carousel (`Carousel.astro`)
- Reemplazar `carousel1.webp` por `entrada-clinica.webp` en el array `images`
- El archivo placeholder ya existe en `public/carousel/entrada-clinica.webp`; cuando se disponga de la foto real, solo hay que reemplazar ese archivo sin tocar el código

---

## 3. Clínica / Sobre nosotros (`Clinica.astro`)

- Sustituir párrafo de medicina integrativa por el texto literal del spec (microbiota, sistema inmunitario, test genéticos)
- Añadir bloque de credenciales de la Dra. Flores de Apodaca:
  - Diplomada en ozonoterapia por AEPROMO
  - Profesora del máster universitario de láser del CEU Cardenal
  - Formadora de medicina estética de los laboratorios Top Medical
  - Formadora de AEMI, Asociación Española de Micriomunoterapia
- Traducido a 6 idiomas

---

## 4. Productos (`Productos.astro`)

### Cosmética avanzada
Añadir tras los productos existentes (o como subsección dentro del acordeón):
- **Derma Curai** — especialista en patologías y daños cutáneos: pigmentaciones, acné, reparación de barrera cutánea
- **Sky Medic** — línea para uso a domicilio que complementa los tratamientos de clínica

### Micronutrición / Microecología
- Mantener: LCN, Sonut (Ysonut)
- Eliminar: "Microecología y Neovital Health" como sección combinada; separar
- Añadir como laboratorios independientes:
  - **Laboratorios Cobas**
  - **Neovital Health**
  - **Npro**
- Reencuadrar el bloque completo alrededor de diagnóstico de microbiota intestinal y recomendación de productos innovadores

Traducido a 6 idiomas.

---

## 5. Tratamientos faciales (`Facial.astro`)

### Tratamiento de ojeras (actualizar acordeón existente)
Añadir al contenido del body:
- Tratamiento con exosomas
- Tratamiento con polinucleótidos
- Referencia a la zona periorbital

### Rejuvenecimiento facial (actualizar acordeón existente)
Añadir al inicio del body:
- Radiofrecuencia monopolar con agujas EXION
- Explicación agujas insuladas y no insuladas
- Adaptación según fototipo de piel
- Ventajas del tratamiento

### Nuevo tratamiento independiente (nuevo acordeón)
Título: "Exosomas Autólogos y Rellenos Faciales con PRP"  
Contenido:
- Tratamiento con exosomas autólogos
- Rellenos faciales con PRP Dermafiller y PRP Dermage

Traducido a 6 idiomas.

---

## 6. Tratamientos corporales (`Corporal.astro`)

### Glúteos (actualizar acordeón existente)
- Reformular como "remodelación de glúteos sin cirugía"
- Añadir: aumento de glúteo con ácido hialurónico

### Manos (actualizar acordeón existente)
Añadir opciones de tratamiento:
- Relleno con Dermafiller PRP (opción autóloga)
- Hidratación con mesoterapia
- Vitaminas
- Polinucleótidos
- Exosomas y exosomas autólogos

### Flacidez corporal (actualizar acordeón existente)
En las zonas de abdomen y brazos, añadir:
- Terapia autóloga con PRP
- Carboxiterapia
- Mesoterapia específica
- Radiofrecuencia corporal EXION

Indicar brevemente que ayuda con flacidez, arruga fina, grasa y celulitis.

Traducido a 6 idiomas.

---

## 7. Medicina regenerativa (`Regenerativa.astro`)

Añadir (manteniendo lo existente):
- Exosomas autólogos
- PRP Dermafiller y PRP Dermage (ambos nombres)

Mantener:
- Infiltración ecoguiada con PRP
- Infiltración ecoguiada con ácido hialurónico de alto peso molecular
- Condroitina

Traducido a 6 idiomas.

---

## 8. Medicina capilar (`Capilar.astro`)

En el acordeón de Microneedling / Dermapen, añadir:
- Exosomas
- Exosomas autólogos

No añadir exosomas de origen vegetal. Mantener mesoterapia capilar.

Traducido a 6 idiomas.

---

## 9. Tratamientos de estética (`Estetica.astro`)

Añadir tratamiento destacado:
- **Equipo EXION** — descripción del tratamiento, indicaciones y ventajas
- Destacarlo visualmente (tarjeta/sección prominente dentro del componente)

Mantener el resto del contenido actual.

Traducido a 6 idiomas.

---

## 10. Marcas (`Marcas.astro`)

### Mapeo de nombres (renombres confirmados)
| Nombre actual en código | Nuevo nombre | Logo |
|------------------------|--------------|------|
| MERZ AESTHETICS | MERS | logo04.webp |
| CARING INNOVATION | IXA | logo02.webp |
| TOV MEDICAL | Top Medical | logo01.webp |
| DERMIKA | Termic | logo03.webp |
| NAQUA | Naqua | logo05.webp |
| GALDERMA | Galderma | logo09.webp |
| SKI MEDIC | Ski Medic | logo07.webp |
| IT PHARMA | IT Pharma | logo08.webp |
| SINCLAIR | — | logo06.webp (ELIMINAR) |
| *(nueva)* | BTL | logo-btl.webp (placeholder) |
| *(nueva)* | Neaubia | logo-neaubia.webp (placeholder) |

### Nuevo orden en el componente
1. MERS (logo04.webp)
2. IXA (logo02.webp)
3. Top Medical (logo01.webp)
4. Termic (logo03.webp)
5. Naqua (logo05.webp)
6. Galderma (logo09.webp)
7. Ski Medic (logo07.webp)
8. IT Pharma (logo08.webp)
9. BTL (logo-btl.webp)
10. Neaubia (logo-neaubia.webp)

### Cambios
- Eliminar: Sinclair (logo06.webp queda sin usar)
- Añadir: BTL, Neaubia con placeholders; reemplazar archivos cuando se disponga de logos reales
- Sin renombrar archivos físicos de logos existentes; solo cambian los nombres en el array del componente

**Pendiente de assets:** `logo-btl.webp` y `logo-neaubia.webp` son placeholders con texto. Reemplazar los archivos cuando se tengan los logos reales.

---

## Assets pendientes de reemplazar

| Archivo | Ubicación | Descripción |
|---------|-----------|-------------|
| `entrada-clinica.webp` | `public/carousel/` | Foto exterior clínica con rótulo |
| `logo-btl.webp` | `public/marcas/` | Logo BTL |
| `logo-neaubia.webp` | `public/marcas/` | Logo Neaubia |

Para cada uno: simplemente reemplazar el archivo con la imagen real, sin cambiar el nombre ni el código.

---

## Orden de implementación

1. `astro.config.mjs` + `src/i18n/ui.ts` (nl, ru, cambios de keys hero)
2. `src/pages/nl/` y `src/pages/ru/` (26 nuevas páginas)
3. `Jumbotron.astro` (nueva estructura de título)
4. `Carousel.astro` (referencia a `entrada-clinica.webp`)
5. `Clinica.astro`
6. `Productos.astro`
7. `Facial.astro`
8. `Corporal.astro`
9. `Regenerativa.astro`
10. `Capilar.astro`
11. `Estetica.astro`
12. `Marcas.astro`
13. Build final + commit + push
