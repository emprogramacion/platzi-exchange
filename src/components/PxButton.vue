<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <!-- Con este slot recibimos código HTML del componente padre, en este caso recibimos <span> Detalle </span>
    y se mostrará en este componente -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  methods: {
    //Creamos un método llamado buttonClick que emite un evento custom-click
    buttonClick() {
      /*Emitimos un evento llamado custom-click también, para que el componente padre al utilizar el botón pueda manejar el evento interno del botón */
      this.$emit("custom-click");
    },
  },
};
</script>
