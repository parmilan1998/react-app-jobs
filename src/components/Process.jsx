import React from 'react'

const Process = () => {
  const processDetails = [
    {
      id: 1,
      title: 'Tell Us What You Need',
      description:
        'We Collect Your Input Online. Followed By A Short Follow-Up Call. This Gives Us A Comprehensive Overview Of Your Skill Requirements.',
      image: './process/comment.png',
    },
    {
      id: 2,
      title: 'We Assess Candidates',
      description:
        'We Leverage Technology To Find And Assess Tech Talents That Are A Precise Fit To Your Needs - Be It From Within Or Even Outside Of Our Community',
      image: './process/notebook.png',
    },
    {
      id: 3,
      title: 'Receive Our Recommendation',
      description:
        'We Finally Share With You A Comprehensive Report Explaning Each Candidates Background And Expertise.',
      image: './process/star.png',
    },
  ]
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 mx-auto pb-16'>
      <div className='flex flex-col justify-center items-center text-center lg:w-1/2 mx-auto font-popins leading-5 tracking-normal py-2'>
        <h2 className='lg:text-5xl text-4xl font-bold font-popins leading-snug tracking-wider text-center py-2'>
          A Simple Process
        </h2>
        <span className='text-lg font-normal'>
          We believe every project is unique. Our technology helps to precisely
          assess and recommend at the right candidate for you project.
        </span>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-col-1 md:grid-cols-2 justify-center items-center text-center gap-4 py-10'>
        {processDetails.map((item, index) => (
          <div
            key={item.id}
            className='shadow-lg bg-black rounded-3xl px-10 py-10 h-[420px] space-y-5 font-popins ease-in duration-200 cursor-pointer'
          >
            <div className='flex justify-start'>
              <div className='bg-primaryColor p-5 rounded-full'>
                <img
                  src={item.image}
                  alt='Work'
                  className='w-8 h-8 text-white'
                />
              </div>
            </div>
            <h3 className='text-2xl font-bold text-white text-left lg:w-2/3 leading-snug'>{item.title}</h3>
            <p className='leading-7 font-normal text-left text-neutral-400 lg:w-5/6'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process
