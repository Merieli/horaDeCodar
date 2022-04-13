<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <!--Na chamada do componente o evento emitido deve ser chamado com @ e com sintaxe diferente do "camelcase usado na sua criação", usando palavras separadas por traço-->
        <MudarImagem @mudar-imagem="trocarImagem" />
        <!-- Dessa forma quando o evento ocorre no componente filho é acionado o método contido no componente pai-->
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue';

export default {
    name: 'Picture',
    components: {
        MudarImagem
    },
    data() {
        return { 
            avatar: '/img/avatar.png',
            descricao: 'Matheus Battisti'
        }
    },
    methods: {
        trocarImagem() {
            this.avatar = '/img/avatar2.png'
        }
    }
}
</script>

<style>

</style>