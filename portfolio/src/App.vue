<script setup lang="ts">
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
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
      
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-tabs align="center">
            <q-icon name="account_box" size="50px" />
            <q-btn-group push>
              <q-btn push label="Github" icon="timeline" />
              <q-btn push label="LinkedIn" icon="visibility" />
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
