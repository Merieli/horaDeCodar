<template>
    <div>
        <h2>Meu Formulário:</h2>
        <form action="" @submit="enviarFormulario($event)">
            <!-- No método é passado como parâmetro o "$event" que representa o evento do Vue e permite que ele seja acessado pelo método-->
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">    
            </div>
            <Submit />
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data(){
        return {
            name: "",
            email: ""
        }
    },
    methods: {
        enviarFormulario(e){
            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log('Formulario enviado!');
            console.log('O nome é: ' + name);
            console.log('O email é: ' + email);

            //Ajax e inserção no banco de dados
        }
    }
}
</script>

<style  scoped>
    p{
        margin: 50px;
    }
</style>