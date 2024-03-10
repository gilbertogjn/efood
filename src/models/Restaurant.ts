class Restaurant {
  category: string
  description: string
  image: string
  featured: boolean
  title: string
  id: number
  rate: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    featured: boolean,
    title: string,
    rate: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.featured = featured
    this.title = title
    this.rate = rate
  }
}

export default Restaurant
