var imgAnim=new	Array()
		var imgActual=-1
		imgAnim[0]=new Image()
		imgAnim[0].src="img/senati.jpeg"
		imgAnim[1]=new Image()
		imgAnim[1].src="img/configred.jpeg"
		imgAnim[2]=new Image()
		imgAnim[2].src="img/instalwindows.jpeg"
		imgAnim[3]=new Image()
		imgAnim[3].src="img/excel.jpeg"
		imgAnim[4]=new Image()
		imgAnim[4].src="img/ilustracion.jpg"


		function Animar()
		{
			imgActual++
			if (imgActual>=imgAnim.length)
				imgActual=0;
			document.images.imaAnimada.src=imgAnim[imgActual].src
			setTimeout("Animar()",2000)
		}
		setTimeout("Animar()",2000)
