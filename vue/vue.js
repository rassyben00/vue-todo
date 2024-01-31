new Vue({
    data(){
        return{
            message:"",
            editing:false,
            editingID: 0,
            lists:["FaceBook","Google"]

        }
    },
    methods:{
        add:function(){
            if(this.message!=""){
                if(this.editing){
                    this.lists[this.editingID]=this.message
                    this.message=""
                    this.editing=false
                }
                else{
                    this.lists.push(this.message)
                    this.message=""
                }
            }
        },
        remove:function(index){
            this.lists.splice(index, 1);
        },
        edit:function(index){
            this.message=this.lists[index],
            this.editing=true, this.editingID=index

        }
    }
}).$mount("#app")