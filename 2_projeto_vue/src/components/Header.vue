<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
        <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Header',
    props: ["esta_logado"] //para inserir props em formato de array não é possível definir o tipo de dado da Prop
}
</script>
<!-- o atributo scoped na tag style determina que os estilos ali definidos não vazam para toda aplicação-->
<style scoped>
    ul{
        list-style: none;
        display: flex;
        background-color: #111;
    }

    li{
        margin-right: 10px;
    }

    a{
        color: #ddd;
        text-decoration: none;
        transition: .5s;
    }

    a:hover{
        color: turquoise;
    }
</style>