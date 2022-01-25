// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte
// para a Terra. 
// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo 
// variável de até 5 segundos para que termine o envio. 
// Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const delay = () => Math.floor(Math.random() * 5000)
// valor variavel de até 5 segundos

const sendMarsTemperature = () => {
    const mnsg = `Mars temperature is: ${getMarsTemperature()} degree Celsius`
    setTimeout(() => console.log(mnsg) , delay())
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
