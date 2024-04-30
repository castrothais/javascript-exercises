/* 1 - Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para:
 Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'. */

/*  2 - Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total
de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00. */

const order = {
    name: "Rafael Andrade",
    phoneNumber: "11-98763-1416",
    address: {
        street: "Rua das Flores",
        number: "389",
        apartment: "701",
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
            },
        },
        drinks: {
            coke: {
                type: "Coca-Cola Zero",
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: "Ana Silveira",
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (fullOrder) => `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`;

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
/*     Fazendo uma cópia do objeto order para eliminar o aviso:
"Assignment to property of function parameter 'fullOrder'";
 */
    const orderCopy = { ...fullOrder };
    orderCopy.name = "Luiz Silva";
    orderCopy.payment.total = 50;

    const namesPizzas = Object.keys(orderCopy.order.pizza).join(", ");
    return `Olá, ${orderCopy.name}, o valor total de seu pedido de ${namesPizzas} e ${orderCopy.order.drinks.coke.type} é R$${orderCopy.payment.total},00.`;
};

console.log(orderModifier(order));
