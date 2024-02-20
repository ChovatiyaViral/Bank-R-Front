"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchInput = (props: any) => {
  const {
    inputType,
    inputLabel,
    inputPlaceholder,
    isRequired,
    inputClass,
    isErrorText,
    onChange,
  } = props;
  return (
    <div className="main-input-wrapper">
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        onChange={onChange}
      />
      
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="searchicon"
          style={{ color: "#A19D9D" }}
        />
   
    </div>
  );
};

export default SearchInput;
