import '../App.css'
import CardsBeer from './containers/CardsBeer';
import ItemCount from './itemCount';

function ItemListContainer() {
    return (
        <div className="cards"> 
        <CardsBeer
        image='https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-patagonia-ipa-24-7-410-siempreencasa_1_1000x.png?v=1636633017'
        name='IPA'
        description='Cerveza IPA 300CC'
        />
        <CardsBeer
        image='https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/imperial-lager-7101-8a950712cdcecf16f916149739874009-1024-1024.png'
        name='APA'
        description='Cerveza APA 300CC'
       
        />
        <CardsBeer
        image = 'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-quilmes-stout-473-siempreencasa_1_1000x.png?v=1636550840'
        name='STOUT'
        description='Cerveza STOUT 300CC'
        />
        <CardsBeer
        image = 'https://cdn.shopify.com/s/files/1/1103/5152/products/Pack24CervezaPatagoniaAmberLager410ml.png?v=1644424343/'
        name='AMBER'
        description='Cerveza AMBER 300CC'
        />

        </div>
         
            
    )
}

export default ItemListContainer;