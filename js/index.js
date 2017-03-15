window.onload = function (){
	new Vue({
		el:'#nav',
        data:{
            navData: [],
        },
        mounted:function(){
        	this.getData();
        },
        methods:{
            getData:function(){
                var self = this;
                this.$http.jsonp('http://mmb.ittun.com/api/getindexmenu')
                .then(function(res){
                    console.log(res.data);
                },function(res){
                    console.log(res.status);
                });
            }
        }
	});
}