import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        <p>Welcome to Foodies!</p>
        <p><Link href="/meals">Explore Meals</Link></p>
        <p><Link href="/meals/share">Share a Meal</Link></p>
        <p><Link href="/community">Join the Community</Link></p>
      </h1>
    </main>
  );
}
