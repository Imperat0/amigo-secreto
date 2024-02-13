let amigos = [];

function adicionar() {
  let amigo = document.getElementById('nome-amigo');

  if(amigo.value == '') {
    alert('Precisa digitar um nome');
    return;
  }

  if(amigos.includes(amigo.value)) {
    alert('Nome já adicionado')
    return;
  }
  let listaAmigos = document.getElementById('lista-amigos');
  amigos.push(amigo.value);
  
  if(listaAmigos.textContent == '') {
    listaAmigos.textContent = amigo.value;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + ' , ' + amigo.value;
   }

   amigo.value = '';
}

function sortear() {
  if(amigos.length < 4) {
    alert('Adicione pelo menos 4 amigos')
    return;
  } 
    
  embaralha(amigos);
  let listaSorteio = document.getElementById('lista-sorteio');

  for(let i = 0; i < amigos.length; i++) {

    if(i == amigos.length - 1) {
      listaSorteio.innerHTML =  listaSorteio.innerHTML + amigos[0] + ' -->' + amigos[i + 0] + '<br>'
    } else {     
      listaSorteio.innerHTML =  listaSorteio.innerHTML + amigos[1] + ' -->' + amigos[i + 1] + '<br>'
    }

  }
}

function embaralha(listaAmigos) {
  for(let i = listaAmigos.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);

    [listaAmigos[i - 1], listaAmigos[indiceAleatorio]] =
    [listaAmigos[indiceAleatorio], listaAmigos[i - 1]];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}