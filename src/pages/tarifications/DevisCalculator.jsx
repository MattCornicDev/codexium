import React, { useState } from "react";
import tarifications from "../../content_tarifications";

const DevisCalculator = () => {
    const [selected, setSelected] = useState([]);

    const toggleItem = (item) => {
        if (selected.includes(item)) {
            setSelected(selected.filter((i) => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    };

    const total = selected.reduce((acc, item) => {
        const price = item.price.replace("€", "").replace(" ", "").replace("–", "-");
        const [min] = price.split("-");
        return acc + parseInt(min);
    }, 0);

    return (
        <div className="calculator mt-5">
            <h3>Calculer votre devis</h3>
            <p>Sélectionnez les fonctionnalités souhaitées pour obtenir une estimation.</p>

            {tarifications.items.map((section, index) => (
                <div key={index} className="calc-section">
                    <h4>{section.category}</h4>

                    {section.details.map((item, idx) => (
                        <div key={idx} className="calc-item">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(item)}
                                    onChange={() => toggleItem(item)}
                                />
                                <span className="calc-name">{item.name}</span>
                                <span className="calc-price">{item.price}</span>
                            </label>
                        </div>
                    ))}
                </div>
            ))}

            <div className="calc-total">
                <h4>Total estimé :</h4>
                <div className="calc-total-amount">{total} €</div>
            </div>
        </div>
    );
};

export default DevisCalculator;
