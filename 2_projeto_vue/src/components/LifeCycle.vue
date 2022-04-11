<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
//life cycle hook - eventos que acontecem em determinadas etapas da aplicação

export default {
    name: 'LifeCycle',
    data() {
        return {
            nome: 'Ainda não sei'
        }
    },
    created() { //life cycle hook que é executado a partir do momento que o componente é criado
        setTimeout(() => this.nome = "Matheus", 1000);

        this.lifeCycle() //também é possível executar métodos personalizados dentro do life cycle
    },
    mounted(){ //life cycle hook que é executado a partir do momento que o componente é montado
        setTimeout(() => this.nome = "Pedro", 2000); 
        this.lifeCycle() 
    },
    methods: {
        lifeCycle() {
            console.log("Executou")
        }
    }
}
</script>

<style>

</style>