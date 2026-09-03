// Central place for business info so it's easy to update.
export const siteConfig = {
  name: "Ade Cakes Haven",
  tagline: "Where Sweetness Finds A Home",
  phone: "09123510853",
  phoneIntl: "+2349123510853",
  whatsapp: "07039976059",
  whatsappIntl: "2347039976059",
  whatsappMessage:
    "Hello Ade Cakes Haven! I'd like to make an order. Please can you help me with the available options?",
  email: "hello@adecakeshaven.com",
  address: "Lagos, Nigeria",
  social: {
    instagram: "https://instagram.com/adecakeshaven",
    facebook: "https://facebook.com/adecakeshaven",
    tiktok: "https://tiktok.com/@adecakeshaven",
  },
};

export const whatsappLink = `https://wa.me/${siteConfig.whatsappIntl}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const callLink = `tel:${siteConfig.phoneIntl}`;
