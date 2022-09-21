import Imagem from './assets/logo.png'
import Mockup from './assets/mockup.png'

export default function App() {
  return (
  

    
   <section className=" mx-auto w-screen grid gap-12   pt-4 lg:grid-cols-2 sm:grid-cols-2 h-[100vh] items-start bg-[#F8F9F9]">
           
            <div className=" h-fit w-full items-center lg:justify-end lg:flex hidden sm:justify-end sm:flex  ">
              <img src={Mockup} />
            </div>
      
       <div className="flex flex-col gap-4 w-full items-center h-fit lg:items-start sm:items:start">

          <div className=' border-[1px] p-8 bg-white flex flex-col gap-2 items-center justify-center w-96 '>
            <img className=' cursor-pointer w-[175px] py-6 ' src={Imagem} />
            <input placeholder='Telefone, nome de usuário ou email' className=' w-full h-8 border border-slate-200 rounded-sm p-4 text-sm outline-0' />
            <input placeholder='Senha' type='password' className=' w-full h-8 border border-slate-200 rounded-sm p-4 text-sm outline-0' />
            <button className=' w-full text-white py-1 bg-[#008BF3] rounded text-sm mb-6 '>Entrar</button>

          </div>

          <div className=' border-[1px] p-8 bg-white flex flex-col gap-2 items-center w-96'>
            <p>Não tem uma conta? <span className=' text-[#008BF3] font-bold cursor-pointer'>Cadastre-se</span></p>  

          </div>

      </div>


          
   </section>





  )
}
