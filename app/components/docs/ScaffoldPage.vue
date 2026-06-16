<template>
  <ECard>
    <article class="docs-page">
      <p class="docs-page__eyebrow">{{ section }}</p>
      <h1 class="docs-page__title">{{ title }}</h1>
      <p class="docs-page__lead">
        Esta pagina esta creada como base inicial para documentar este tema.
        Antes de implementar contenido definitivo, validaremos prioridad,
        alcance y ejemplos que debe incluir.
      </p>

      <section class="docs-page__section">
        <h2>Ruta</h2>
        <p>{{ docPath }}</p>
      </section>

      <section class="docs-page__section">
        <h2>Estado</h2>
        <p>Pendiente de definicion de contenido.</p>
      </section>

      <section class="docs-page__section">
        <h2>Checklist de implementacion</h2>
        <ul class="docs-page__list">
          <li>Definir objetivo funcional de la pagina.</li>
          <li>Agregar API y props relevantes.</li>
          <li>Incluir ejemplos minimos y avanzados.</li>
          <li>Documentar buenas practicas y accesibilidad.</li>
        </ul>
      </section>
    </article>
  </ECard>
</template>

<script setup lang="ts">
defineProps<{
  section: string
  title: string
  docPath: string
}>()
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
