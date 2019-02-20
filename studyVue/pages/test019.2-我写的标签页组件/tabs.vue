<template>
	<div>
		<div class="tabs">
			<div v-for="(items,index) in navList" :class="tabClass(items.name)" @click="chooseThis(items.name)">{{items.label}}xx</div>
		</div> 
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
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
</script>

<style>
</style>