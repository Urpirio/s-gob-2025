'use client';
import Link from "next/link";
import BtnSignIn from "../SubComponents/BtnSignIn";
import { useState } from "react";
import { useAuth } from "../../../hooks/useApi";
import { useRouter } from "next/navigation";

export default function SectionLogin() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!identifier || !password) {
      setError('Email/Cédula y contraseña son requeridos');
      setLoading(false);
      return;
    }

    const result = await login(identifier, password);

    if (result.success) {
      // Redirigir al perfil o página principal
      router.push('/Perfil');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <section className='flex flex-col gap-10'>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-6xl text-primary text-center'>Bienvenido de nuevo</h1>
        <span className='text-3xl font-light text-center'>Ahora es más fácil, gracias por volver</span>
      </div>
      <div className="flex items-center justify-center gap-1 px-5 lg:px-0">
        <BtnSignIn/>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-gray-300  h-[0.5px] w-[100%]"></div>
        <span className="absolute bg-white p-1 text-gray-400 font-semibold">O usa tu correo</span>
      </div>
      
      {error && (
        <div className="mx-5 lg:mx-0 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form className="
      px-5 
      lg:px-0
      flex
      flex-col
      gap-5
      [&form>div>input]:w-[100%]
      [&form>div>input]:text-[18px]
      [&form>div>input]:h-15
      [&form>div>input]:rounded-xl
      [&form>div>input]:p-2
      [&form>div>input]:pl-5
      [&form>div>input]:pr-5
      [&form>div>input]:outline-0
      [&form>div>input]:placeholder:font-semibold
      [&form>div>input]:bg-[#F3F3F3]
      "
       onSubmit={handleSubmit}>
        <div>
            <input 
              type="text" 
              placeholder="Correo electrónico o cédula" 
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={loading}
            />
        </div>
        <div>
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
        </div>
        <div className='flex justify-center'>
          <button 
            type="submit"
            disabled={loading}
            className='
            flex 
            items-center 
            justify-center 
            border 
            pt-3 
            pb-3 
            pl-5 
            pr-5 
            gap-2 
            rounded-xl 
            bg-primary
            text-white
            hover:bg-blue-600
            disabled:bg-gray-400
            disabled:cursor-not-allowed
            transition-colors
            duration-200
            min-w-[200px]
            '>
              <span className='font-semibold'>
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </span>
          </button>
        </div>
      </form>
      
      <div className="flex justify-center">
        <Link href="/Registro" className="text-primary hover:underline">
          ¿No tienes cuenta? Regístrate aquí
        </Link>
      </div>
    </section>
  )
}
