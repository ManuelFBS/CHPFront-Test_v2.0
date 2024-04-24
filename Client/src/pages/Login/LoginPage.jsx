import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    signIn,
    errors: SignInErrors,
    isAuthenticated,
    isOwner,
  } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (isOwner) {
        navigate('/dashboard');
      } else {
        navigate('/users/articles');
      }
    } else {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-8 rounded-md">
        {SignInErrors.map((error, i) => (
          <div
            className="w-full bg-red-600 p-2 text-white text-center"
            key={i}
          >
            {error}
          </div>
        ))}

        <h2 className="text-2xl font-bold italic mb-6 text-blue-300">
          Login
        </h2>

        <form onSubmit={onSubmit}>
          <Label htmlFor="inputValue">
            Usuario / Email
          </Label>
          <Input
            type="text"
            {...register('inputValue', {
              required: true,
            })}
            placeholder="Escriba su 'usuario' o su email..."
          />
          {errors.inputValue && (
            <p className="text-red-500">
              Usuario (o Email) es bligatorio...!
            </p>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            {...register('password', { required: true })}
            placeholder="*******"
          />
          {errors.password && (
            <p className="text-red-500">
              Password es obligatorio...
            </p>
          )}

          <Button
            type="submit"
            className="w-full mt-3 mb-4"
          >
            Aceptar
          </Button>
        </form>

        <p className="flex gap-x-2 justify-between">
          No está registrado?
          <Link to="/register" className="text-sky-500">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
