<template>
    <div>
        <v-footer
        :inset="footer.inset"
        app
        >
        <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
      footer: {
        inset: true,
      },
    }),
}
</script>