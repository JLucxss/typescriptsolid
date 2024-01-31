type CartItem = { name: string, price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = [];
    private _orderStatus:  OrderStatus = 'open'

    addItem(item: CartItem): void{
        this._items.push(item)
    }

    removeItem(index: number): void{
        //Do indice que eu receber vou remover 1 elemento/item
        this._items.splice(index, 1)
    }

    total(): number{
            //+ faz a mesma coisa de Number()
        return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    get items(): Readonly<CartItem[]>{
        return this._items
    }

    get orderStatus(): OrderStatus{
        return this._orderStatus
    }

    checkout(): void {
        if(this.isEmpty()){
            console.log('Seu carrinho está vazio')
            return
        }

        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido com total de R$${this.total()} foi recebido`)
        this.saveOrder()
        this.clear()
    }

    isEmpty(): boolean{
        // if(this._items.length === 0) return true
        return this._items.length === 0;
    }

    sendMessage(msg: string): void{
        console.log('Mensagem enviada:', msg)
    }

    saveOrder(): void{
        console.log('Pedido salvo com sucesso')
    }

    clear(): void{
        console.log('Carrinho de compras foi limpo')
        this._items.length = 0
    }
}

const shoppingCart = new ShoppingCartLegacy()
shoppingCart.addItem({name: 'Camiseta', price: 49.9})
shoppingCart.addItem({name: 'Caderno', price: 9.9})
shoppingCart.addItem({name: 'Lapis', price: 1.59})

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout()
console.log(shoppingCart.orderStatus);
