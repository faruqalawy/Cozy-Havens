import { useEffect, useState } from 'react';
import data from '../json/landingPage.json';

// Hook untuk mendapatkan properti dari kategori
export function useCategoriesProperties(propertyName) {
    const [categoriesProperty, setCategoriesProperty] = useState(null);
    const [error, setError] = useState(null);

    const categories = data.categories;

    useEffect(() => {
        const loadProperties = () => {
            try {
                for (const category of categories) {
                    const foundProperty = category.items.find(item => item.name === propertyName);
                    if (foundProperty) {
                        setCategoriesProperty(foundProperty);
                        break;
                    }
                }
            } catch (err) {
                setError(err);
            }
        };

        loadProperties();
    }, [propertyName, categories]);

    return { categoriesProperty, error };
}

// Hook untuk mendapatkan properti dari mostPicked
export function useMostPickedProperties(propertyName) {
    const [mostPickedProperty, setMostPickedProperty] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMostPickedProperties = () => {
            const mostPicked = data.mostPicked;
            
            try {
                const property = mostPicked.find(property => property.name === propertyName);
                setMostPickedProperty(property);
            } catch (err) {
                setError(err);
            }
        };

        loadMostPickedProperties();
    }, [propertyName]);

    return { mostPickedProperty, error };
}
