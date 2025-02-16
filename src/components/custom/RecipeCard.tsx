'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useRouter } from 'next/navigation'

type RecipeMetadata = {
  title: string
  nutritionFacts: string
  path: string
}

interface RecipeCardProps {
  recipeMetadata: RecipeMetadata
}

export const RecipeCard = ({ recipeMetadata }: RecipeCardProps) => {
  const { title, nutritionFacts } = recipeMetadata
  const router = useRouter()

  const handleViewRecipe = () => {
    router.push('/recipes')
  }

  return (
    <Card className="mx-auto flex h-[300px] w-[300px] flex-col items-center justify-center text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{nutritionFacts}</CardDescription>
      </CardHeader>
      <CardContent>~Item Image~</CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleViewRecipe}>View Recipe</Button>
      </CardFooter>
    </Card>
  )
}
RecipeCard.displayName = 'RecipeCard'
