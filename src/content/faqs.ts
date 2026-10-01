export type Faq = { question: string; answer: string[] };

/** Shared answer bank. Pages pick the questions relevant to them by key. */
export const faqBank = {
  whatIsVirtualOffice: {
    question: "What is a virtual office?",
    answer: [
      "It’s a professional business address with mail handling and optional call answering, without renting physical space. It suits startups, remote teams and home-based businesses that want privacy and credibility.",
    ],
  },
  registerCompany: {
    question: "Can I register my company at my virtual office address?",
    answer: [
      "Yes. Add our registered address option and you can use the address for Companies House and HMRC, keeping your home address off the public record.",
      "UK law requires every company to keep an appropriate registered office where official post can be received, and this service covers that requirement.",
    ],
  },
  virtualVsRegistered: {
    question:
      "What’s the difference between a virtual office and a registered office address?",
    answer: [
      "A virtual office is a trading address: use it on your website, invoices, business cards and directory listings.",
      "A registered office address is the official address you give Companies House. Add it to any virtual office plan to cover both.",
    ],
  },
  directorsServiceAddress: {
    question: "What is a director’s service address?",
    answer: [
      "It’s the address published for your directors and PSCs on the public register, so their home addresses stay private. Registered office plans include two, with extra directors at £2 each.",
    ],
  },
  setupTime: {
    question: "How long does setup take?",
    answer: [
      "Signing up takes a couple of minutes. Your address goes live once our mandatory anti-money-laundering checks are complete.",
    ],
  },
  proofOfId: {
    question: "Do I need ID to sign up?",
    answer: [
      "Yes. We’re legally required to verify one photo ID (passport, driving licence or other government-issued ID) and a recent proof of address such as a utility bill.",
      "You’ll also take a quick selfie holding your ID, with your face clearly visible.",
    ],
  },
  contract: {
    question: "Am I tied into a long contract?",
    answer: [
      "No. Monthly plans roll on and can be cancelled from your portal at any time; the service ends at the close of your current billing month. Annual plans cost less and can be cancelled at renewal.",
    ],
  },
  setupFee: {
    question: "Is there a set-up fee?",
    answer: ["No. We cover the set-up costs, so you only pay for your plan."],
  },
  vat: {
    question: "Are your prices inclusive of VAT?",
    answer: ["Prices are shown excluding VAT, which is added at checkout."],
  },
  monthlyBill: {
    question: "How is my monthly bill worked out?",
    answer: [
      "Virtual office and registered address plans are a fixed monthly (or annual) fee. Any add-ons you choose are added on top of that.",
    ],
  },
  extraMail: {
    question: "What if I receive more than 10 letters a month?",
    answer: [
      "Your first 10 scans each month are included. After that it’s £1 per item, or add unlimited scanning for £10 a month if you expect a lot of post.",
    ],
  },
  annualVsMonthly: {
    question: "What’s the difference between monthly and annual plans?",
    answer: [
      "Monthly plans can be cancelled at any time. Annual plans are paid upfront at a lower overall price and can be cancelled at renewal.",
    ],
  },
  addRegisteredLater: {
    question: "Can I add a registered office address later?",
    answer: ["Yes. Upgrade from your customer portal whenever you’re ready."],
  },
  googleBusiness: {
    question: "Can I list a virtual office on Google Business Profile?",
    answer: [
      "Google doesn’t allow virtual offices to be shown as locations customers can visit. Set up your profile as a service-area business and list the areas you cover instead.",
    ],
  },
  marketing: {
    question: "Can I put the address on my website and marketing?",
    answer: [
      "Yes, use it anywhere you like. To register with Companies House as well, add a registered office address to your plan.",
    ],
  },
  receptionTypes: {
    question: "What’s the difference between a virtual receptionist, switchboard and PA?",
    answer: [
      "A virtual receptionist answers your calls in your business name and passes on messages. A virtual switchboard routes callers to the right person or team. A virtual PA goes further, helping with your diary, appointments and admin.",
    ],
  },
  ukBased: {
    question: "Are your receptionists based in the UK?",
    answer: ["Yes, every receptionist and PA on our team is based in the UK."],
  },
  keepNumber: {
    question: "Can I keep my existing phone number?",
    answer: [
      "Yes. Divert your existing number to us and we’ll answer as your business, or take a new local number from us.",
    ],
  },
  transferCalls: {
    question: "Can calls be transferred to me or my team?",
    answer: [
      "Yes. Tell us who should receive which calls and we’ll put callers through, or take a message when you’re unavailable.",
    ],
  },
  busyOnly: {
    question: "Can you answer only when I’m busy?",
    answer: [
      "Yes. Set your phone to divert to us when you’re engaged or don’t pick up, and we’ll cover the overflow.",
    ],
  },
  callCost: {
    question: "How much do calls cost?",
    answer: [
      "Calls diverted from your virtual landline are charged per minute: 2p to UK landlines and 7p to mobiles, on top of your plan.",
    ],
  },
  landlineOnly: {
    question: "Can I use the number without your receptionists?",
    answer: [
      "Yes. A virtual landline on its own simply forwards calls to the phone of your choice.",
    ],
  },
  regionalNumber: {
    question: "Can I get a regional phone number?",
    answer: [
      "Yes. Choose a local area code for a town or city, or a national number if you trade UK-wide.",
    ],
  },
  viewMail: {
    question: "How do I view scanned mail?",
    answer: [
      "Log in to your customer portal to see every scanned item, download PDFs and request forwarding.",
    ],
  },
  mobilePortal: {
    question: "Can I use the portal on my phone?",
    answer: ["Yes. The portal works in any modern browser on phone, tablet or desktop."],
  },
  mailSecurity: {
    question: "Is my mail handled securely?",
    answer: [
      "Post is received by our team, logged and scanned in a controlled environment, and only shared with you through your secure portal account.",
    ],
  },
  invoices: {
    question: "Can I download invoices from the portal?",
    answer: ["Yes. Every invoice is available to view and download from your account."],
  },
  overseas: {
    question: "Can overseas businesses sign up?",
    answer: [
      "Yes. We support international clients; you’ll complete the same identity checks, and we may ask for extra documents depending on your country and company structure.",
    ],
  },
  beneficialOwner: {
    question: "Who counts as a beneficial owner?",
    answer: [
      "Anyone who owns or controls 25% or more of the business, directly or through other companies. We need to verify each beneficial owner.",
    ],
  },
} satisfies Record<string, Faq>;

export type FaqKey = keyof typeof faqBank;

export function pickFaqs(keys: readonly FaqKey[]): Faq[] {
  return keys.map((key) => faqBank[key]);
}
