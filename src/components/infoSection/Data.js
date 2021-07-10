export const homeObjOne ={
    id: 'about',
    lightBg: false,
    ligthText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headLine: "Unlimited Transactions with zero fees",
    description: "Get access to our exclusivre app that allows you to send unlimited transactions withouth getting charged any fee.",
    buttonLabel: "Get started",
    imgStart: false,
    img: require('../../images/svg-1.svg'),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    to: 'discover'
}

export const homeObjTwo ={
    id: 'discover',
    lightBg: true,
    ligthText: false,
    lightTextDesc: false,
    topLine: "Unlimited Access",
    headLine: "Login to your account at any time",
    description: "Get access to our exclusivre app that allows you to send unlimited transactions withouth getting charged any fee.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: require('../../images/svg-2.svg'),
    alt: 'Pig',
    dark: false,
    primary: false,
    darkText: true,
    to: 'signin'
}

export const homeObjTree ={
    id: 'signin',
    lightBg: true,
    ligthText: false,
    lightTextDesc: false,
    topLine: "Join Now",
    headLine: "Creating an account is extremely easy",
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: "Start Now",
    imgStart: true,
    img: require('../../images/svg-3.svg'),
    alt: 'Files',
    dark: false,
    primary: false,
    darkText: true,
    to: "./signIn"
}