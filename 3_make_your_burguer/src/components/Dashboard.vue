<template>
    <div id="burger-table">
        <Message :msg="msg" v-show="msg" />
        <div>
            <div id="burger-table-heading">
                <div id="order-id">#</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                <div class="order-numbaer">{{ burger.id }}</div>
                <div>{{ burger.nome }}</div>
                <div>{{ burger.pao }}</div>
                <div>{{ burger.carnes }}</div>
                <div>
                    <ul>
                        <li v-for="(opcional, index) in burger.opcionais" :key="index">
                            {{ opcional }}
                        </li>
                    </ul>
                </div>
                <div class="actions">
                    <select name="status" class="status" @change="updateBurger($event, burger.id)">
                        <option value="">Selecione</option>
                        <option :value="state.tipo" v-for="state in status" :key="state.id" :selected="burger.status == state.tipo">
                            {{ state.tipo }}
                        </option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';


export default {
    name: 'Dashboard',
    data(){
        return{
            burgers: null,
            burger_id: null,
            status: [],
            msg: null
        }
        
    },
    components: {
        Message
    },
    methods:{
        async getPedidos(){
            const req = await fetch("http://localhost:3000/burgers");
            const data = await req.json();

            this.burgers = data;

            this.getStatus();
        },
        async getStatus(){
            const req = await fetch("http://localhost:3000/status");
            const data = await req.json();

            this.status = data;
        },
        async deleteBurger(id) {
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: 'DELETE'
            }); //forma de fazer o delete disponibilizada pelo JSON server
            const res = await req.json();

            this.msg = `Pedido removido com sucesso!`;

            setTimeout(() => this.msg = "", 3000);

            this.getPedidos();
        },
        async updateBurger(event, id){
            const option = event.target.value;
            const dataJson = JSON.stringify({ status: option });

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: dataJson
            })

            const res = await req.json();

            this.msg = `O pedido N° ${res.id} foi atualizado para ${res.status}!`;

            setTimeout(() => this.msg = "", 3000);
        }
    },
    mounted(){
        this.getPedidos();
    }
}
</script>

<style scoped>
    #burger-table{
        max-width: 1100px;
        margin: 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row{
        display: flex;
        flex-wrap: nowrap;
    }

    #burger-table-rows{        
        flex-direction: column;
    }

    #burger-table-heading{
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    #burger-table-heading div,
    .burger-table-row div{
        width: 25%;
    }

    .burger-table-row{
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number{
        width: 5%;
    }

    .actions{
        display: flex;
        align-items: center;
    }

    select{
        padding: 12px 6px;
        margin-right: 12px;
    }

    .delete-btn{
        background-color: #222;
        color: #fcbA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .delete-btn:hover{
        background-color: transparent;
        color: #222;
    }
</style>