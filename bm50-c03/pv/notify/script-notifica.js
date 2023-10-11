setInterval(function(){
		Lobibox.notify("info", {
			title: termoRandom("NÃO PERCA TEMPO, ESTÁ ACABANDO."),
			msg: "Últimas 21 unidades. Compre Agora!"
		}); }
, 45000);
setInterval(function(){
	var comprandoAgora = Math.floor(Math.random() * (7 - 1)) + 1;
	if (comprandoAgora % 2 == 0){
		comprandoAgora = comprandoAgora+1;
	}
	if(comprandoAgora == 1){
		comprandoAgora = comprandoAgora+" pote";
	}else{
		comprandoAgora = comprandoAgora+" potes";
	}
	Lobibox.notify("info", {
		title: termoRandom("|Victor,Gabriel,Pedro,Nicolas,Fernando,Fabiano,Manuel,João Carlos,Richard,Maurício,Bruno,Antôni,Hélio,Marcel,Kauan,Renato,Carlos,Pedro,Alexandro,Álvares,Abreu,Abimael,Amaral,Adson,Davi,Ulisses,Miguel,Otávio,Bernardo,Rodrigo,Diego,Douglas,Camilo,Paulo,Kaian,Henrique,Denir,Alberto,Denilson,Fabricio,Marcos,Adalto,Francisco,Fernando,Joir,Joabe,Araujo,Jair| acabou de comprar "+comprandoAgora+"!"),
		msg: "Últimas unidades. Compre Agora!"
	}); }
, 30000);