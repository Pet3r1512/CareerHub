export default function Error505Page()  {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-semibold mb-4">{`Internal Server Error`}</h1>
                <p className="text-gray-700">{`Sorry, something went wrong on our end. Please try again later.`}</p>
            </div>
        </div>
    );
};


