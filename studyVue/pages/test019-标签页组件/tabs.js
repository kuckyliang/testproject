Vue.component('tabs',{
	template:"#tabsTemplate",
	data:function(){
		return {
			navList:[],
			currentValue:this.value,
		}
	},
	props:{
		value:{
			type:[String,Number]
		}
	},
	watch:{
		value:function(val){
			console.log("value==>",this.value)
			this.currentValue = val;
		},
		currentValue:function(){
			this.updateStatus();
		}
	},
	mounted:function(){
		console.log("value ==>",this.vv);
	},
	methods:{
		tabCls:function(item){
			return [
				'tabs-tab',
				{
					'tabs-tab-active':item.name === this.currentValue
				}
			]
		},
		handleChange:function(index){
			var nav = this.navList[index];
			var name = nav.name;
			this.currentValue = name;
			this.$emit("input",name);
			this.$emit("on-click",name);
		},
		getTabs:function(){
			return this.$children.filter(function(item){
				return item.$options.name === 'pane';
			});
		},
		updateNav:function(){
			console.log("执行了一次updateNav");
			this.navList = [];
			var _this = this;
			this.getTabs().forEach(function(pane,index){
				_this.navList.push({
					label:pane.label,
					name:pane.name || index,
				});
				if(!pane.name) pane.name = index;
				if(index === 0){
					if(!_this.currentValue){
						_this.currentValue == pane.name || index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus:function(){
			var tabs = this.getTabs();
			var _this = this;
			tabs.forEach(function(tab){
				return tab.show = tab.name === _this.currentValue;
			})
		}
	}
})