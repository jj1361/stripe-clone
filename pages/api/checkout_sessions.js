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
               price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                     label: 'Friday, Sep. 25, 2026',
                     value: '092526',
                   },
                   {
                     label: 'Saturday, Sep. 26, 2026',
                     value: '092626',
                   },
                   {
                     label: 'Sunday, Sep. 27, 2026',
                     value: '092726',
                   },
                   {
                     label: 'Monday, Sep. 28, 2026',
                     value: '092826',
                   },
                   {
                     label: 'Tuesday, Sep. 29, 2026',
                     value: '092926',
                   },
                   {
                     label: 'Wednesday, Sep. 30, 2026',
                     value: '093026',
                   },
                   {
                     label: 'Thursday, Oct. 1, 2026',
                     value: '100126',
                   },
                   {
                     label: 'Friday, Oct. 2, 2026',
                     value: '100226',
                   },
                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                     label: 'Sunday, Sep. 27, 2026',
                     value: '092726',
                   },
                   {
                     label: 'Monday, Sep. 28, 2026',
                     value: '092826',
                   },
                   {
                     label: 'Tuesday, Sep. 29, 2026',
                     value: '092926',
                   },
                   {
                     label: 'Wednesday, Sep. 30, 2026',
                     value: '093026',
                   },
                   {
                     label: 'Thursday, Oct. 1, 2026',
                     value: '100126',
                   },
                   {
                     label: 'Friday, Oct. 2, 2026',
                     value: '100226',
                   },
                                      {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
                 ],
               },
             },
           ],
           mode: 'payment',
           success_url: 'https://www.goshengroup.net/en',
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
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                    {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (adults > 0 && children > 0 && babies > 0 &&(seniors === "" || seniors === '')) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Saturday, Oct. 1 2026',
                  value: '100126',
                },
                {
                  label: 'Sunday Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (adults > 0 && children > 0 && babies > 0 && seniors > 0) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } else if
     (adults > 0 &&(children === "" || children === '') && (babies === "" || babies === '')  && seniors > 0 ) {
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },

              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: false },
      });
    }  else if ( adults > 0 && children > 0 && seniors > 0 && babies === ""){
      temp = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1PbqnG2LiTnoM0YgvMgvsGl4', //Adults
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
                  label: 'Friday, Sep. 25, 2026',
                  value: '092526',
                },
                {
                  label: 'Saturday, Sep. 26, 2026',
                  value: '092626',
                },
                {
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
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
                  label: 'Sunday, Sep. 27, 2026',
                  value: '092726',
                },
                {
                  label: 'Monday, Sep. 28, 2026',
                  value: '092826',
                },
                {
                  label: 'Tuesday, Sep. 29, 2026',
                  value: '092926',
                },
                {
                  label: 'Wednesday, Sep. 30, 2026',
                  value: '093026',
                },
                {
                  label: 'Thursday, Oct. 1, 2026',
                  value: '100126',
                },
                {
                  label: 'Friday, Oct. 2, 2026',
                  value: '100226',
                },
                                   {
                     label: 'Saturday, Oct. 3, 2026',
                     value: '100326',
                   },
                   {
                     label: 'Sunday, Oct. 4, 2026',
                     value: '100426',
                   },
              ],
            },
          },
        ],
        mode: 'payment',
        success_url: 'https://www.goshengroup.net/en',
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


