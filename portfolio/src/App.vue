<script setup lang="ts">
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-spinner-bars
            color="white"
            size="2em"
          />
          DominicW.xyz
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <!-- 
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
        -->
      </q-tabs>
    </q-header>

    <q-page-container>
      <q-parallax :height="1000" :speed="0.5">
      <template v-slot:media>
        <img src="./assets/Images/antelope1.jpeg">
      </template>
      <h2 class="text-white">
        Hi, I'm Dominic
      </h2>
      <q-chip size="20px" icon="bi-cpu" color="primary" text-color="white">Software Engineering Intern @ Brigade Capital Management</q-chip>
      <br>
      <q-chip size="20px" icon="bi-book" color="secondary" text-color="white">Cybersecurity Major & Computer Science Minor at Stevens Institute of Technology</q-chip>
      </q-parallax>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-tabs align="center">
            <q-btn-group push>
              <q-btn push size="20px" label="Github" icon="bi-github" href="https://github.com/W-Dominic" />
              <q-btn push size="20px" label="LinkedIn" icon="bi-linkedin" href="https://www.linkedin.com/in/dominic-wojewodka/" />
            </q-btn-group>
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped>

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

</style>
