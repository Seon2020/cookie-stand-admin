import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { hours } from '../data'

export default function Home() {
  
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  const [stands, setStands] = useState([])

  function onCreate(e){
    e.preventDefault()
    const totalHours = hours.map(hour => hour)
    const newStands = {
      location: e.target.location.value,
      minCustomers: e.target.minCustomers.value,
      maxCustomers: e.target.maxCustomers.value, 
      avgCustomers: e.target.avgCookies.value,
      hourly_sales: hourly_sales,
      length: stands.length
    }
    setStands([...stands, newStands])
  }
  return (
    <div className='bg-green-50 py-5 min-h-screen'>

      <Head>
        <title>Cookie Stand App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title='Cookie Stand Admin'/>

      <main className='h-full'>

        <Form title="Create Cookie Stand"/>

        <div className="text-gray-500 my-10 text-center">
          <ReportTable arrayCookieStands={stands}/>
        </div>

      </main>

      <Footer />

    </div>
  )


  function Header(props){
    return(
      <header className="bg-green-500 text-black p-4 border">
        <h1 className="text-4xl">{props.title}</h1>
        <button className="bg-gray-200 float-right rounded py-1 px-2 -mt-9">
          <Link href="/overview">
            <a>Overview</a>
          </Link>
        </button>
      </header>
    )
  }

  function Footer(props){
    return(
      <footer className="bg-green-500 text-black p-4">
        <p>{stands.length} Locations World Wide</p>
      </footer>
    )
  }

  function Form(props){
    return(
      <form onSubmit={onCreate} className="w-9/12 m-auto p-4 my-4 rounded bg-green-300">
        <h2 className="text-center text-2xl mb-4">{props.title}</h2>
        <div className="flex">
          <label for='location' className='text-sm font-bold pr-2'>Location</label>
          <input name='location' className="text-black flex-1"></input>
        </div>
        <div className="flex items-end gap-x-3 pt-8">
          <div className="flex-1">
            <label className='text-sm font-bold' for='minCustomers'>Minimum Customers per Hour</label>
            <input name='minCustomers' className="text-black w-full"></input>
          </div>
          <div className="flex-1">
            <label className='text-sm font-bold' for='maxCustomers'>Maximum Customers per Hour</label>
            <input name='maxCustomers' className="text-black w-full"></input>
          </div>
          <div className="flex-1">
            <label className='text-sm font-bold' for='avgCookies'>Average Cookies per Sale</label>
            <input name='avgCookies' className="text-black w-full"></input>
          </div>
          <div className='flex-1 self-stretch'>
            <button type="submit" className="w-full h-full text-black bg-green-500">Create</button>
          </div>
        </div>
      </form>
    )
  }

  function ReportTable(props) {

    if (stands.length > 0) {

      const col_totals = hours.map((hour, idx) => (
        props.arrayCookieStands.reduce((total, stand) => total + stand.hourly_sales[idx], 0))
      )
      
      return(
        <div className="mb-10 text-center">
          <table className="w-9/12 m-auto">
            <thead>
              <tr className="bg-green-500">
                <th className="px-4 center">Location</th>
                {hours.map(hour => (<th className="text-sm">{hour}</th>))}
                <th className="px-4 center">Total</th>
              </tr>
            </thead>
            <tbody className="bg-green-300">
              {props.arrayCookieStands.map(stand => (
                <tr className="odd:bg-green-400">
                  <td className="border border-gray-400">{stand.location}</td>
                  {stand.hourly_sales.map(total => (<td className="border border-gray-400">{total}</td>))}
                  <td className="border border-gray-400">{stand.hourly_sales.reduce((x, y) => x + y, 0)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-green-500">
              <tr className="font-bold">
                <th>Totals</th>
                {col_totals.map(total => (<th>{total}</th>))}
                {col_totals.reduce((x, y) => x + y, 0)}
              </tr>
            </tfoot>
          </table>
        </div>
    )
  }
    else {
      return(
        <h2>No Cookie Stands Available</h2>
      )
    }
  }
}
