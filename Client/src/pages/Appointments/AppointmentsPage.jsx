import React, { useState } from 'react';
// import { Label } from '../../components/UI';

// Función para verificar si un año es bisiesto...
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  );
};

// Función para obtener los días del mes...
const getDaysInMonth = (month, year) => {
  switch (month) {
    case 'Febrero':
      return isLeapYear(year) ? 29 : 28;
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
      return 30;
    default:
      return 31;
  }
};

// Listado de meses...
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

// Listado de horas...
const hours = [
  '08:00 - 08:50',
  '09:00 - 09:50',
  '10:00 - 10:50',
  '11:00 - 11:50',
  '13:00 - 13:50',
  '14:00 - 14:50',
  '15:00 - 15:50',
  '16:00 - 16:50',
  '17:00 - 17:50',
  '18:00 - 18:50',
];

export function AppointmentsPage() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const currentYear = new Date().getFullYear();

  // Actualiza los días disponibles según el mes seleccionado...
  const daysInMonth = selectedMonth
    ? Array.from(
        {
          length: getDaysInMonth(
            selectedMonth,
            currentYear,
          ),
        },
        (_, i) => i + 1,
      )
    : [];

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-blue-950 max-w-md w-full p-8 rounded-md">
        <h1 className="text-center text-2xl italic text-blue-100 font-bold mb-3">
          Formulario de Cita
        </h1>

        <form>
          <div>
            {/* <Label className="text-blue-100 font-bold">
              Mes:
            </Label> */}
            <select
              className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-3 mt-1 mb-3"
              value={selectedMonth}
              onChange={(e) =>
                setSelectedMonth(e.target.value)
              }
            >
              <option value="" disabled>
                Seleccione el mes
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div>
            {/* <Label>Día:</Label> */}
            <select
              className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-3 mt-1 mb-3"
              value={selectedDay}
              onChange={(e) =>
                setSelectedDay(e.target.value)
              }
              disabled={!selectedMonth}
            >
              <option value="" disabled>
                Seleccione el día
              </option>
              {daysInMonth.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div>
            {/* <label>Hora:</label> */}
            <select
              className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-3 mt-1 mb-3"
              value={selectedHour}
              onChange={(e) =>
                setSelectedHour(e.target.value)
              }
              disabled={!selectedDay}
            >
              <option value="" disabled>
                Seleccione la hora
              </option>
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
