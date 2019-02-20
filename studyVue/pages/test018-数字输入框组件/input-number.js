
function isValueNumber(value){
	return true;
}

Vue.component('input-number',{
	template:'#my-component',
	props:{
		max:{
			type:Number,
			defalue:Infinity
		},
		min:{
			type:Number,
			default:-Infinity
		},
		step:{
			type:Number,
			default:Infinity
		},
		value:{
			type:Number,
			default:0
		}
	},
	data:function(){
		return{
			currentValue:this.value
		}
	},
	watch:{
		currentValue:function(val){
			console.log("监听到currentValue的变动,修改文本框的input值,并触发文本框的on-change事件(当前没有onchange事件,作为预留)");
			this.$emit('input',val);
			this.$emit('on-change',val);
		},
		value:function(val){
			console.log("监听到文本框的值变动,修改当前currentValue的值");
			this.updateValue(val);
		}
	},
	methods:{
		keyup:function(){
			if(event.key == "ArrowUp") this.handleUp();
			else if(event.key == "ArrowDown") this.handleDown();
		},
		handleDown:function(){
			if(this.currentValue <= this.min + this.step - 1) return;
			this.currentValue -= this.step;
		},
		handleUp:function(){
			if(this.currentValue >= this.max - this.step + 1) return;
			this.currentValue += this.step;
		},
		updateValue:function(val){
			if (val > this.max) val = this.max;
			if (val < this.min) val = this.min;
			this.currentValue = val;
		},
		handleChange:function(event){
			var val = event.target.value.trim();
			var max = this.max;
			var min = this.min;
			
			if(isValueNumber(val)){
				val = Number(val);
				this.currentValue = val;
				
				if(val > max){
					this.currentValue = max;
				}else if(val < min){
					this.currentValue = min;
				}
				
			}else{
				event.target.value = this.currentValue;
			}
			
		}
	},
	mounted:function(){
		this.updateValue(this.value)
	}
});