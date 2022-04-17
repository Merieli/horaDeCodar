<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <!-- É possível passar um valor do componente pai para ser exibido no componente filho inserindo o nome de uma variável data para o valor da Propriedade de um componente.
            O email que estiver em data é enviado via props para o componente: ":email="email""
         -->
        <Info :email="email" :esta_trabalhando=false /> <!--nomes de propriedades devem ser diferentes das propriedades dos componentes para que não hajam conflitos -->
        <!--quando uma props for booleana é preciso passá-la com o binding ":" para que o vue entenda-->
        <Form />
    </div>
</template>

<script>
import Info from './Info.vue' //como Info está na mesma pasta uso o ./
import Form from './Form.vue'

export default {
    name: 'Pessoa',
    components: {
        Info,
        Form
    },
    data() {
        return {
            nome: "Matheus",
            email: 'matheus@email.com'
        }
    }
}
</script>

<style>

</style>