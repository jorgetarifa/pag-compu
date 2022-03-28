


 const calcular = () => {     
    
    const precio = 820000;
    let cantidad = parseFloat(document.getElementById("input-cantidad").value);
    let text1,text2,text3,text4;
    let saldoParcial = precio * cantidad;
    const bloquearOrden = document.querySelector('#orden-compra').style.display = 'none';
    const mostrarOrden = document.querySelector('#orden-compra').style.display = 'block';
    const mostrarInput = document.querySelector('.div-calcular').style.display = 'block';
    const bloquearInput = document.querySelector('.div-calcular').style.display = 'none';
    
  
      
     
   switch(true) {
       case cantidad < 0 || cantidad === 0:
          alert('Ingresa un monto valido')
          document.querySelector('#orden-compra').style.display = 'none';
          document.querySelector('.div-calcular').style.display = 'block';  

       break;
       case cantidad === 1:
         text1 = saldoParcial
         text2 = "0"
         text3 = saldoParcial
         text4 = "No hay descuento para esta compra"   
            
       break;
       case cantidad === 2 || cantidad <= 4:
         text1 = saldoParcial
         text2 = saldoParcial * 0.15
         text3 = saldoParcial - (saldoParcial * 0.15)
         text4 = "El descuento para esta compra es del 15%"  
   
       break;
       case cantidad === 5 || cantidad <= 6:
         text1 = saldoParcial
         text2 = saldoParcial * 0.25
         text3 = saldoParcial - (saldoParcial * 0.25)
         text4 = "El descuento para esta compra es del 25%" 
       
       break;
       case cantidad === 7 || cantidad <= 12:
         text1 = saldoParcial
         text2 = saldoParcial * 0.35
         text3 = saldoParcial - (saldoParcial * 0.35)
         text4 = "El descuento para esta compra es del 35%" 
       
       break;
       default:
         text1 = saldoParcial
         text2 = "0"
         text3 = saldoParcial
         text4 = "No hay descuento para esta compra"   
          

         
    }
          document.getElementById("valor-compra").innerHTML = text1; 
          document.getElementById('valor-descuento').innerHTML = text2;
          document.getElementById('valor-total').innerHTML = text3;
          document.querySelector('.order-result').innerHTML = text4;
      //  document.querySelector('.div-calcular').style.display = 'none';
      //  document.querySelector('#orden-compra').style.display = 'block';

           
 }

