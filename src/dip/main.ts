/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/
import { ShoppingCart } from "./classes/shopping-cart"
import { Order } from "./classes/order"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { NoDiscount, TenPercentDiscount } from "./classes/discount"
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer"
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol"

// const fiftyPercentDiscount = new FiftyPercentDiscount()
const tenPercentDiscount = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(tenPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer('Luiz', 'Otavio', '000-000-000.00', '')
const enterpriseCustomer = new EnterpriseCustomer('Udemy', '00-000-000/0000-00')

class MessagingMock implements MessagingProtocol{
    sendMessage(msg: string): void {
        console.log('A mensagem foi enviada pelo MOCK')
    }
}

const messagingMock = new MessagingMock()

const order = new Order(shoppingCart, messagingMock, persistency, enterpriseCustomer)

shoppingCart.addItem(new Product ('Camiseta', 49.91))
shoppingCart.addItem(new Product ('Caderno', 9.9123))
shoppingCart.addItem(new Product ('Lapis', 1.59))

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout()
console.log(order.orderStatus);
