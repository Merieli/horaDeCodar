const MyNameApp = {
    data() {
        return {
            name: "", //exporta o dado name que será disponibilizado para o HTML
            age: 27,
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name); //this se refere aos atributos inseridos em data no Vue

            this.name = this.input_name; //atribuir para name o valor inserido no input
        }
    }
}

//para instanciar o App Vue dentro do HTML:
Vue.createApp(MyNameApp).mount("#app"); //mount - monta o app no elemento de id app