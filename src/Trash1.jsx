import { useState } from 'react';

const initialFields = [
  { label: 'Name', type: 'text', name: 'name' },
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Age', type: 'number', name: 'age' },
  { label: 'Mobile Number', type: 'tel', name: 'mobileNumber' }
];

const App = () => {
  const [fields, setFields] = useState(initialFields);

  const addField = () => {
    setFields(prevFields => [...prevFields, { label: '', type: '', name: '' }]);
  };

  const updateFields = (event) => {
    const updatedFields = JSON.parse(event.target.value);
    setFields(updatedFields);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={JSON.stringify(fields, null, 2)}
          onChange={updateFields}
        />
      </div>
      <div>
        <form>
          {fields.map(field => (
            <div key={field.name} className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">{field.label}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={field.type}
                name={field.name}
              />
            </div>
          ))}
        </form>
        <button onClick={addField} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add Field
        </button>
      </div>
    </div>
  );
};

export default App;
