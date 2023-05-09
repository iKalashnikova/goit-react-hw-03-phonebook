import React from "react";
import { FilterInput, LabelFilter } from './Filter.styled'

export const Filter = ({value, onChange}) => {
    return (<LabelFilter> Find contacts by name<FilterInput type='text' value={value} onChange={onChange}></FilterInput></LabelFilter>)
}