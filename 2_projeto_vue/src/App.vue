<!--O arquivo APP.vue apesar de ser o root da aplicação também é tratado como componente pelo Vue, e possibilita o uso das mesmas funcionalidades de um componente -->
<template>
    <div>
        <Header :esta_logado="true" />
        <PrimeiroComponente /> <!--Exibe o conteúdo do componente Vue -->
        <!-- <primeiro-componente />  Outra forma que também exibe o conteúdo do componente Vue -->
        <p class="paragrafo-pai">O dado de app é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa />
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import PrimeiroComponente from './components/PrimeiroComponente.vue' //importa o componente
    import LifeCycle from './components/LifeCycle.vue'
    import Pessoa from './components/Pessoa.vue'
    

    export default {
        name: 'App', //identifica para o Vue que este é o componente de nome App
        components: { //objeto que determina quais componentes o app vai possuir
            PrimeiroComponente,
            LifeCycle,
            Pessoa,
            Header
        },
        data(){
            return {
                testando: "Teste"
            }
        }
    }
</script>

<style>
    body{
        background-color: #333;
        color: #fff;
    }

    a{
        color: red;
    }

    .teste{
        background-color: black;
    }
</style>