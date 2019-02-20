var birthday={
	getDisparityDate:function(timestamp){
		var theDate = new Date().getTime();
		console.log("1",theDate);
		theDate = theDate - timestamp;
		console.log("2",theDate);
		if(theDate / 86400 >0){
			return Math.floor(theDate/86400) + "天前";
		}
	}
}
Vue.directive('birthday',{
	bind:function(el,binding){
		el.innerHTML = birthday.getDisparityDate(binding.value);
	}
})