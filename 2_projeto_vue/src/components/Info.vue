<template>
    <div>
        <p>{{ compEmail }} - {{ email }}</p>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p> <!--Se a propriedade passada para if for true irá exibir a tag html -->
        <p v-else>Estou em busca de novas oportunidades!</p><!--o v-else deve vir sempre abaixo do v-if para funcionar e estar conectado com ele -->
        <p>Utilizo as seguintes tecnologias para back-end:</p>
        <ul> 
            <!-- o atributo key é necessário para o for-->
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                {{ technology }}
            </li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id"> <!--Nesse caso pelo array frontend_tecnologies possuir dados em formato objeto, cada indice possui um id e posso usar o key sobre esse id -->
                {{ technology.language }}
            </li>
        </ul>
       <!-- <p v-if="4 > 2">Testando</p> //dentro das aspas de v-if tudo é JS portanto posso usar suas funcionalidades -->
       <div>
           <button @click="showEmail">{{ textoBotao }} </button>
       </div>
       <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
       <p class="teste">Para acessar meu portifólio <a v-bind:href="meu_link">basta clicar aqui</a></p>
       <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'

export default {
    name: 'Info',
    components: {
        Picture
    },
    props: { //ao criar props em um componente é possível utilizá-la na tag do componente 
        email: String, //pode ser definido o tipo da varivel que será um propriedade
        esta_trabalhando: Boolean
    },
    data(){
        return {
            mostrar_email: false,
            meu_link: 'https://google.com/',
            textoBotao: "Mostrar e-mail",
            backend_technologies: ["JavaScript", "PHP", "Python"],
            frontend_technologies: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'Vue'}
            ]
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email) {
                this.textoBotao = 'Mostrar e-mail'
            } else{
                this.textoBotao = 'Esconder e-mail'
            }
        }
    }
}
</script>

<style>
    /* Também é possível estilizar elementos pai com CSS Global, por isso ele idepende da hirerquia do componente, mas isso não deve ser feito*/
    /* .paragrafo-pai{
        color: red;
    }*/
</style>