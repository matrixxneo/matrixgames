// const textWelcome = document.getElementById('textWelcome');
const textName = document.getElementById("textName");
const textSecondary = document.getElementById("textSecondary");
let init = 1;
let init2 = 0;
let velocity = 50;
console.log(textName);
console.log(textSecondary);
let wordsName = "!🤓Hola, soy Matrix!";
let wordsSecondary =
  "Bienvenido a la Web donde puedes encontrar,filtrar o ver lascategorias de sus juegosfavoritos por plataforma, si necesitas de alguna información o juego que no se encuentre dentro de la base de datos, si es de su agrado escriba o llame al tel: #53405773 y será atendido rapidamente.";
console.log(wordsSecondary.length);

const mecanografiar = (textNam, textSecond) => {
  init++;
  let result = textNam.slice(0, init);
  textName.innerText = result;
  console.log(textNam.length);

  if (result.length === 20) {
    init2++;
    velocity = 30;
    let result2 = textSecond.slice(0, init2);
    textSecondary.innerText = result2;
    if (result2.length === 327) {
      return;
    }
  }

  setTimeout(() => mecanografiar(textNam, textSecond), velocity);
};

mecanografiar(wordsName, wordsSecondary);
