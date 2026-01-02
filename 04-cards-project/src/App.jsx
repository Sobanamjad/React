import React from 'react'
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://i.imgur.com/rza5mT9.png",
    companyName: "Meta (Facebook)",
    datePosted: "1 day ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    companyName: "Netflix",
    datePosted: "7 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "8 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "2 days ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Multan, Pakistan"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Multan, Pakistan"
  }
];



const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandlogo={elem.brandLogo} />
      })}
    </div>

  )
}

export default App