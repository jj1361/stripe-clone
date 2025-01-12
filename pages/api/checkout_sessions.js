// const stripe = require('stripe')(JSON.stringify((process.env.STRIPE_SECRET_KEY)));
'useclient'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



export default async function handler(req, res, ) {
  if (req.method === 'POST') {

      // const disabledCheckout = req.body.disabledCheckout
      const adults = req.body.adults;
      const children = req.body.children;
      const babies = req.body.babies
      const seniors = req.body.seniors
     
      
 
    try {
      // Create Checkout Sessions from body params.
      let temp;
     
       if(adults > 0 && children === "" && babies === "" && seniors === ""  ) {
        console.log(`After the if ${adults}`);
        console.log(`After the if ${children}`);
        temp = await stripe.checkout.sessions.create({
           line_items: [
             {
               // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
               price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
               quantity: adults,
               adjustable_quantity: {
                 enabled: true,
               },
             },
           ],
           custom_fields: [
             // {
             //   key: 'name',
             //   label: {
             //     type: 'custom',
             //     custom: 'Full Name',
             //   },
             //   type: 'text',
             // },
             {
               key: 'arrival',
               label: {
                 type: 'custom',
                 custom: 'Estimated Arrival Date',
               },
               type: 'dropdown',
               dropdown: {
                 options: [
                   {
                     label: 'Friday, Apr. 11, 2025',
                     value: '041125',
                   },
                   {
                     label: 'Saturday, Apr. 12, 2025',
                     value: '041225',
                   },
                   {
                     label: 'Sunday, Apr. 13, 2025',
                     value: '041325',
                   },
                   {
                     label: 'Monday, Apr. 14, 2025',
                     value: '041425',
                   },
                   {
                     label: 'Tuesday, Apr. 15, 2025',
                     value: '041525',
                   },
                   {
                     label: 'Wednesday, Apr. 16, 2025',
                     value: '041625',
                   },
                   {
                     label: 'Thursday, Apr. 17, 2025',
                     value: '041725',
                   },
                   {
                     label: 'Friday Apr. 18, 2025',
                     value: '041825',
                   },
                 ],
               },
             },
             {
               key: 'departure',
               label: {
                 type: 'custom',
                 custom: 'Estimated Departure Date',
               },
               type: 'dropdown',
               dropdown: {
                 options: [
                   {
                     label: 'Sunday, Apr. 13, 2025',
                     value: '041325',
                   },
                   {
                     label: 'Monday, Apr. 14, 2025',
                     value: '041425',
                   },
                   {
                     label: 'Tuesday, Apr. 15, 2025',
                     value: '041525',
                   },
                   {
                     label: 'Wednesday, Apr. 16, 2025',
                     value: '041625',
                   },
                   {
                     label: 'Thursday, Apr. 17, 2025',
                     value: '041725',
                   },
                   {
                     label: 'Friday Apr. 18, 2025',
                     value: '041825',
                   },
                   {
                     label: 'Saturday, Apr. 19, 2025',
                     value: '041925',
                   },
                   {
                     label: 'Sunday, Apr. 20, 2025',
                     value: '042025',
                   },
                 ],
               },
             },
           ],
           mode: 'payment',
           success_url: 'https://www.goshengroup.net/en/thanks',
          //  success_url: 'https://www.goshengroup.net/en/thanks',

           cancel_url: `${req.headers.origin}/?canceled=true`,
           automatic_tax: { enabled: false },
         });
       }  else if
    (adults > 0 && children > 0 &&(seniors === "" || seniors === '') && (babies === "" || babies === '')) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (adults > 0 && children > 0 && babies > 0 &&(seniors === "" || seniors === '')) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (adults > 0 && children > 0 && babies > 0 && seniors > 0) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children           
             quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,  
            },

            
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          //   text: {
          //     value: 'Jane',
          //   },
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },

          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (adults > 0 &&(children === "" || children === '') && (babies === "" || babies === '')  && seniors > 0 ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },

          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (
      adults > 0 &&
      (children === "" || children === '') &&
      (babies === "" || babies === '') &&
      (seniors === "" || seniors === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },

          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === "" || adults === '') &&
      (babies === "" || babies === '') &&
      (seniors === "" || seniors === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === "" || adults === '') &&
      (babies === "" || babies === '') &&
      seniors > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: name,
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === "" || adults === '') &&
      babies > 0 &&
      seniors > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041725',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041725',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      children > 0 &&
      (adults === "" || adults === '') &&
      babies > 0 &&
      (seniors === "" || seniors === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children            
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },

          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === "" || children === '') &&
      (seniors === "" || seniors === '') &&
      (adults === "" || adults === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === "" || children === '') &&
      (seniors === "" || seniors === '') &&
      adults > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === "" || children === '') &&
      seniors > 0 &&
      adults > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      babies > 0 &&
      (children === "" || children === '') &&
      seniors > 0 &&
      adults > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      seniors > 0 &&
      (children === "" || children === '') &&
      (adults === "" || adults === '') &&
      (babies === "" || babies === '')
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      seniors > 0 &&
      (children === "" || children === '') &&
      (adults === "" || adults === '') &&
      babies > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if (
      seniors > 0 &&
      (children === "" || children === '') &&
      adults > 0 &&
      babies > 0
    ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX3B2LiTnoM0YgWqJCGE7I', //Babies
            quantity: babies,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    }  else if ( adults > 0 && children > 0 && seniors > 0 && babies === ""){
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX0u2LiTnoM0YgIaaGoDXe', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX462LiTnoM0YgRnmf9f9o', //Seniors
            quantity: seniors,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QgX212LiTnoM0YgqRJEsypf', //Children
            quantity: children,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        custom_fields: [
          // {
          //   key: 'name',
          //   label: {
          //     type: 'custom',
          //     custom: 'Full Name',
          //   },
          //   type: 'text',
          // },
          {
            key: 'arrival',
            label: {
              type: 'custom',
              custom: 'Estimated Arrival Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Friday, Apr. 11, 2025',
                  value: '041125',
                },
                {
                  label: 'Saturday, Apr. 12, 2025',
                  value: '041225',
                },
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
              ],
            },
          },
          {
            key: 'departure',
            label: {
              type: 'custom',
              custom: 'Estimated Departure Date',
            },
            type: 'dropdown',
            dropdown: {
              options: [
                {
                  label: 'Sunday, Apr. 13, 2025',
                  value: '041325',
                },
                {
                  label: 'Monday, Apr. 14, 2025',
                  value: '041425',
                },
                {
                  label: 'Tuesday, Apr. 15, 2025',
                  value: '041525',
                },
                {
                  label: 'Wednesday, Apr. 16, 2025',
                  value: '041625',
                },
                {
                  label: 'Thursday, Apr. 17, 2025',
                  value: '041725',
                },
                {
                  label: 'Friday Apr. 18, 2025',
                  value: '041825',
                },
                {
                  label: 'Saturday, Apr. 19, 2025',
                  value: '041925',
                },
                {
                  label: 'Sunday, Apr. 20, 2025',
                  value: '042025',
                },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en/thanks',
        // success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    }
    
      const session = temp
       
      console.log(session)
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


