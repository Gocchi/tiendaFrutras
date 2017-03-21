function agregarFruta(){
    var frutaAdd=document.getElementById("frutaAdd").value;
    if(frutaAdd.length>0)
    {
      var fruta=document.createElement('li');
      fruta.id=frutaAdd;
      fruta.innerHTML=frutaAdd;
      document.getElementById("nuevaLista").appendChild(fruta);
    }
    return false;
}