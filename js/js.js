window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName('audio')[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	audio.addEventListener('ended',function(){
		music.setAttribute('class','');
	},false);

	// music.onclick = function(){
		// if(audio.paused){
			// audio.play();
			// this.setAttribute('class','play');
			// this.style.animationPlayStatus = "running";
			// this.style.webkitAnimationPlayStatus = "running";
		// }
		// else{
			// audio.pause();
			// this.setAttribute('class','');
			// this.style.animationPlayStatus = "paused";
			// this.style.webkitAnimationPlayStatus = "paused";
		// }
	// }
	music.addEventListener('touchstart',function(event){
        if(audio.paused){
			audio.play();
			this.setAttribute('class','play');
			// this.style.animationPlayStatus = "running";
			// this.style.webkitAnimationPlayStatus = "running";
		}
		else{
			audio.pause();
			this.setAttribute('class','');
			// this.style.animationPlayStatus = "paused";
			// this.style.webkitAnimationPlayStatus = "paused";
		}
	},false);

	page1.addEventListener('touchstart',function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%"; 

		
	},false)

	page2.addEventListener('touchstart',function(event){
         setTimeout(function(){
                page2.setAttribute('class','page fadeOut');
                page3.setAttribute('class','page fadeIn');
			},5500);
	},false)
}