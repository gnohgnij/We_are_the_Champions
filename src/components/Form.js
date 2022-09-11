const Form = (props) => {
  return (
    <form className="mt-6" onSubmit={props.onSubmit}>
      <textarea
        className="outline outline-slate-500 rounded-md p-2 block w-full"
        placeholder={`Enter ${props.teamOrMatch} information here`}
        rows={5}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
      <input
        className="rounded-md bg-lime-500 p-2 place-self-center text-white mt-2 w-full hover:bg-lime-800 cursor-pointer"
        type="submit"
      />
    </form>
  );
};

export default Form;
