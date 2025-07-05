export type Ticket = {
  id: string | number
  title: string
  body: string
  priority: string
  user_email: string
}

export interface TicketDetailsProps {
  params: {
    id: string
  }
}
