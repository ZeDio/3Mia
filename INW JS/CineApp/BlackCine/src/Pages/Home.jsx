import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <>
        <div className='grid grid-cols-3 gap-20 m-10 p-10'>
            {
                data.map(
                    (filme, index) => (
                        <>
                        <div className='card' key={index}>
                            <h1 className='text-center' key={filme.title}>{filme.title}</h1>
                            <img className='rounded-2xl w-screen h-52' src={filme.image}/>

                            <div className='tags'>
                                {
                                filme.tags.map(tag =>(
                                    <span className='bg-black text-white p-1 m-1' key={tag}>{tag}</span>
                                )) 
                                }
                            </div>

                            <div className='text'>
                                {
                                filme.text.map(text =>(
                                    <span className='p-1 m-1' key={text}>{text}</span>
                                )) 
                                }
                            </div>
                        </div>
                        </>
                    )
                )
            }
        </div>
        </>
     );
}

export default Home;