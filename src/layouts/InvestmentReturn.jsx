import React from 'react'
import SectionHeading from '../components/SectionHeading'
import InvestmentCalculator from '../components/InvestmentCalculator'

const InvestmentReturn = () => {
  return (
    <div className='investment_return py-6 lg:py-12'>
        <SectionHeading title={"Investment Return Calculator"} />
        <InvestmentCalculator />
        <SectionHeading title={"Digital Gold Investment"} />
        <div className='text-[#6C747D] text-center lg:text-[20px] lg:mt-[-70px]'>
            <p>We at AIION GOLD are here to help you ease your digital gold investment plans.</p>
            <p>We bring forth for you the pure 24k carat digital gold, at the best rate - at just a click!</p>
            <p>Offering multiple timelines to streamline the process for you, our experts are at every</p>
        </div>
    </div>
  )
}

export default InvestmentReturn