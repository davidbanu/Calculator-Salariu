let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');

btnOne.addEventListener('click', function() {
  this.style.background = "darkblue";
  btnTwo.style.background = "#007bff";
  
  document.getElementById('txt').style.display ='none';
  document.getElementById('val').value = "";
  document.getElementById('hiddenText').style.display ='block';
  document.getElementById('nb').innerHTML ='net';
  document.getElementById('bn').innerHTML = 'brut';

  const btnCalc = document.getElementById('btnCalc');
  btnCalc.addEventListener('click', function() {
    document.getElementById('txt').style.display ='block';
    const res = document.getElementById('res');
    const net = document.getElementById('val').value;
    const imp = (net / (1 - 1/10));
    const q = imp / (1 - 35/100);
    const result = Math.round(q);
    res.innerHTML = Math.round(result);
    const cas = document.getElementById('cas');
    const cass = document.getElementById('cass');
    const cam = document.getElementById('cam');
    const iv = document.getElementById('iv');
    cas.innerHTML = Math.round(result * 25 / 100);
    cass.innerHTML = Math.round(result * 10 / 100);
    iv.innerHTML = Math.round((result - Math.round(result * 25 / 100) - Math.round(result * 10 / 100)) * 10 / 100);
    cam.innerHTML = Math.round(result * 2.25 / 100);
});
});

btnTwo.addEventListener('click', function() {
  this.style.background = "darkblue";
  btnOne.style.background = "#007bff";

  document.getElementById('txt').style.display ='none';
  document.getElementById('val').value = "";
  document.getElementById('hiddenText').style.display ='block';
  document.getElementById('nb').innerHTML ='brut';
  document.getElementById('bn').innerHTML = 'net';

  const btnCalc = document.getElementById('btnCalc');
  btnCalc.addEventListener('click', function() {
    document.getElementById('txt').style.display ='block';
    const res = document.getElementById('res');
    const val = document.getElementById('val').value;
    const x = val * 35 / 100;
    const y = (val - x) * 10 / 100;
    const result = val - x - y;
    res.innerHTML = Math.round(result); 
    const cas = document.getElementById('cas');
    const cass = document.getElementById('cass');
    const cam = document.getElementById('cam');
    const iv = document.getElementById('iv');
    cas.innerHTML = Math.round(val * 25 / 100);
    cass.innerHTML = Math.round(val * 10 / 100);
    iv.innerHTML = Math.round((val - Math.round(val * 25 / 100) - Math.round(val * 10 / 100)) * 10 / 100);
    cam.innerHTML = Math.round(val * 2.25 / 100);
  });
});