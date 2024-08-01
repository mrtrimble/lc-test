import { defineField, defineType } from 'sanity';

export const carrierType = defineType({
  name: 'carriers',
  title: 'Carriers',
  type: 'document',
  fields: [
    defineField({
      name: 'carrierName',
      type: 'string',
    }),
    defineField({
      name: 'draft',
      type: 'boolean',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'carrierLogo',
      type: 'image',
    }),
    defineField({
      name: 'administrativeMailingAddress',
      type: 'object',
      fields: [
        {
          name: 'addressLine1',
          type: 'string',
        },
        {
          name: 'addressLine2',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'overnightMailingAddress',
      type: 'object',
      fields: [
        {
          name: 'addressLine1',
          type: 'string',
        },
        {
          name: 'addressLine2',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'brokerSupport',
      type: 'object',
      fields: [
        {
          name: 'phone',
          type: 'string',
        },
        {
          name: 'email',
          type: 'string',
        },
        {
          name: 'fax',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'newBusiness',
      type: 'object',
      fields: [
        {
          name: 'phone',
          type: 'string',
        },
        {
          name: 'email',
          type: 'string',
        },
        {
          name: 'fax',
          type: 'string',
        },
      ],
    }),
    //   name: 'Policy owner Services/Member Services/Customer Service',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'Phone',
    //       type: 'string',
    //     },
    //     {
    //       name: 'Email',
    //       type: 'string',
    //     },
    //     {
    //       name: 'Fax',
    //       type: 'string',
    //     },
    //   ],
    // }),
    defineField({
      name: 'producerPortal',
      type: 'string',
    }),
  ],
});
