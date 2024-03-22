export default function Overall() {
  return (
    <section className="flex gap-x-4 p-6">
      <div className="border-2 border-gray-600 rounded-lg shadow-lg w-1/2 p-6">
        <p className="font-extrabold text-2xl text-primary">Total Users</p>
        <p className="text-center text-xl">20</p>
      </div>
      <div className="border-2 border-gray-600 rounded-lg shadow-lg w-1/2 p-6">
        <p className="font-extrabold text-2xl text-primary">Total Companies</p>
        <p className="text-center text-xl">20</p>
      </div>
    </section>
  );
}
