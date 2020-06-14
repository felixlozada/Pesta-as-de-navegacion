let pestañas = document.querySelectorAll('nav li');
let active = document.querySelector('.active');
let info = document.querySelectorAll('.info');

pestañas.forEach((btn)=>{
	btn.addEventListener('click', ()=>{
		active.classList.remove('active');
		
		btn.classList.add('active');

		active = document.querySelector('.active');

		let id = btn.getAttribute('data-id');

		for(i=0; i < info.length; i++){
			if (info[i].getAttribute('data-id') == id) {
				info[i].classList.remove('oculto');
			}else{
				info[i].classList.add('oculto');
			}
		}
	});
});