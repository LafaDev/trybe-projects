// Para os exercícios a seguir, use o seguinte código.

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const customerName = order.name;
    const deliveryPerson = order.order.delivery.deliveryPerson
    return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
  }
  
  customerInfo(order);
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
      let client = order.name;
      const pizzas = Object.keys(order.order.pizza) 
      let paymentTotal = order.payment.total
      paymentTotal -= 10;
      client = 'Luiz Silva'
      return `Olá ${client}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type}, é R$${paymentTotal},00.`
  
  }
  
  orderModifier(order);
  console.log(orderModifier(order));
//   Agora você vai fazer alguns exercícios de fixação.
//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
//   Note que o parâmetro da função já está sendo passado na chamada da função.
//   Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
//   Modifique o nome da pessoa compradora.
//   Modifique o valor total da compra para R$ 50,00. 