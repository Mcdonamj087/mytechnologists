import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'homepageServices',
  type: 'object',
  inputComponent: Tabs,

  fieldsets: [
    { name: 'careerCoaching', title: 'Career Coaching' },
    { name: 'resumeWriting', title: 'Resume Writing' },
    { name: 'offerNegotiation', title: 'Offer Negotiation' },
  ],
  options: {
    // setting layout to object will group the tab content in an object fieldset border.
    // ... Useful for when your tab is in between other fields inside a document.
    layout: 'object',
  },

  fields: [
    {
      name: 'careerCoaching__content',
      type: 'serviceSection',
      fieldset: 'careerCoaching',
    },
    {
      name: 'resumeWriting__content',
      type: 'serviceSection',
      fieldset: 'resumeWriting',
    },
    {
      name: 'offerNegotiation__content',
      type: 'serviceSection',
      fieldset: 'offerNegotiation',
    },
  ],
};
