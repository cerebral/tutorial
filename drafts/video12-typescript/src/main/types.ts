export type Item = {
  id: string
  title: string
}

export type Items = {
  [id: string]: Item
}

export type User = {
  id: string
  name: string
  website: string
  address: {
    street: string
    city: string
  }
}

export type Users = {
  [id: string]: User
}

export type State = {
  title: string
  items: Items
  users: Users
  userModal: {
    show: boolean
    id: string
  }
  isLoadingItems: boolean
  isLoadingUser: boolean
  error: string
}