<template>
    <div> <!--O componente Vue pode possuir somente um elemnto Root por isso, o conteúdo deve ser envolvido por uma div -->
        <Reutilizacao />
        <h1>Olá Vue!</h1>
        <Reutilizacao />
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
        <MultiplosEventos />
        <Reutilizacao />
        <Reutilizacao />
        <Reutilizacao />
        <Reutilizacao />
    </div>
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue'
    import Reutilizacao from './Reutilizacao.vue'

    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
            Reutilizacao
        },
        data(){ //os dados definidos nessa função podem ser utilizados somente dentro do componente e não fora dele
            return {
                nome: "Matheus",
                profissao: "Programador"
            }
        }
    }
</script>