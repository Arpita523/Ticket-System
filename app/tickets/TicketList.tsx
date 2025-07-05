import Link from "next/link"
import { Ticket } from "../types/types"

async function getTickets(): Promise<Ticket[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate a delay for demonstration purposes
  const res = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 0 }, // Revalidate every 10 seconds
  })
  return res.json()
}

export default async function TicketList() {
  const tickets: Ticket[] = await getTickets()
  
  return (
    <>
      {tickets.map((ticket: Ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets.. yayyy!!!</p>
      )}
    </>
  )
}
