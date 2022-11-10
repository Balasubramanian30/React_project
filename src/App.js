import './App.css';
import Interior from './Interior';



function App() {

   const head = 'INTERIOR DESIGN VISION BOARD'
   const para = 'The things I wish ro see in my future house.'
  const blogArr = [

    {
    
      title: 'MINIMALIST',
      description: 'Adapt to a monochromatic color palatte'

    },



    {

      title: 'MODERN',
      description: 'Embrace patterns, curves,and lines for details'

    },

    {

      title: 'FLEXIBLE SPACES',
      description: 'Have more multi-functional spaces for guest rooms'

    },


    {

      title: 'FURNITURE',
      description: 'use modern,affordable furniture sets'

    },



    {

      title: 'ECO-FRIENDLY',
      description: 'Use warm tones and wood elements for furniture'

    },
    {

      title: 'SMART TECH',
      description: 'Adapt to home assistant technologies'

    },
    {

      title: 'PLANTS',
      description: 'MOre large and small plants to display.'

    },
    {

      title: 'WALLPAPER',
      description: 'Use monochromatic wallpaper for bedroom spaces'

    },


  ]

  const blogcards = blogArr.map((item,pos) => {

    console.log(item)

    return (

      < Interior key={pos} item ={item.title} description={item.description}/>
    //   <div className='blogCard'>
    // <div className='blogss'>

    //     <h3 className='title'>{item.title}</h3>
    //     <p className='pat'>{item.description}</p>
      
    //     </div>

    //     </div>



    )


  })





  return (
    <div className="App">
<div className='body'>
<div className='pagecenter'>

<h3 className='head'>{head}</h3>
<p className='para'>{para}</p><hr className='hrline'/>
     
      {blogcards}
    
      </div>


      </div>

    </div>
  );
}

export default App;
