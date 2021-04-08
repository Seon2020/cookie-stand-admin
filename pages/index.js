import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [cookieStandNew, setNewCookieStand] = useState()

  function cookieStandCreateHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    const cookieStandNew = JSON.stringify(Object.fromEntries(formData), null, 3)
    setNewCookieStand(cookieStandNew);
  }  

  return (
    <div className='flex flex-col min-h-screen py-5'>
      <Head>
        <title>Cookie Stand App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title='Cookie Stand Admin'/>

      <main className='bg-green-50 h-full'>
  
        <Form title="Create Cookie Stand"/>

        <div className="text-gray-500 my-10 text-center">
          <p>Report Table Coming Soon...</p>
          <p className="my-8">{cookieStandNew}</p>
        </div>

      </main>

      <Footer title='&copy; 2021' />
    </div>
  )


  function Header(props){
    return(
      <header className="bg-green-500 text-black p-4 border">
        <h1 className="text-4xl">{props.title}</h1>
      </header>
    )
  }

  function Footer(props){
    return(
      <footer className="bg-green-500 text-black p-4">
        <p className="">{props.title}</p>
      </footer>
    )
  }

  function Form(props){
    return(
      <form onSubmit={cookieStandCreateHandler} name="formData" className="w-9/12 m-auto p-4 my-4 rounded bg-green-300">
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
            <label className='text-sm font-bold' for='avgCustomers'>Average Cookies per Sale</label>
            <input name='avgCustomers' className="text-black w-full"></input>
          </div>
          <div className='flex-1 self-stretch'>
            <button type="submit" className="w-full h-full text-black bg-green-500">Create</button>
          </div>
        </div>
      </form>
    )
  }
}

