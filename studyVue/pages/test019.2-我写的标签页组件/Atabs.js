Vue.component('tabs',{
	template:"#tabsTemplate",
	props:{
		value:""
	},
	data:function(){
		return{
			navList:[],
			currentValue:this.value,
		}
	},
	methods:{
		chooseThis:function(name){
			this.currentValue = name;
			this.updateNav()
		},
		tabClass:function(name){
			return [
				'tab',
				{
					'tab-active' : name == this.currentValue
				}
			]
		},
		getTabs:function(){
			return this.$children;
		},
		updateNav:function(){
			this.navList = [];
			var _this = this;
			this.getTabs().forEach(function(item,index){
				_this.navList.push({
					name : item.name || index,
					label : item.label
				});
				if(!item.name){
					item.name = index;
				}
			});
			this.updateStatus();
		},
		updateStatus:function(){
			var _this = this;
			this.getTabs().forEach(function(item,index){
				item.show = item.name === _this.currentValue;
			})
		}
	},
})