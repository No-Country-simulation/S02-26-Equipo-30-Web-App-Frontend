import './HorseCard.css'
export default function HorseCard({name, image, location, price}) {
    return(
            <article>
                <img className='horse-card_img' src='{image}' alt='{name}' />
                <div className='horse-card_body'>
                    <h3 className='horse-card_title'>{name}</h3>
                    <p className='horse-card_location'>{location}</p>
                    <p className='horse-card_price'>{price}€</p>
                </div>
            </article>
    );
}