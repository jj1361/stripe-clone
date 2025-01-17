'use client'

import React, { FormEvent } from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import 'tailwindcss/tailwind.css';




// if(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }




const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
  {
    apiVersion: '2023-08-16',
  }
);

interface Registration {
  data: {
    text:string;
    name: string;
    email:string;
    adults:string;
    children:string;
    babies:string;
    seniors:string;
    arrival_date:string;
    departure_date:string;
    button_text:string;
  };
}


const Registration = ({ data }: Registration) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [seniors, setSeniors] = useState<number>(0);
  const [arrival_date, setArrival_date] = useState('');
  const [departure_date, setDeparture_date] = useState('');
  const [arrival_field, setArrival_field] = useState('');
  ('text');
  const [departure_field, setDeparture_field] = useState('text');

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  function showError(elementId: string, message: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
    }
  }

  function hideError(elementId: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.add('hidden');
    }
  }

  function validate(input: HTMLInputElement): boolean {
    const name = input.value.trim(); // Access value from the element

    if (name.length === 0) {
      showError(input.id + '-error', 'Please enter a name');
      return false;
    }

    if (input.type === 'email' && !/\S+@\S+\.\S+/.test(name)) {
      showError(input.id + '-error', 'Please enter a valid email address.');
      return false;
    }
    hideError(input.id + '-error');
    return true;
  }

  function formatDate(arrival_date: string): string {
    // Create a new Date object using the input string
    const date = new Date(arrival_date);

    // Options to use for toLocaleDateString()
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };

    // Convert the date to mm/dd/yyyy format
    return date.toLocaleDateString('en-US', options);
  }

  // Example usage:
  const originalDate = '2024/06/17'; // yyyy/mm/dd format
  const formattedDate = formatDate(originalDate);

  const handleNumberChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAdults(parseInt(event.target.value, 10));
  };




  return (
    <section className='mx-auto bg-violet-900 px-2 md:w-3/4 md:rounded-xl flex-col lg:flex items-center py-8 lg:my-10 text-center [&_i]:hidden xl:[&_i]:block [&_select]:py-2 my-10 [&_label]:text-xl xl:[&_label]:text-2xl '>
      <h1 className='text-white text-3xl lg:text-5xl lg:pb-5'>Registration</h1>
       <div className"projcard-container">
    
    <div className"projcard projcard-blue">
      <div className"projcard-innerbox">
        <img className"projcard-img" src="/dist/gosh1.png" />
        <div className"projcard-textbox">
          <div className"projcard-title">Goshen Group</div>
          <div className"projcard-subtitle">Pesach 2025</div>
          <div className"projcard-bar"></div>
          <div className"projcard-description">
            <p><b>Location: </b> Cape Girardea, Mo</p>            
            <p><b>Date: </b>April 11 - April 19</p>
            <p><b><u>Registration</u></b></p>
            <p><b>Seniors (70+): </b>Free, <b>Adults: </b>$55,  <b>Youth: </b>$55, <b>Children (5 & Under): </b>Free</p>
            <p> <b>Seniors (6-12): </b>$20</p>
            <p><b>Seniors: </b>Free</p>
        </div>
         
        </div>
      </div>
    </div>
    <section className"articles">
        <article>
          <div className"article-wrapper">
            <figure>
              <img src="/dist/hotels.png" alt="" />
            </figure>
            <div className"article-body">
              <h2>Fairfield Inn & Suites</h2>
              <h3>Check In: Apr 11, 2025</h3>
              <h3>Check Out: Apr 19, 2025</h3>
              <p>433 Cape West Crossings</p>
              <p>Cape Girardeau, MO 63703</p>
              <p>(573) 388-8148)</p>
              <a href="#" className"read-more">
                Read more <span className"sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className"icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
            <div className"article-wrapper">
              <figure>
                <img src="/dist/hotels2.png" alt="" />
              </figure>
              <div className"article-body">
                <h2>Candlewood Suites</h2>
                <h3>Check In: Apr 11, 2025</h3>
                <h3>Check Out: Apr 19, 2025</h3>
                <p>485 S. Mt Auburn Rd</p>
                <p>Cape Girardeau, MO 63703</p>
                <p>(573) 334-6868)</p>
                <a href="#" className"read-more">
                  Read more <span className"sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className"icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        <article>
     
        </article>
      </section>


    
    <div className"projcard projcard-red">
      <div className"projcard-innerbox">
        <img className"projcard-img" src="/dist/hotels.png" />
        <div className"projcard-textbox">
          <div className"projcard-title">Hotel Accomidations</div>
          <div className"projcard-subtitle">Fairfield Inn & Suites</div>
          <div className"projcard-bar"></div>
          <div className"projcard-description">
            <p>433 Cape West Crossing</p> 
            <p>Cape Girardeau, Mo</p>
            <p>(573) 388-8148</p>
            <p><b>Check-In: </b>April 11,2025 <b> Check-Out: </b>April 19,2025</p>
        </div>
          <div className"projcard-tagbox">
            <span className"projcard-tag">PHP</span>
            <span className"projcard-tag">SQL</span>
            <span className"projcard-tag">Database</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className"projcard projcard-green">
      <div className"projcard-innerbox">
        <img className"projcard-img" src="https://picsum.photos/800/600?image=1039" />
        <div className"projcard-textbox">
          <div className"projcard-title">And a Third Card</div>
          <div className"projcard-subtitle">You know what this is by now</div>
          <div className"projcard-bar"></div>
          <div className"projcard-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
          <div className"projcard-tagbox">
            <span className"projcard-tag">Excel</span>
            <span className"projcard-tag">VBA</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className"projcard projcard-customcolor" style="--projcard-color: #F5AF41">
      <div className"projcard-innerbox">
        <img className"projcard-img" src="https://picsum.photos/800/600?image=943" />
        <div className"projcard-textbox">
          <div className"projcard-title">Last Card</div>
          <div className"projcard-subtitle">That's the last one. Have a nice day!</div>
          <div className"projcard-bar"></div>
          <div className"projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <div className"projcard-tagbox">
            <span className"projcard-tag">iOS</span>
            <span className"projcard-tag">Android</span>
            <span className"projcard-tag">Cordova</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>


      <form
        method='POST'
        // action='/pages/api/checkout_sessions'
        // action='../../api/checkout_sessions'
        action='/api/checkout_sessions'
        className='flex flex-col px-10 lg:border-white lg:border-t-4 pt-8 gap-y-4 text-2xl [&_input]:w-[calc(100%-1px)] xl:[&_input]:w-[calc(100%-23px)] [&_input]:py-2 [&_input]:pl-4 md:[&_input]:p-4 [&_input]:rounded-md xl:[&_input]:rounded-none xl:[&_input]:rounded-r-md  [&_label]:flex xl:[&_label]:justify-end md:[&_label]:w-3/4 [&_label]:items-center [&_label]:text-white [&_i]:ml-4 [&_i]:rounded-l-md [&_i]:p-2 [&_i]:bg-violet-600 lg:w-2/3 xl:w-4/5 [&_select]:rounded-md xl:[&_select]:rounded-none xl:[&_select]:rounded-r-md'
      >
        {/* <div className='grid xl:flex xl:flex-end '>
          <label className='text-2x text-white'>Full Name: </label>

          <i
            className='bx bxs-user lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <input
            aria-label='label for name input'
            type='text'
            placeholder='Name'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validate(e.target as HTMLInputElement)}
          />
        </div> */}

        <div id='name-error' className='text-yellow-200 text-lg hidden '></div>
        {/* <div className='grid xl:flex'>
          <label className='flex '>Email:</label>
          <i
            className='bx bxs-envelope lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <input
            aria-label='label for email input'
            type='email'
            placeholder='Email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validate(e.target as HTMLInputElement)}
            required
          />
        </div>
        <div id='email-error' className='text-yellow-200 text-lg hidden'></div> */}
        <div className='grid xl:flex '>
          <label htmlFor='select'>Number of Adults: </label>

          <i
            className='bx bx-male-female lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>

          <select
            aria-label='label for adult number selection'
            name='adults'
            id='adults'
            className='w-full'
            value={adults || '' || 0}
            onChange={(e) => setAdults(parseInt(e.target.value, 10))}
          >
            <option  selected disabled>
              &nbsp;&nbsp;Please Select
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex  lg:text-2xl'>
          <label htmlFor='select'>Number of Children over 12: </label>
          <i
            className='bx bx-child  lg:text-5xl '
            style={{ color: '#ffffff' }}
          ></i>
          <select
            aria-label='label for number of children over 12 selection'
            name='children'
            id='children'
            className='w-full'
            value={children || '' || 0}
            onChange={(e) => setChildren(parseInt(e.target.value, 10))}
          >
            <option selected disabled>
              &nbsp;&nbsp;Please Select
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex   lg:text-2xl'>
          <label htmlFor='select'>Number of Children under 12: </label>

          <i
            className='bx bx-child  lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <select
            aria-label='label fornumber of children under 12 selection'
            name='babies'
            id='babies'
            className='w-full'
            value={babies || '' || 0}
            onChange={(e) => setBabies(parseInt(e.target.value, 10))}
          >
            <option  selected  disabled>
              &nbsp;&nbsp;0
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        <div className='grid xl:flex  lg:text-2xl'>
          <label htmlFor='select'>Number of Seniors: </label>
          <i
            className='bx bx-male-female lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <select
            aria-label='label for the number of seniors selection'
            name='seniors'
            id='seniors'
            className='w-full'
            value={seniors || '' || 0}
            onChange={(e) => setSeniors(parseInt(e.target.value, 10))}
          >
            <option selected disabled>
              &nbsp;&nbsp;0
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>
        {/* <div className='grid xl:flex '>
          <label htmlFor='select'>Estimated Arrival Date: </label>
          <i
            className='bx bx-calendar lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <div className='bg-white rounded-md w-full lg:flex lg:justify-between lg:items-center'>
            <input
              aria-label='label for arrival date input'
              type={arrival_field}
              name='arrival_date'
              id='arrival_date'
              min='2024-10-16'
              value={arrival_date}
              onChange={(e) => setArrival_date(e.target.value)}
              onFocus={() => setArrival_field('date')}
              onBlur={() => setArrival_field('text')}
              required   
            />
            <select
              aria-label='arrival_date'
              name='arrival_date'
              id='arrival_date'
              value={arrival_date}
              onChange={(e) => setArrival_date(e.target.value)}
            >
              <option value='' hidden disabled>
                &nbsp;&nbsp;Please Select
              </option>
              <option value='10-16-2024'>10-16-2024</option>
              <option value='10-17-2024'>10-17-2024</option>
              <option value='10-18-2024'>10-18-2024</option>
              <option value='10-19-2024'>10-19-2024</option>
              <option value='10-20-2024'>10-20-2024</option>
              <option value='10-21-2024'>10-21-2024</option>
              <option value='10-22-2024'>10-22-2024</option>
              <option value='10-23-2024'>10-23-2024</option>
              <option value='10-24-2024'>10-24-2024</option>
            </select>
          </div>
        </div> */}
        {/* <div className='grid xl:flex'>
          <label htmlFor='select'>Estimated Departure Date: </label>

          <i
            className='bx bx-calendar lg:text-5xl'
            style={{ color: '#ffffff' }}
          ></i>
          <div className='bg-white items-center w-full rounded-md lg:rounded-r-md lg:flex lg:justify-between'>
            <input
              aria-label='label for departure date input'
              type={departure_field}
              name='departure_date'
              id='departure_date'
              max='2024-10-25'
              value={departure_date}
              onChange={(e) => setDeparture_date(e.target.value)}
              onFocus={() => setDeparture_field('date')}
              onBlur={() => setDeparture_field('text')}
              required
            />
            <select
              aria-label='departure_date'
              name='departure_date'
              id='departure_date'
              value={departure_date}
              onChange={(e) => setDeparture_date(e.target.value)}
            >
              <option value='' hidden disabled>
                &nbsp;&nbsp;Please Select
              </option>
              <option value='10-18-2024'>10-18-2024</option>
              <option value='10-19-2024'>10-19-2024</option>
              <option value='10-20-2024'>10-20-2024</option>
              <option value='10-21-2024'>10-21-2024</option>
              <option value='10-22-2024'>10-22-2024</option>
              <option value='10-23-2024'>10-23-2024</option>
              <option value='10-24-2024'>10-24-2024</option>
              <option value='10-25-2024'>10-25-2024</option>
            </select>
          </div>
        </div> */}
        <button
          role='link'
          className='bg-white text-black rounded-md w-3/4 mx-auto py-4 lg:w-full  md:px-2 font-bold mt-6'
          type='submit'
        >
          CHECKOUT
        </button>
      </form>
            <script>
 
// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
  $clamp(box, {clamp: 6});
});

</script>
    </section>
  );
};

export default Registration;

function showError(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}


function hideError(arg0: string) {
  throw new Error('Function not implemented.');
}

// function fetchPostJSON(arg0: string, arg1: { amount: any; }): Stripe.Checkout.Session | PromiseLike<Stripe.Checkout.Session> {
//   throw new Error('Function not implemented.');
// }

