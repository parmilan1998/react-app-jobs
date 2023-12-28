/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Arrow = () => {
  const detailList = [
    {
      id: 1,
      name: 'Temas Bunce',
      description:
        'We have asked the expert lead for a full-stack developer on a project basis.',
      image: './arrow/men01.jpg',
    },
    {
      id: 2,
      name: 'Temas Bunce',
      description:
        'We were supported in one of our Machine Learning projects by a freelancer of Expert lead.',
      image: './arrow/men02.jpg',
    },
  ]
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 mx-auto pb-16 font-popins'>
      <div className='flex lg:flex-row flex-col gap-6'>
        <div className='lg:w-1/3'>
          <div className='space-y-5'>
            <h2 className='text-4xl leading-snug font-bold tracking-wide text-center lg:text-left'>
              Why Leading Tech Companies Trust The Arrows
            </h2>
            <p className='text-lg lg:leading-loose lg:tracking-wide'>
              We Understand That For You, It's Never Just A Job: It's Your
              Business. That's Why We're Passionate About Not Only Finding You A
              Quality Employee, But Also The Perfect Fit.
            </p>
            <button className='px-5 py-2.5 bg-primaryColorPurple rounded-xl text-white font-medium'>
              Learn More
            </button>
          </div>
        </div>
        <div className='lg:w-1/3'>
          <div className='flex flex-col justify-center space-y-2'>
            <div>
              <img
                src='./arrow/men01.jpg'
                alt=''
                className='h-[400px] mx-auto rounded-2xl'
              />
            </div>
            <h2 className='text-xl font-medium text-left text-primaryColorBlue lg:mx-14'>
              Temas Bunce
            </h2>
            <span className='text-lg lg:mx-14'>
              We have asked the expert lead for a full-stack developer on a
              project basis.
            </span>
          </div>
        </div>
        <div className='lg:w-1/3'>
          <div className='flex flex-col justify-center space-y-2'>
            <div>
              <img
                src='./arrow/men02.jpg'
                alt=''
                className='h-[400px] mx-auto rounded-2xl'
              />
            </div>
            <h2 className='text-xl font-medium text-left text-primaryColorBlue lg:mx-16'>
              Temas Bunce
            </h2>
            <span className='text-lg lg:mx-16'>
              We were supported in one of our Machine Learning projects by a
              freelancer of Expert lead.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arrow

{
  /* <div className='w-2/3'>
<div className='grid lg:grid-cols-2 sm:grid-col-1 md:grid-cols-2 gap-6'>
  {detailList.map((item) => (
    <div key={item.id}>
      <div className='flex flex-col justify-center space-y-2'>
        <div>
          <img
            src={item.image}
            alt={item.name}
            className='h-[450px] w-[300px] mx-auto'
          />
        </div>
        <h2 className='text-xl font-medium text-left text-primaryColorBlue lg:mx-10'>
          {item.name}
        </h2>
        <span className='text-lg lg:mx-10'>{item.description}</span>
      </div>
    </div>
  ))}
</div>
</div> */
}
