	function api_pesquisa_endereco(url){
			let request = new XMLHttpRequest;
		request.open('GET', 'https://ws.apicep.com/cep/' + document.getElementById('input_cep').value + '.json')
			request.send()


			request.onreadystatechange = () =>{
			
			if (request.readyState ==4 && request.status == 200 ) {
				endereco = request.responseText;
				endereco = JSON.parse(endereco);
				x = document.getElementById('endereco').value = endereco.address
				document.getElementById('bairro').value = endereco.district
				document.getElementById('cidade').value = endereco.city
				document.getElementById('uf').value = endereco.state
				console.log(endereco)

			}
			if (endereco.ok ==false ) {
				document.getElementById('div_error').innerHTML = endereco.message
			}

			}

		}