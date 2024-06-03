'use client';

const ErrorCarCreate = ({ brand, model }: { brand: string; model: string }) => {
  return (
    <div className="bg-sky-400 border-l-4 border-indigo-600 text-black-700 p-4 rounded-lg">
      <p className="text-lg">
        Car creation status: <b className="text-red-800">Error</b>
      </p>
      <p>
        Your car{' '}
        <b>
          {brand} {model}
        </b>{' '}
        has not been created. Please try again later.
      </p>
    </div>
  );
};
export default ErrorCarCreate;
