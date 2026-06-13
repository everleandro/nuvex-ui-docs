<template>
  <ECard>
    <div class="docs-page">
      <p class="docs-page__eyebrow">{{ resolvedItem?.group.title }}</p>
      <h1 class="docs-page__title">{{ resolvedItem?.item.title }}</h1>
      <p class="docs-page__lead">
        Esta pagina es el placeholder inicial para la seccion de documentacion. El objetivo ahora es
        asegurar que la navegacion ya representa una arquitectura real de contenido.
      </p>

      <section class="docs-page__section">
        <h2>Ruta</h2>
        <p>{{ route.path }}</p>
      </section>

      <section class="docs-page__section">
        <h2>Proposito de esta seccion</h2>
        <p>
          Aqui documentaremos como esta capacidad de Nuvex UI acelera la construccion de interfaces y
          como se integra con el resto del sistema de tema, layout y componentes.
        </p>
      </section>

      <section class="docs-page__section">
        <h2>Contenido sugerido</h2>
        <ul class="docs-page__list">
          <li>Que resuelve esta parte de la libreria.</li>
          <li>API y ejemplos minimos de uso.</li>
          <li>Buenas practicas y patrones recomendados.</li>
          <li>Relaciones con theme, utilities o layout cuando aplique.</li>
        </ul>
      </section>
    </div>
  </ECard>
</template>

<script setup lang="ts">
import { findNavigationItemByPath } from '~/navigation.config'

const route = useRoute()

const resolvedItem = computed(() => findNavigationItemByPath(route.path))

if (!resolvedItem.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Documentation page not found',
  })
}
</script>

<style scoped>
.docs-page {
  display: grid;
  gap: 1.5rem;
}

.docs-page__eyebrow {
  margin: 0;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
}

.docs-page__title {
  margin: 0;
}

.docs-page__lead {
  margin: 0;
  max-width: 62ch;
  opacity: 0.82;
}

.docs-page__section {
  display: grid;
  gap: 0.5rem;
}

.docs-page__section h2,
.docs-page__section p {
  margin: 0;
}

.docs-page__list {
  margin: 0;
  padding-left: 1.25rem;
}
</style>