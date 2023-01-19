
const Input = ({ label, formik, name, type = "text" }) => {
  return (
    <div className="relative z-0 mt-6 w-full group">
      <input
    // autoComplete="off"
    {...formik.getFieldProps(name)}
        type={type}
        name={name}
        id={name}
        className={formik.errors[name] ?
           "block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" 
           : 
           "block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"}
        placeholder=" "
        required
        />
        {formik.errors[name] && formik.touched[name] && (
         <div className="mt-2 mx-auto text-sm text-red-500 text-center italic font-semibold duration-300">
           {formik.errors[name]}
         </div>
        )}

      <label
        htmlFor={name}
        className={formik.errors[name] ? "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" :
         "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"}
        >
        {label}
      </label>

    </div>

  );
};

export default Input;
