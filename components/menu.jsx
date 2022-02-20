import Link from 'next/link';

function Menu() {
  return (<div className='bg-cyan-400s'>
    <div className="bg-blue-700 h-2" />
    <center className='py-2 grid grid-cols-2 justify-center text-white gap-2 md:gap-6 w-4/5 md:w-3/5'>
      <Link href={'/'}>
        <a className='mx-auto rounded-xl border shadow-xl text-lg py-2 px-3 font-bold hover:bg-blue-600 bg-white hover:text-white text-blue-600 transition hover:scale-90 w-full'>
          Calcular
        </a>
      </Link>

      <Link href={'/'}>
        <a className='mx-auto rounded-xl border shadow-xl text-lg py-2 px-3 font-bold hover:bg-blue-600 bg-white hover:text-white text-blue-600 transition hover:scale-90 w-full'>
          Sobre o projeto
        </a>
      </Link>
    </center>
    <div className="bg-blue-700 h-2" />
  </div>);
};
export default Menu;