<template>
    <div> <!-- O $emit chama um método determinado entre parenteses -->
        <button @click="$emit('mudarImagem')">Trocar imagem de perfil</button>
    </div>
</template>

<script>
export default {
    name: 'MudarImagem',
    emits: ['mudarImagem'] //o emits configura o evento que o componente está emitindo
}
</script>

<style>

</style>