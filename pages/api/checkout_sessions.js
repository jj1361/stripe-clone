// const stripe = require('stripe')(JSON.stringify((process.env.STRIPE_SECRET_KEY)));
//modified Fri June 27 for sukkot 
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
               price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                     label: 'Tuesday, Mar. 31, 2026',
                     value: '033126,
                   },
                   {
                     label: 'Wednesday, Apr. 1, 2026',
                     value: '040126',
                   },
                   {
                     label: 'Thursday, Apr. 2, 2026',
                     value: '040226',
                   },
                   {
                     label: 'Friday, Apr. 3, 2026',
                     value: '040326',
                   },
                   {
                     label: 'Saturday, Apr. 4, 2026',
                     value: '040426',
                   },
                   {
                     label: 'Sunday, Apr. 5, 2026',
                     value: '040526',
                   },
                   {
                     label: 'Monday, Apr. 6, 2026',
                     value: '040626',
                   },
                   {
                     label: 'Tuesday Apr. 7, 2026',
                     value: '040726',
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
                     label: 'Thursday, Apr. 2, 2026',
                     value: '040226',
                   },
                   {
                     label: 'Friday, Apr. 3, 2026',
                     value: '040326',
                   },
                   {
                     label: 'Saturday, Apr. 4, 2026',
                     value: '040426',
                   },
                   {
                     label: 'Sunday, Apr. 5, 2026',
                     value: '040526',
                   },
                   {
                     label: 'Monday, Apr. 6, 2026',
                     value: '040626',
                   },
                   {
                     label: 'Tuesday, Apr. 7, 2026',
                     value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Saturday, Oct. 11 2025',
                  value: '040626',
                },
                {
                  label: 'Sunday Oct. 12, 2025',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Thurday, Oct. 9, 2025',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
            quantity: adults,
            adjustable_quantity: {
              enabled: true,
            },
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children           
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Thurday, Oct. 9, 2025',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children            
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children            
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children            
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040626',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040626',
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
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children            
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126',
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126',
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126',
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126',
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
            price: 'price_1SZkvr2LiTnoM0YgpFRjvpEA', //Adults
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
            price: 'price_1SZkwl2LiTnoM0YgfkWB4PjL', //Children
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
                  label: 'Tuesday, Mar. 31, 2026',
                  value: '033126,
                },
                {
                  label: 'Wednesday, Apr. 1, 2026',
                  value: '040126',
                },
                {
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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
                  label: 'Thursday, Apr. 2, 2026',
                  value: '040226',
                },
                {
                  label: 'Friday, Apr. 3, 2026',
                  value: '040326',
                },
                {
                  label: 'Saturday, Apr. 4, 2026',
                  value: '040426',
                },
                {
                  label: 'Sunday, Apr. 5, 2026',
                  value: '040526',
                },
                {
                  label: 'Monday, Apr. 6, 2026',
                  value: '040626',
                },
                {
                  label: 'Tuesday, Apr. 7, 2026',
                  value: '040726',
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


