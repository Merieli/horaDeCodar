<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro()">Ativar múltiplos eventos</button> <!--é possível ativar diversos métodos em um único evento usando a virgula -->
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default {
    name: "MultiplosEventos",
    data() {
        return {
            multiplos_eventos: "",
            txt1: "Primeiro evento",
            txt2: "Segundo evento"
        }
    },
    methods: {
        primeiro(txt, e){ //o primeiro parametro passado é a string que será exibida
            this.multiplos_eventos = txt
        },
        segundo(txt, e){
            setTimeout(() => this.multiplos_eventos = txt, 500);
        },
        terceiro(){
            setTimeout(() => this.multiplos_eventos = "", 1500);
        }
    }
}
</script>

<style escoped>
    div{
        margin: 10px;
    }
</style>