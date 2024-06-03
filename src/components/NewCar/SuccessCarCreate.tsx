'use client';

const SuccessCarCreate = ({
  brand,
  model,
}: {
  brand: string;
  model: string;
}) => {
  return (
    <div className="bg-sky-400 border-l-4 border-indigo-600 text-black-700 p-4 rounded-lg">
      <p className="text-lg">
        Car creation status: <b className="text-green-800">Created</b>
      </p>
      <p>
        Your car{' '}
        <b>
          {brand} {model}
        </b>{' '}
        has been successfully created.
      </p>
    </div>
  );
};
export default SuccessCarCreate;
