export default function MealDetailsPage({ params }) {
    const { mealSlug } = params;
    
    return (
        <main>
            <h1>Meal: {mealSlug}</h1>
            <p>This is the content of the meal.</p>
        </main>
    );
}