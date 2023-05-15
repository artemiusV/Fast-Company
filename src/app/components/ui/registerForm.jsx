import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";

const RegisterForm = () => {
  const [data, setData] = useState({ email: "", password: "", profession: "" });
  const [professions, setProfession] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Эдектронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "E-mail введене некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен сожержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен сожержать хотя бы одно число",
      },
      min: {
        message: "Пароль олен состоять минимум из 8 символов",
        value: 8,
      },
    },
    profession: {
      isRequired: {
        message: "Обязательно выберите вашу профессию",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValue = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        lable="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        lable="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <SelectField
        label="Выбери свою профессию"
        defaultOption="Choose..."
        onChange={handleChange}
        options={professions}
        value={data.profession}
        error={errors.profession}
      />

      <button
        type="submit"
        disabled={!isValue}
        className="btn btn-primary w-100 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
