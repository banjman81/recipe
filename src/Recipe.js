import Ract from  'react';

function Recipe(props){ // props can also be named individually by deconstructing it
    return(
        <div className="card">
            <h4>{props.name}</h4>
            <p>{props.calories}</p>
            <img src={props.image} alt="" />
            <ul className="ing-list">
                {props.ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Recipe;