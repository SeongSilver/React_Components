/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ButtonComponent from "./Button";
import { Input, Form, Radio, Select } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Rule } from "antd/es/form";
import { CSSProperties, ChangeEvent } from "react";
import { styled } from "styled-components";
import { ButtonGroup } from "../../styles/commonStyle";

const StyledCloseButton = styled.button`
  position: absolute;
  left: 270px;
  top: 50%;
  transform: translateY(-50%);
`;

interface CustomProps {
  name: string[] | string | any;
  placeholder?: string;
  rules?: Rule[];
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  style?: CSSProperties;
  width?: number;
  buttonClick?: () => void;
  value?: string;
  onChange?: any;
  onClick?: (e?: any) => void;
  max?: number;
}

type RadioValues = {
  [key: string]: { label: string };
};

interface CustomRadioProps {
  name: (string | number)[] | string;
  value?: string;
  onchange?: React.Dispatch<React.SetStateAction<string>>;
  labels: RadioValues;
  disabled?: boolean;
  gap?: number;
}

interface CustomSearchProps {
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  style?: CSSProperties;
  buttonClick?: () => void;
  deleteClick?: (value: string) => void;
  value?: string;
  onChange?: any;
  dataStts?: string;
  rules?: Rule[];
}

const CustomInput = ({
  name,
  placeholder,
  rules,
  disabled,
  readOnly,
  hidden,
  max,
  style,
  ...props
}: CustomProps) => {
  return (
    <Form.Item
      noStyle
      name={name}
      rules={rules}
      hidden={hidden && hidden}
      style={style}
    >
      <Input
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        max={max}
        style={style}
        {...props}
      />
    </Form.Item>
  );
};

const CustomTextArea = ({
  name,
  placeholder,
  rules,
  disabled,
  max,
  ...props
}: CustomProps) => {
  return (
    <Form.Item noStyle name={name} rules={rules}>
      <Input.Textarea
        placeholder={placeholder}
        disabled={disabled}
        style={{ fontSize: "17px" }}
        {...props}
        maxLength={max}
      />
    </Form.Item>
  );
};

const CustomRadio = ({
  name,
  value,
  labels,
  disabled,
  gap,
  onchange,
}: CustomRadioProps) => {
  return (
    <Form.Item
      noStyle
      name={name}
      rules={[{ required: true, message: "필수항목" }]}
    >
      <Radio.Group value={value} onChange={onchange} type={"radio"} gap={gap}>
        {Object.entries(labels).map(([key, value]: [string, any]) => {
          return (
            <Radio
              type={"radio"}
              value={key}
              key={key}
              disabled={disabled ? disabled : value.disabled}
            >
              {value.label}
            </Radio>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
};

const CustomSelect = ({
  name,
  placeholder,
  rules,
  options,
  value,
  onChange,
  initialValue,
  ...props
}: any) => {
  return (
    <Form.Item name={name} rules={rules} noStyle initialValue={initialValue}>
      <Select
        value={value}
        options={options ? options : [{ value: "", label: "" }]}
        isform={true}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </Form.Item>
  );
};

const CustomSearch = ({
  placeholder,
  disabled,
  buttonClick,
  value,
  onChange,
  deleteClick,
  dataStts,
  rules,
  ...props
}: CustomSearchProps) => {
  const urlParams = new URL(location.href).searchParams;
  const type = urlParams.get("type");
  return (
    <Form.Item noStyle rules={rules}>
      <ButtonGroup
        style={{ width: "400px", marginLeft: "0", position: "relative" }}
      >
        <Input
          placeholder={placeholder}
          disabled={disabled}
          search
          {...props}
          border={true}
          color={"var(--color-gray-40)"}
          padding={"0 33px 0 8px"}
          // readOnly
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        <StyledCloseButton
          type="button"
          onClick={() => {
            if (deleteClick) {
              deleteClick("");
            }
            onChange("");
          }}
        >
          <img src="/icon/del-round.svg" alt="닫기" />
        </StyledCloseButton>
        <ButtonComponent
          title="조회"
          onClick={buttonClick}
          color="blue"
          width={85}
          height={32}
          disabled={disabled}
        />
      </ButtonGroup>
    </Form.Item>
  );
};

const CustomCheck = ({
  name,
  rules,
  disabled,
  value,
  onChange,
  ...props
}: CustomProps) => {
  const handleChange = (e: CheckboxChangeEvent) => {
    const value = e.target.checked ? "Y" : "N";
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <Form.Item name={name} rules={rules} noStyle initialValue={value}>
      <Input.Check
        value={value!}
        checked={value === "Y"}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
    </Form.Item>
  );
};

const CustomForm = Object.assign(Form, {
  Input: CustomInput,
  TextArea: CustomTextArea,
  Radio: CustomRadio,
  Select: CustomSelect,
  Search: CustomSearch,
  Check: CustomCheck,
});

export default CustomForm;
