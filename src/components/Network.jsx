import React from 'react'

const Network = () => {
  const networkList = [
    {
      id: 1,
      name: 'Cameron Williamson',
      position: 'Senior Software Developer',
      rating: '4.8',
      reviews: 345,
      image: './network/SE.jpg',
    },
    {
      id: 2,
      name: 'Darrell Steward',
      position: 'Senior ML/AI/NLP Engineer',
      rating: '4.4',
      reviews: 125,
      image: './network/ML.jpg',
    },
    {
      id: 3,
      name: 'Bessie Cooper',
      position: 'UI/UX Designer',
      rating: '4.6',
      reviews: 235,
      image: './network/UIE.png',
    },
    {
      id: 4,
      name: 'Jerome Bell',
      position: 'Senior Front-End Developer',
      rating: '4.2',
      reviews: 235,
      image: './network/SFED.jpg',
    },
  ]
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 mx-auto pb-16'>
      <div className='flex flex-col space-y-2'>
        <h1 className='text-5xl font-bold leading-snug font-popins tracking-wide'>
          Meet Talent in Our Network
        </h1>
        <p className='text-lg font-medium leading-snug tracking-wide'>
          Access a strong community of over 20,000 vetted tech freelancers
        </p>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center items-center py-12'>
        {networkList.map((item, index) => (
          <div
            key={item.id}
            className='font-popins flex flex-col justify-center items-center space-y-2.5'
          >
            <img
              src={item.image}
              alt={item.position}
              className='w-72 h-80 rounded-xl bg-cover bg-center'
            />
            <div className='flex flex-col justify-center items-center pt-2'>
              <h2 className='font-bold'>{item.name}</h2>
              <p>{item.position}</p>
            </div>
            <hr className='mx-auto w-20 h-0.5 bg-primaryColor'/>
            <div className='flex flex-row items-center gap-2'>
              <div className='rating'>
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-yellow-200'
                  checked
                />
              </div>
              <span>{item.rating}/5.0</span>
              <span>({item.reviews}</span>
              <span className='font-normal'>reviews)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Network
