import images from './images'

const benefits = [
  {
    image: images.iconOnline,
    title: 'Online Banking',
    desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. ',
  },
  {
    image: images.iconBudgeting,
    title: 'Simple Budgeting',
    desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    image: images.iconOnboarding,
    title: 'Fast Onboarding',
    desc: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    image: images.iconApi,
    title: 'Open API',
    desc: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]

const articles = [
  {
    image: images.imageCurrency,
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    image: images.imageRestaurant,
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    image: images.imagePlane,
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    image: images.imageConfetti,
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
]

export default { benefits, articles }
