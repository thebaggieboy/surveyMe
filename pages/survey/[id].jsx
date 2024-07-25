export default function survey({surveys}){
    return(
        <>
            ID - 
        </>
    )
}

export const getServerSideProps = async (context)=>{
    const id = context.params.id
    const res = await fetch(`http://127.0.0.1:8000/api/surveys/${id}`);

  
    const data = await res.json()
  
    return {
      props:{
        surveys:data.results
      },
    }
  }