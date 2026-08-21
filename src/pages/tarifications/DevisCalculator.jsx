import React, { useState } from "react";
import tarifications from "../../content_tarifications";

const DevisCalculator = () => {
    const [selected, setSelected] = useState([]);

    const isPackComplet = selected.some(item => item.name === "Application web professionnelle complète");

    const toggleItem = (item) => {
        const isMaintenance = item.name.toLowerCase().includes("maintenance");
        const isPack = item.name === "Application web professionnelle complète";

        // Si on clique sur Pack complet
        if (isPack) {
            // Si déjà sélectionné → on le retire
            if (isPackComplet) {
                setSelected([]);
            } else {
                // On sélectionne uniquement Pack complet + les maintenances déjà cochées
                const maintenances = selected.filter(i =>
                    i.name.toLowerCase().includes("maintenance")
                );
                setSelected([item, ...maintenances]);
            }
            return;
        }

        // Si Pack complet est actif, on ne permet que la maintenance
        if (isPackComplet && !isMaintenance) {
            return; // On ignore le clic
        }

        // Logique normale pour les autres items
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

                    {section.details.map((item, idx) => {
                        const isMaintenance = item.name.toLowerCase().includes("maintenance");
                        const isPack = item.name === "Application web professionnelle complète";

                        const disabled =
                            isPackComplet && !isMaintenance && !isPack;

                        return (
                            <div key={idx} className={`calc-item ${disabled ? "disabled" : ""}`}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(item)}
                                        disabled={disabled}
                                        onChange={() => toggleItem(item)}
                                    />
                                    <span className="calc-name">{item.name}</span>
                                    <span className="calc-price">{item.price}</span>
                                </label>
                            </div>
                        );
                    })}
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
