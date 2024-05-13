import Card from '@/Components/Card'
import Testimonial from '@/Components/Testimonial'
import '@fontsource-variable/onest'

export default function About() {
  return (
    <>
      <div className='mx-auto max-w-screen-lg md:w-full md:max-w-4xl py-10'>
        <article className='pt-36 pb-14 text-6xl font-bold text-center'>
          <span className='text-card-bg'>NUESTRO EQUIPO</span>
        </article>
        <div>
          <Testimonial
            imgfront1='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgfront2='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgback1='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgback2='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgback3='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgback4='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgback5='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgdevops1='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            imgdoc='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            name='Alfredo Mescco Quispe'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
          <Card
            name='Aarón Apaza Barra'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Andre Gacia Aragon'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Luis Gutierrez Martinez'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Alfredo Mescco Quispe'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Dante Rodríguez Chambi'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Patrico Venero Medina'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Yefferson Zuñiga Justo'
            img='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
        </div>
        
      </div>
    </>
  )
}
