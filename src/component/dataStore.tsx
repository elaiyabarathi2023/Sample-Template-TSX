import DataSingleton from "./sample";

// Define the CategoryData type
interface CategoryData {
    // Define the structure of your CategoryData type
    // For example:
    name: string;
    version: string;
    // ... other properties
}

// Retrieve the singleton instance
const dataSingleton = DataSingleton.getInstance();

// Get the data object
const data = dataSingleton.getData();

// Display all categories and subcategories
Object.keys(data.categories).forEach(category => {
    console.log(`Category: ${category}`);
    const subcategories = data.categories[category];

    // Use type assertion to inform TypeScript about the expected type
    if (typeof subcategories === 'object' && subcategories !== null) {
        Object.keys(subcategories).forEach(subcategory => {
            console.log(`  Subcategory: ${subcategory}`);
            const technologies = (subcategories as Record<string, CategoryData>)[subcategory];

            // Check if technologies is an array before iterating over it
            if (Array.isArray(technologies)) {
                technologies.forEach(tech => {
                    console.log(`    - ${tech}`);
                });
            }
        });
    }
});
