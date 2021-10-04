interface School {
  name: string
  location?: [number, number]
  locationName?: string
}

interface Category {
  slug: string
  name: string
}

interface Program {
  name: string
  credits: number
  open: boolean
  level: string
  language: string
  code: string
  teachingForm: string
  pace: string
  school: School
  tags: string[]
  requirements: string[] | string
  exam: string
  link: string
  startPeriod?: string
  teachingTime?: string
  category: Category[]
}

type CategoryCardProps = {
  name: string
  programs: Program[]
}

type CategoryList = {
  [key: string]: CategoryCardProps
}

export type { CategoryCardProps, CategoryList, Category, Program, School }
