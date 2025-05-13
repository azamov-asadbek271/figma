function FormInput({ icon, placeholder, type,register,name }) {

    if (type === "tel") {
        return (
          <div className="relative">
            <input
              {...register(name)}
              placeholder={placeholder}
              type={type}
              className="border-[#8F8F8F] border w-full py-[18px] px-[16px] rounded-[8px]"
              maxLength={12}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
            />
            {icon && <span className="absolute top-6 right-4">{icon}</span>}
          </div>
        );
    }
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="border-[#8F8F8F] border w-full py-[18px] px-[16px] rounded-[8px]"
        {...register(name)}
      />
      {icon ? <div className="absolute top-6 right-4">{icon}</div> : null}
    </div>
  );
}

export default FormInput;
