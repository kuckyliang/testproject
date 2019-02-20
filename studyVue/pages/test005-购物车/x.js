var app = new Vue({
	el:"#app",
	data:{
		list:[
			{
				id:1,
				name:'iphone7',
				price:6188,
				count:1,
			},{
				id:2,
				name:'iphoneX',
				price:8888,
				count:3,
			},{
				id:3,
				name:'iphoneXR',
				price:16666,
				count:9,
			},{
				id:4,
				name:'ipod',
				price:3000,
				count:6,
			},{
				id:5,
				name:'小米8',
				price:2699,
				count:2,
			},
		]
	},computed:{
		totalPrice:function(){
			var total = 0;
			for(var i = 0;i < this.list.length;i++){
				var item = this.list[i];
				total += item.price * item.count;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},methods:{
		countJia:function(index){
			this.list[index].count++;
		},
		countJian:function(index){
			this.list[index].count--;
		},deleteme:function(index){
			this.list.splice(index,1);
		}
	}
});