import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function RegisterPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const {
    signUp,
    isAuthenticated,
    errors: RegisterErrors,
  } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/users/articles');
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] m-16 items-center justify-center">
      <div className="bg-zinc-800 max-w-lg pt-8 pl-8 pr-8 pb-6 rounded-md">
        <h2 className="text-2xl font-bold italic mb-6 text-blue-300">
          Nuevo Usuario
        </h2>
        {RegisterErrors.map((error, i) => (
          <div
            className="bg-red-600 p-2 mx-8 text-white"
            key={i}
          >
            {error}
          </div>
        ))}
        <form
          onSubmit={onSubmit}
          className="flex flex-wrap"
        >
          <div className="w-1/2 pr-4">
            <div>
              <label className="text-md font-bold mt-2 text-white">
                Nombres
              </label>
              <Input
                type="text"
                {...register('name', { required: true })}
                placeholder="Escriba su(s) nombre(s)..."
              />
              {errors.name && (
                <p className="text-red-500">
                  El(los) Nombre(s) es(son)
                  obligatorio(s)...
                </p>
              )}
            </div>

            <div>
              <label className="text-md font-bold mt-2 text-white">
                Apellidos
              </label>
              <Input
                type="text"
                {...register('lastName', {
                  required: true,
                })}
                placeholder="Escriba su(s) apellido(s)..."
              />
              {errors.lastName && (
                <p className="text-red-500">
                  El(los) Apellido(s) es(son)
                  obligatorio(s)...
                </p>
              )}
            </div>

            <div>
              <label className="text-md font-bold mt-2 text-white">
                Edad
              </label>
              <Input
                type="text"
                {...register('age')}
                placeholder="Su edad..."
              />
            </div>

            <div>
              <label className="text-md font-bold mt-2 text-white">
                Email
              </label>
              <Input
                type="text"
                {...register('email', { required: true })}
                placeholder="Escriba su correo..."
              />
              {errors.email && (
                <p className="text-red-500">
                  El correo es obligatorio...
                </p>
              )}
            </div>
          </div>

          <div className="w-1/2 pl-4">
            <div>
              <Label htmlFor="phoneNumber">Teléfono</Label>
              <Input
                type="text"
                {...register('phoneNumber')}
                placeholder="Su número telefónico..."
              />
            </div>

            <div>
              <Label htmlFor="userName">
                Nombre de Usuario
              </Label>
              <Input
                type="text"
                {...register('userName', {
                  required: true,
                })}
                placeholder="Su nombre de usuario..."
              />
              {errors.userName && (
                <p className="text-red-500">
                  El nombre de usuario es requerido...
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                {...register('password', {
                  required: true,
                })}
                placeholder="*******"
              />
              {errors.password && (
                <p className="text-red-500">
                  El password es obligatorio...
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="passwordConfirm">
                Confirm Password
              </Label>
              <Input
                type="password"
                placeholder="*******"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <Button
              type="submit"
              className="flex w-full justify-center mb-5"
            >
              Registrar
            </Button>
          </div>
        </form>

        <p className="flex gap-x-2 justify-between">
          Ya tiene una cuenta?
          <Link to="/login" className="text-sky-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
