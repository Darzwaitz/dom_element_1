function init(){
			const changePar = document.getElementById('par1');
			changePar.innerHTML = 'paragraph CHANGED';	//change paragraph text with Id

			changePar.setAttribute('class','par1Clr'); //change paragraph colour with class
			const getId = changePar.getAttribute('id');
			console.log(getId); //console log Id attribute of element

		}

		window.onload = init; //if for some reason JS code needs to be placed before the page renders
		// the init function will wait until all elements are loaded on the page before running the script
		