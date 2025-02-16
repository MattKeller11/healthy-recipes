import { ModeToggle } from '@/components/custom/ModeToggle'
import { Navbar } from '@/components/custom/Navbar'
import { RecipeCard } from '@/components/custom/RecipeCard'

const recipeMetadata = {
  title: 'Brownie Boos Ridiculous Brownies',
  nutritionFacts: '59 calories a serving, 8g protein',
  path: '/brownies',
}

export default function Home() {
  return (
    <main>
      <div className="flex items-center p-4">
        <Navbar />
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
      <div className="flex justify-center">
        <RecipeCard recipeMetadata={recipeMetadata} />
      </div>
    </main>
  )
}
